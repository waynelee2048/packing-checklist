import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'packing-checklist-theme';

function getSystemDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyTheme(preference) {
  const isDark = preference === 'dark' || (preference === 'system' && getSystemDark());
  document.documentElement.classList.toggle('dark', isDark);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', isDark ? '#0f172a' : '#4F46E5');
}

export function useTheme() {
  const [preference, setPreference] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'system';
    } catch {
      return 'system';
    }
  });

  const changeTheme = useCallback((newPref) => {
    setPreference(newPref);
    try { localStorage.setItem(STORAGE_KEY, newPref); } catch {}
    applyTheme(newPref);
  }, []);

  useEffect(() => {
    applyTheme(preference);
  }, [preference]);

  useEffect(() => {
    if (preference !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => applyTheme('system');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [preference]);

  return { preference, changeTheme };
}
