import { useState, useEffect, useCallback, useRef } from 'react';
import { ref, set, get, onValue, update, remove, push } from 'firebase/database';
import { db } from '../utils/firebase';
import { encodeEmail, sanitizeSharedList } from '../utils/data';

export function useSharedLists(user, data) {
  const [sharedWithMe, setSharedWithMe] = useState({});
  const [sharedByMe, setSharedByMe] = useState({});
  const listenersRef = useRef({});
  const indexUnsubRef = useRef(null);

  // Clean up a specific listener
  const removeListener = useCallback((id) => {
    if (listenersRef.current[id]) {
      listenersRef.current[id]();
      delete listenersRef.current[id];
    }
  }, []);

  // Clean up all listeners
  const cleanupAll = useCallback(() => {
    Object.keys(listenersRef.current).forEach(removeListener);
    if (indexUnsubRef.current) {
      indexUnsubRef.current();
      indexUnsubRef.current = null;
    }
    setSharedWithMe({});
    setSharedByMe({});
  }, [removeListener]);

  // Subscribe to a single shared list
  const subscribeToSharedList = useCallback((sharedListId, target) => {
    if (listenersRef.current[`${target}_${sharedListId}`]) return;

    const listRef = ref(db, `sharedLists/${sharedListId}`);
    const unsub = onValue(listRef, (snapshot) => {
      const val = snapshot.val();
      if (!val) {
        // List was deleted
        const setter = target === 'withMe' ? setSharedWithMe : setSharedByMe;
        setter(prev => {
          const next = { ...prev };
          delete next[sharedListId];
          return next;
        });
        removeListener(`${target}_${sharedListId}`);
        return;
      }
      const sanitized = sanitizeSharedList(val);
      const setter = target === 'withMe' ? setSharedWithMe : setSharedByMe;
      setter(prev => ({ ...prev, [sharedListId]: sanitized }));
    }, (error) => {
      console.error('共享清單讀取失敗', error);
    });

    listenersRef.current[`${target}_${sharedListId}`] = unsub;
  }, [removeListener]);

  // Subscribe to sharedIndex for current user (lists shared with me)
  useEffect(() => {
    if (!user?.email) {
      cleanupAll();
      return;
    }

    const encoded = encodeEmail(user.email);
    const indexRef = ref(db, `sharedIndex/${encoded}`);

    indexUnsubRef.current = onValue(indexRef, (snapshot) => {
      const val = snapshot.val();
      if (!val) {
        // No lists shared with me - clean up withMe listeners
        Object.keys(listenersRef.current).forEach(key => {
          if (key.startsWith('withMe_')) removeListener(key);
        });
        setSharedWithMe({});
        return;
      }

      const currentIds = new Set(Object.keys(val));

      // Remove listeners for lists no longer shared
      Object.keys(listenersRef.current).forEach(key => {
        if (key.startsWith('withMe_')) {
          const id = key.replace('withMe_', '');
          if (!currentIds.has(id)) {
            removeListener(key);
            setSharedWithMe(prev => {
              const next = { ...prev };
              delete next[id];
              return next;
            });
          }
        }
      });

      // Subscribe to new shared lists
      currentIds.forEach(id => {
        subscribeToSharedList(id, 'withMe');
      });
    }, (error) => {
      console.error('共享索引讀取失敗', error);
    });

    return () => {
      cleanupAll();
    };
  }, [user?.email]);

  // Subscribe to lists I've shared (by checking data.lists for sharedListId)
  useEffect(() => {
    if (!user || !data?.lists) return;

    const mySharedIds = new Set();
    data.lists.forEach(list => {
      if (list.sharedListId) {
        mySharedIds.add(list.sharedListId);
      }
    });

    // Remove listeners for lists no longer in my data
    Object.keys(listenersRef.current).forEach(key => {
      if (key.startsWith('byMe_')) {
        const id = key.replace('byMe_', '');
        if (!mySharedIds.has(id)) {
          removeListener(key);
          setSharedByMe(prev => {
            const next = { ...prev };
            delete next[id];
            return next;
          });
        }
      }
    });

    // Subscribe to each
    mySharedIds.forEach(id => {
      subscribeToSharedList(id, 'byMe');
    });
  }, [user, data?.lists, subscribeToSharedList, removeListener]);

  // Auto-sync: when data.lists or itemLibrary changes, update shared list items
  // Key principle: treat Firebase shared items as source of truth.
  // Only update content of existing owner items, add new owner items,
  // and preserve receiver-added items. Never re-add items that were removed.
  useEffect(() => {
    if (!user || !data?.lists || !data?.itemLibrary) return;

    data.lists.forEach(list => {
      if (!list.sharedListId) return;
      const sharedData = sharedByMe[list.sharedListId];
      if (!sharedData) return;

      const currentItems = sharedData.items || [];

      if (list.disposable) {
        // Disposable: sync inlineItems directly
        const inlineItems = Array.isArray(list.inlineItems) ? list.inlineItems : [];
        const changed = JSON.stringify(inlineItems) !== JSON.stringify(currentItems);
        if (changed) {
          const listRef = ref(db, `sharedLists/${list.sharedListId}`);
          update(listRef, {
            items: inlineItems,
            name: list.name,
            icon: list.icon
          });
        }
        return;
      }

      const currentItemIds = new Set(currentItems.map(i => i.id));
      const ownerItemIds = new Set(Array.isArray(list.items) ? list.items : []);

      // 1. Update existing owner items (refresh name/note/category/photo)
      const updatedExisting = currentItems.map(item => {
        if (!ownerItemIds.has(item.id)) return item; // receiver item — keep as-is
        const libItem = data.itemLibrary.find(li => li.id === item.id);
        if (!libItem) return item; // item removed from library — keep as-is
        const { id, name, category, note, photoURL } = libItem;
        return { id, name, category, ...(note != null && { note }), ...(photoURL && { photoURL }) };
      });

      // 2. Add owner items that are new (in list.items but not yet in shared)
      const newOwnerItems = (Array.isArray(list.items) ? list.items : [])
        .filter(id => !currentItemIds.has(id))
        .map(id => data.itemLibrary.find(item => item.id === id))
        .filter(Boolean)
        .map(({ id, name, category, note, photoURL }) => ({ id, name, category, ...(note != null && { note }), ...(photoURL && { photoURL }) }));

      const mergedItems = [...updatedExisting, ...newOwnerItems];

      const changed = JSON.stringify(mergedItems) !== JSON.stringify(currentItems);

      if (changed) {
        const listRef = ref(db, `sharedLists/${list.sharedListId}`);
        update(listRef, {
          items: mergedItems,
          name: list.name,
          icon: list.icon
        });
      }
    });
  }, [user, data?.lists, data?.itemLibrary, sharedByMe]);

  // Share a list to emails
  const shareList = useCallback(async (list, itemLibrary, emails) => {
    if (!user) return null;

    // Build embedded items — disposable lists already have inline items
    const embeddedItems = list.disposable
      ? (Array.isArray(list.inlineItems) ? list.inlineItems : [])
      : (Array.isArray(list.items) ? list.items : [])
          .map(id => itemLibrary.find(item => item.id === id))
          .filter(Boolean)
          .map(({ id, name, category, note, photoURL }) => ({ id, name, category, ...(note != null && { note }), ...(photoURL && { photoURL }) }));

    // Build sharedWith map
    const sharedWith = {};
    emails.forEach(email => {
      sharedWith[encodeEmail(email)] = 'edit';
    });

    // Create shared list
    const newRef = push(ref(db, 'sharedLists'));
    const sharedListId = newRef.key;

    const sharedListData = {
      owner: user.uid,
      ownerEmail: user.email,
      ownerName: user.displayName || user.email,
      name: list.name,
      icon: list.icon,
      items: embeddedItems,
      checkedItems: Array.isArray(list.checkedItems) ? list.checkedItems : [],
      sharedWith
    };

    // Multi-path atomic update
    const updates = {};
    updates[`sharedLists/${sharedListId}`] = sharedListData;
    emails.forEach(email => {
      updates[`sharedIndex/${encodeEmail(email)}/${sharedListId}`] = true;
    });

    await update(ref(db), updates);
    return sharedListId;
  }, [user]);

  // Add a shared user
  const addSharedUser = useCallback(async (sharedListId, email) => {
    const encoded = encodeEmail(email);
    const updates = {};
    updates[`sharedLists/${sharedListId}/sharedWith/${encoded}`] = 'edit';
    updates[`sharedIndex/${encoded}/${sharedListId}`] = true;
    await update(ref(db), updates);
  }, []);

  // Remove a shared user
  const removeSharedUser = useCallback(async (sharedListId, email) => {
    const encoded = encodeEmail(email);
    const updates = {};
    updates[`sharedLists/${sharedListId}/sharedWith/${encoded}`] = null;
    updates[`sharedIndex/${encoded}/${sharedListId}`] = null;
    await update(ref(db), updates);
  }, []);

  // Completely unshare a list
  const unshareList = useCallback(async (sharedListId) => {
    const sharedData = sharedByMe[sharedListId];
    if (!sharedData) return;

    const updates = {};
    updates[`sharedLists/${sharedListId}`] = null;

    // Clean up all sharedIndex entries
    const sharedWith = sharedData.sharedWith || {};
    Object.keys(sharedWith).forEach(encoded => {
      updates[`sharedIndex/${encoded}/${sharedListId}`] = null;
    });

    await update(ref(db), updates);
  }, [sharedByMe]);

  // Set permission for a shared user
  const setUserPermission = useCallback(async (sharedListId, email, permission) => {
    const encoded = encodeEmail(email);
    await set(ref(db, `sharedLists/${sharedListId}/sharedWith/${encoded}`), permission);
  }, []);

  // Add item to shared list (for receivers with edit permission)
  const addSharedItem = useCallback(async (sharedListId, item) => {
    const itemsRef = ref(db, `sharedLists/${sharedListId}/items`);
    const snapshot = await get(itemsRef);
    const currentItems = snapshot.val() || [];
    const newItems = [...currentItems, item];
    await set(itemsRef, newItems);
  }, []);

  // Remove item from shared list
  const removeSharedItem = useCallback(async (sharedListId, itemId) => {
    const snapshot = await get(ref(db, `sharedLists/${sharedListId}`));
    const sharedData = snapshot.val();
    if (!sharedData) return;
    const newItems = (sharedData.items || []).filter(i => i.id !== itemId);
    const newChecked = (sharedData.checkedItems || []).filter(id => id !== itemId);
    const updates = {};
    updates[`sharedLists/${sharedListId}/items`] = newItems;
    updates[`sharedLists/${sharedListId}/checkedItems`] = newChecked;
    await update(ref(db), updates);
  }, []);

  // Toggle check on shared list
  const toggleSharedCheck = useCallback(async (sharedListId, itemId) => {
    const checkedRef = ref(db, `sharedLists/${sharedListId}/checkedItems`);
    const snapshot = await get(checkedRef);
    const checkedItems = snapshot.val() || [];

    const isChecked = checkedItems.includes(itemId);
    const newChecked = isChecked
      ? checkedItems.filter(id => id !== itemId)
      : [...checkedItems, itemId];

    await set(checkedRef, newChecked);
  }, []);

  // Reset all checks on shared list
  const resetSharedChecks = useCallback(async (sharedListId) => {
    const listRef = ref(db, `sharedLists/${sharedListId}/checkedItems`);
    await set(listRef, []);
  }, []);

  // Check all items on shared list
  const checkAllShared = useCallback(async (sharedListId, allIds) => {
    const listRef = ref(db, `sharedLists/${sharedListId}/checkedItems`);
    await set(listRef, allIds);
  }, []);

  return {
    sharedWithMe,
    sharedByMe,
    shareList,
    addSharedUser,
    removeSharedUser,
    unshareList,
    setUserPermission,
    addSharedItem,
    removeSharedItem,
    toggleSharedCheck,
    resetSharedChecks,
    checkAllShared
  };
}
