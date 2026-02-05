import { useState } from 'react';
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
          <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />

          <div className="text-lg font-bold text-gray-800 mb-4">分享清單</div>

          {/* Add email input */}
          <div className="flex gap-2 mb-2">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              onKeyDown={handleKeyDown}
              placeholder="輸入 Gmail 帳號..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-500"
            />
            <button
              onClick={handleAdd}
              className="px-5 py-3 bg-gray-700 text-white rounded-xl font-medium active:bg-gray-800"
            >
              新增
            </button>
          </div>
          {error && <div className="text-sm text-red-500 mb-3">{error}</div>}

          {/* Shared users list */}
          {sharedEmails.length > 0 && (
            <div className="mt-4">
              <div className="text-sm text-gray-500 mb-2">已分享給</div>
              <div className="space-y-2">
                {sharedEmails.map(e => (
                  <div key={e} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 text-sm truncate flex-1">{e}</span>
                    <button
                      onClick={() => onRemoveUser(e)}
                      className="ml-2 p-1 text-gray-400 hover:text-red-500"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
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
              className="w-full mt-4 py-3 border border-red-300 text-red-500 rounded-xl font-medium active:bg-red-50"
            >
              停止分享
            </button>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="w-full mt-3 py-3 text-gray-500 font-medium"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  );
}
