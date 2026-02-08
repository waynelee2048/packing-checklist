import { useState, useEffect, useCallback } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { db } from '../utils/firebase';

export function useAdmin(user) {
  const [adminEmails, setAdminEmails] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Listen to admin email list from Firebase
  useEffect(() => {
    const adminRef = ref(db, 'adminEmails');
    const unsub = onValue(adminRef, (snapshot) => {
      const val = snapshot.val();
      const emails = Array.isArray(val) ? val : [];
      setAdminEmails(emails);
      setLoading(false);
    }, () => {
      setAdminEmails([]);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  // Check if current user is admin
  useEffect(() => {
    if (!user?.email) {
      setIsAdmin(false);
      return;
    }
    setIsAdmin(adminEmails.some(e => e.toLowerCase() === user.email.toLowerCase()));
  }, [user?.email, adminEmails]);

  // Add an admin email
  const addAdmin = useCallback(async (email) => {
    const normalized = email.toLowerCase().trim();
    if (!normalized) return;
    const updated = [...new Set([...adminEmails, normalized])];
    await set(ref(db, 'adminEmails'), updated);
  }, [adminEmails]);

  // Remove an admin email (cannot remove yourself)
  const removeAdmin = useCallback(async (email) => {
    const normalized = email.toLowerCase().trim();
    if (user?.email?.toLowerCase() === normalized) return;
    const updated = adminEmails.filter(e => e !== normalized);
    await set(ref(db, 'adminEmails'), updated);
  }, [adminEmails, user?.email]);

  return { isAdmin, adminEmails, loading, addAdmin, removeAdmin };
}
