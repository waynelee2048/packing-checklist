import { useState, useEffect } from 'react';

const UPDATE_INTERVAL = 60 * 60 * 1000; // 每小時檢查一次

export function usePWA() {
  const [needRefresh, setNeedRefresh] = useState(false);
  const [updateSW, setUpdateSW] = useState(null);

  useEffect(() => {
    // Dynamic import to avoid issues during SSR/build
    import('virtual:pwa-register').then(({ registerSW }) => {
      const updateFn = registerSW({
        onRegisteredSW(swUrl, registration) {
          if (!registration) return;
          // 定期檢查 SW 更新
          setInterval(() => {
            registration.update();
          }, UPDATE_INTERVAL);
          // 從背景喚醒時也檢查
          document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
              registration.update();
            }
          });
        },
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
