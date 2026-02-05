import { useState, useEffect, useCallback, useRef } from 'react';
import { ref, set, onValue, update, remove, push } from 'firebase/database';
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
  useEffect(() => {
    if (!user || !data?.lists || !data?.itemLibrary) return;

    data.lists.forEach(list => {
      if (!list.sharedListId) return;
      const sharedData = sharedByMe[list.sharedListId];
      if (!sharedData) return;

      // Build embedded items from current itemLibrary
      const embeddedItems = (Array.isArray(list.items) ? list.items : [])
        .map(id => data.itemLibrary.find(item => item.id === id))
        .filter(Boolean)
        .map(({ id, name, category, note }) => ({ id, name, category, note }));

      // Compare with current shared items
      const currentItems = sharedData.items || [];
      const changed = JSON.stringify(embeddedItems) !== JSON.stringify(currentItems);

      if (changed) {
        const listRef = ref(db, `sharedLists/${list.sharedListId}`);
        update(listRef, {
          items: embeddedItems,
          name: list.name,
          icon: list.icon
        });
      }
    });
  }, [user, data?.lists, data?.itemLibrary, sharedByMe]);

  // Share a list to emails
  const shareList = useCallback(async (list, itemLibrary, emails) => {
    if (!user) return null;

    // Build embedded items
    const embeddedItems = (Array.isArray(list.items) ? list.items : [])
      .map(id => itemLibrary.find(item => item.id === id))
      .filter(Boolean)
      .map(({ id, name, category, note }) => ({ id, name, category, note }));

    // Build sharedWith map
    const sharedWith = {};
    emails.forEach(email => {
      sharedWith[encodeEmail(email)] = true;
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
    updates[`sharedLists/${sharedListId}/sharedWith/${encoded}`] = true;
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

  // Toggle check on shared list
  const toggleSharedCheck = useCallback(async (sharedListId, itemId) => {
    // Read from the correct source
    const sharedData = sharedWithMe[sharedListId] || sharedByMe[sharedListId];
    if (!sharedData) return;

    const checkedItems = Array.isArray(sharedData.checkedItems) ? sharedData.checkedItems : [];
    const isChecked = checkedItems.includes(itemId);
    const newChecked = isChecked
      ? checkedItems.filter(id => id !== itemId)
      : [...checkedItems, itemId];

    const listRef = ref(db, `sharedLists/${sharedListId}/checkedItems`);
    await set(listRef, newChecked);
  }, [sharedWithMe, sharedByMe]);

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
    toggleSharedCheck,
    resetSharedChecks,
    checkAllShared
  };
}
