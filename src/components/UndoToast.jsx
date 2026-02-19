import { useEffect, useRef } from 'react';

export default function UndoToast({ message, onUndo, onDismiss }) {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(onDismiss, 4000);
    return () => clearTimeout(timerRef.current);
  }, [message, onDismiss]);

  return (
    <div className="fixed left-4 right-4 bottom-[calc(4rem+env(safe-area-inset-bottom)+0.5rem)] z-50 flex items-center justify-between bg-slate-800 dark:bg-slate-700 text-white rounded-xl px-4 py-3 shadow-lg animate-slide-up">
      <span className="text-sm truncate mr-3">{message}</span>
      <button
        onClick={() => {
          clearTimeout(timerRef.current);
          onUndo();
        }}
        className="text-sm font-semibold text-indigo-300 active:text-indigo-200 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
      >
        復原
      </button>
    </div>
  );
}
