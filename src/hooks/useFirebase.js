import { useState, useEffect, useCallback, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { sanitizeData, loadFromLocal, saveToLocal } from '../utils/data';

const firebaseConfig = {
  apiKey: "AIzaSyC3tTgAIVm0qz5irkqb7AkjwY7FOMJz4RM",
  authDomain: "packing-8b3de.firebaseapp.com",
  databaseURL: "https://packing-8b3de-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "packing-8b3de",
  storageBucket: "packing-8b3de.firebasestorage.app",
  messagingSenderId: "109766093944",
  appId: "1:109766093944:web:35b8d72158750ab522d18d",
  measurementId: "G-GRY36B729W"
};

// Initialize Firebase once
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();

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

  // Handle login
  const handleLogin = useCallback(() => {
    signInWithPopup(auth, provider)
      .catch(err => {
        console.error('登入失敗', err);
        alert('登入失敗：' + err.message);
      });
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
