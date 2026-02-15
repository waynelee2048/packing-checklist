import { useState, useEffect } from 'react';

const UPDATE_INTERVAL = 60 * 60 * 1000; // 每小時檢查一次

export function usePWA() {
  const [needRefresh, setNeedRefresh] = useState(false);
  const [updateSW, setUpdateSW] = useState(null);
  const [registration, setRegistration] = useState(null);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    // Dynamic import to avoid issues during SSR/build
    import('virtual:pwa-register').then(({ registerSW }) => {
      const updateFn = registerSW({
        onRegisteredSW(swUrl, reg) {
          if (!reg) return;
          setRegistration(reg);
          // 定期檢查 SW 更新
          setInterval(() => {
            reg.update();
          }, UPDATE_INTERVAL);
          // 從背景喚醒時也檢查
          document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
              reg.update();
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

  const checkForUpdate = async () => {
    if (!registration) return;
    setChecking(true);
    try {
      await registration.update();
    } catch {
      // ignore
    }
    // 給 SW 一點時間偵測新版本
    setTimeout(() => setChecking(false), 1500);
  };

  return { needRefresh, refresh, dismiss, checkForUpdate, checking };
}
