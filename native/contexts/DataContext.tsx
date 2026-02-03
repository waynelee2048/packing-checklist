import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { ref, set, onValue } from 'firebase/database';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth, db } from '@/utils/firebase';
import { AppData, defaultData, sanitizeData } from '@/utils/data';
import { loadFromLocal, saveToLocal } from '@/utils/storage';

type SyncStatus = 'offline' | 'syncing' | 'synced' | 'error';

interface DataContextValue {
  user: User | null;
  data: AppData;
  syncStatus: SyncStatus;
  saveData: (newData: AppData) => void;
  handleLogout: () => void;
  isLoading: boolean;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [data, setData] = useState<AppData>(defaultData);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('offline');
  const [isLoading, setIsLoading] = useState(true);
  const unsubscribeRef = useRef<(() => void) | null>(null);

  // Load local data on mount
  useEffect(() => {
    const loadData = async () => {
      const localData = await loadFromLocal();
      setData(localData);
      setIsLoading(false);
    };
    loadData();
  }, []);

  // Subscribe to Firebase data changes
  const subscribeToFirebase = useCallback((uid: string) => {
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
  }, [data]);

  // Save data to Firebase
  const saveDataToFirebase = useCallback((uid: string, newData: AppData) => {
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
  const saveData = useCallback((newData: AppData) => {
    setData(newData);
    saveToLocal(newData);

    if (user) {
      saveDataToFirebase(user.uid, newData);
    }
  }, [user, saveDataToFirebase]);

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
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      if (authUser) {
        subscribeToFirebase(authUser.uid);
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

  return (
    <DataContext.Provider value={{
      user,
      data,
      syncStatus,
      saveData,
      handleLogout,
      isLoading
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
