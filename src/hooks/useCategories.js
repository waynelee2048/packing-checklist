import { useState, useEffect, useCallback } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { db } from '../utils/firebase';
import { categories as defaultCategories } from '../utils/data';

export function useCategories() {
  const [categories, setCategories] = useState(defaultCategories);

  useEffect(() => {
    const catRef = ref(db, 'categories');
    const unsub = onValue(catRef, (snapshot) => {
      const val = snapshot.val();
      if (Array.isArray(val) && val.length > 0) {
        setCategories(val);
      } else {
        setCategories(defaultCategories);
      }
    }, () => {
      setCategories(defaultCategories);
    });

    return () => unsub();
  }, []);

  const saveCategories = useCallback(async (newCategories) => {
    await set(ref(db, 'categories'), newCategories);
  }, []);

  const addCategory = useCallback(async (name) => {
    const trimmed = name.trim();
    if (!trimmed || categories.includes(trimmed)) return;
    const updated = [...categories, trimmed];
    await saveCategories(updated);
  }, [categories, saveCategories]);

  const updateCategory = useCallback(async (oldName, newName) => {
    const trimmed = newName.trim();
    if (!trimmed || trimmed === oldName) return;
    if (categories.includes(trimmed)) return;
    const updated = categories.map(c => c === oldName ? trimmed : c);
    await saveCategories(updated);
  }, [categories, saveCategories]);

  const removeCategory = useCallback(async (name) => {
    const updated = categories.filter(c => c !== name);
    if (updated.length === 0) return;
    await saveCategories(updated);
  }, [categories, saveCategories]);

  return { categories, addCategory, updateCategory, removeCategory };
}
