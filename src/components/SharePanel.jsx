import { useState } from 'react';
import { X } from 'lucide-react';
import { decodeEmail } from '../utils/data';

export default function SharePanel({ sharedData, onAddUser, onRemoveUser, onUnshare, onClose }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const sharedEmails = sharedData?.sharedWith
    ? Object.keys(sharedData.sharedWith).map(decodeEmail)
    : [];

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleAdd = () => {
    const trimmed = email.trim().toLowerCase();
    if (!trimmed) return;
    if (!validateEmail(trimmed)) {
      setError('請輸入有效的 Email');
      return;
    }
    if (sharedEmails.includes(trimmed)) {
      setError('已經分享給此帳號');
      return;
    }
    setError('');
    onAddUser(trimmed);
    setEmail('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-t-2xl animate-slide-up safe-bottom">
        <div className="p-4">
          {/* Handle bar */}
          <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-4" />

          <div className="text-lg font-bold text-slate-800 mb-4">分享清單</div>

          {/* Add email input */}
          <div className="flex gap-2 mb-2">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              onKeyDown={handleKeyDown}
              placeholder="輸入 Gmail 帳號..."
              className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors duration-150"
            />
            <button
              onClick={handleAdd}
              className="px-5 py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px]"
            >
              新增
            </button>
          </div>
          {error && <div className="text-sm text-rose-500 mb-3">{error}</div>}

          {/* Shared users list */}
          {sharedEmails.length > 0 && (
            <div className="mt-4">
              <div className="text-sm text-slate-500 mb-2">已分享給</div>
              <div className="space-y-2">
                {sharedEmails.map(e => (
                  <div key={e} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-700 text-sm truncate flex-1">{e}</span>
                    <button
                      onClick={() => onRemoveUser(e)}
                      className="ml-2 p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors duration-150"
                      aria-label="移除分享對象"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Unshare button */}
          {sharedEmails.length > 0 && (
            <button
              onClick={onUnshare}
              className="w-full mt-4 py-3 border border-rose-300 text-rose-500 rounded-xl font-medium active:bg-rose-50 transition-colors duration-150 min-h-[44px]"
            >
              停止分享
            </button>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="w-full mt-3 py-3 text-slate-500 font-medium min-h-[44px]"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  );
}
