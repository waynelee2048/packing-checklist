import { useState } from 'react';
import { Plus, Trash2, Shield } from 'lucide-react';

export default function AdminAccounts({ user, admin }) {
  const { adminEmails, addAdmin, removeAdmin } = admin;
  const [email, setEmail] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    await addAdmin(email);
    setEmail('');
  };

  const handleRemove = async (target) => {
    if (target === user?.email?.toLowerCase()) {
      alert('無法移除自己的管理員權限');
      return;
    }
    if (!confirm(`確定移除 ${target} 的管理員權限？`)) return;
    await removeAdmin(target);
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">帳號管理</h2>

      {/* Add admin */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4">
        <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-3">新增管理員</h3>
        <form onSubmit={handleAdd} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="輸入 email 地址"
            className="flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button type="submit" disabled={!email.trim()} className="flex items-center gap-1.5 px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50">
            <Plus size={16} /> 新增
          </button>
        </form>
      </div>

      {/* Admin list */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700">
          <h3 className="font-semibold text-slate-900 dark:text-slate-50 text-sm">管理員清單 ({adminEmails.length})</h3>
        </div>
        {adminEmails.length === 0 ? (
          <div className="p-8 text-center text-sm text-slate-400">
            <Shield size={32} className="mx-auto mb-2 opacity-50" />
            <p>尚未設定管理員</p>
            <p className="text-xs mt-1">請至 Firebase Console 手動新增第一位管理員</p>
          </div>
        ) : (
          <ul>
            {adminEmails.map(adminEmail => {
              const isSelf = user?.email?.toLowerCase() === adminEmail;
              return (
                <li key={adminEmail} className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700 last:border-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <Shield size={16} className="text-indigo-500 dark:text-indigo-400 shrink-0" />
                    <span className="text-sm text-slate-800 dark:text-slate-100 truncate">{adminEmail}</span>
                    {isSelf && <span className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded-full shrink-0">你</span>}
                  </div>
                  <button
                    onClick={() => handleRemove(adminEmail)}
                    disabled={isSelf}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded disabled:opacity-30 disabled:hover:text-slate-400 disabled:hover:bg-transparent shrink-0"
                    title={isSelf ? '無法移除自己' : '移除管理員'}
                  >
                    <Trash2 size={16} />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
