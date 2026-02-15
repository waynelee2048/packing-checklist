import { useState, useEffect, useCallback, useRef } from 'react';
import { signInWithPopup, signInWithRedirect, getRedirectResult, signOut, onAuthStateChanged } from 'firebase/auth';
import { ref, set, onValue } from 'firebase/database';
import { auth, db, provider } from '../utils/firebase';
import { sanitizeData, loadFromLocal, saveToLocal } from '../utils/data';

export function useFirebase(initialData) {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(initialData);
  const [syncStatus, setSyncStatus] = useState('offline'); // 'offline' | 'syncing' | 'synced' | 'error'
  const unsubscribeRef = useRef(null);

  // Subscribe to Firebase data changes
  const subscribeToFirebase = useCallback((uid) => {
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
    }

    const userRef = ref(db, 'users/' + uid);
    unsubscribeRef.current = onValue(userRef, (snapshot) => {
      const fbData = snapshot.val();
      if (fbData) {
        const sanitized = sanitizeData(fbData);
        setData(sanitized);
        saveToLocal(sanitized);
        setSyncStatus('synced');
      } else {
        // Cloud has no data, upload local data
        saveDataToFirebase(uid, data);
      }
    }, (error) => {
      console.error('Firebase 讀取失敗', error);
      setSyncStatus('error');
    });
  }, []);

  // Save data to Firebase
  const saveDataToFirebase = useCallback((uid, newData) => {
    setSyncStatus('syncing');
    const userRef = ref(db, 'users/' + uid);
    set(userRef, newData)
      .then(() => {
        setSyncStatus('synced');
      })
      .catch(err => {
        console.error('Firebase 儲存失敗', err);
        setSyncStatus('error');
      });
  }, []);

  // Save data (local + Firebase if logged in)
  const saveData = useCallback((newData) => {
    setData(newData);
    saveToLocal(newData);

    if (user) {
      saveDataToFirebase(user.uid, newData);
    }
  }, [user, saveDataToFirebase]);

  // Handle login — 手機用 redirect（popup 在手機觸控會失效），桌面用 popup
  const handleLogin = useCallback(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      signInWithRedirect(auth, provider);
    } else {
      signInWithPopup(auth, provider)
        .catch(err => {
          console.error('登入失敗', err);
        });
    }
  }, []);

  // Handle logout
  const handleLogout = useCallback(() => {
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
      unsubscribeRef.current = null;
    }
    signOut(auth)
      .then(() => {
        setUser(null);
        setSyncStatus('offline');
      })
      .catch(err => {
        console.error('登出失敗', err);
      });
  }, []);

  // 處理 redirect 登入結果（手機登入回來時）
  useEffect(() => {
    getRedirectResult(auth).catch(() => {});
  }, []);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        subscribeToFirebase(user.uid);
      } else {
        setSyncStatus('offline');
        if (unsubscribeRef.current) {
          unsubscribeRef.current();
          unsubscribeRef.current = null;
        }
      }
    });

    return () => {
      unsubscribe();
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, [subscribeToFirebase]);

  return {
    user,
    data,
    syncStatus,
    saveData,
    handleLogin,
    handleLogout
  };
}
