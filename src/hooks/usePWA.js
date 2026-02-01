import { useState, useEffect } from 'react';

export function usePWA() {
  const [needRefresh, setNeedRefresh] = useState(false);
  const [updateSW, setUpdateSW] = useState(null);

  useEffect(() => {
    // Dynamic import to avoid issues during SSR/build
    import('virtual:pwa-register').then(({ registerSW }) => {
      const updateFn = registerSW({
        onNeedRefresh() {
          setNeedRefresh(true);
        },
        onOfflineReady() {
          console.log('PWA: 離線模式已就緒');
        }
      });
      setUpdateSW(() => updateFn);
    }).catch(() => {
      // PWA registration not available (dev mode or unsupported)
    });
  }, []);

  const refresh = () => {
    if (updateSW) {
      updateSW(true);
    }
  };

  const dismiss = () => {
    setNeedRefresh(false);
  };

  return { needRefresh, refresh, dismiss };
}
