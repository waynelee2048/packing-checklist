import { useState } from 'react';
import { Share2, Users, Plus, X, Trash2, UserMinus } from 'lucide-react';
import { decodeEmail } from '../../utils/data';

export default function AdminSharing({ data, shared }) {
  const [tab, setTab] = useState('byMe');
  const [addingEmail, setAddingEmail] = useState({});
  const [emailInput, setEmailInput] = useState('');

  const sharedByMe = shared.sharedByMe || {};
  const sharedWithMe = shared.sharedWithMe || {};

  const getListName = (sharedListId) => {
    const list = data.lists.find(l => l.sharedListId === sharedListId);
    return list?.name || sharedByMe[sharedListId]?.name || '未知清單';
  };

  const handleAddUser = async (sharedListId) => {
    const email = emailInput.trim();
    if (!email) return;
    try {
      await shared.addSharedUser(sharedListId, email);
      setAddingEmail({});
      setEmailInput('');
    } catch (e) {
      alert('新增失敗：' + e.message);
    }
  };

  const handleRemoveUser = async (sharedListId, email) => {
    if (!confirm(`移除 ${email} 的存取權限？`)) return;
    try {
      await shared.removeSharedUser(sharedListId, email);
    } catch (e) {
      alert('移除失敗：' + e.message);
    }
  };

  const handleUnshare = async (sharedListId) => {
    if (!confirm('確定取消分享此清單？所有分享對象將失去存取權限。')) return;
    try {
      await shared.unshareList(sharedListId);
    } catch (e) {
      alert('取消分享失敗：' + e.message);
    }
  };

  const byMeEntries = Object.entries(sharedByMe);
  const withMeEntries = Object.entries(sharedWithMe);

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-4">分享管理</h2>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-4">
        <button
          onClick={() => setTab('byMe')}
          className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${tab === 'byMe' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          <Share2 size={16} /> 我分享的 ({byMeEntries.length})
        </button>
        <button
          onClick={() => setTab('withMe')}
          className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${tab === 'withMe' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          <Users size={16} /> 分享給我的 ({withMeEntries.length})
        </button>
      </div>

      {/* Shared by me */}
      {tab === 'byMe' && (
        <div>
          {byMeEntries.length === 0 ? (
            <p className="text-center py-8 text-sm text-slate-400">尚未分享任何清單</p>
          ) : (
            <>
              {/* Desktop table */}
              <div className="hidden lg:block bg-white border border-slate-200 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-slate-600">清單名稱</th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-slate-600">分享對象</th>
                      <th className="w-32 px-4 py-3 text-sm font-semibold text-slate-600">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {byMeEntries.map(([id, sharedList]) => {
                      const emails = Object.keys(sharedList.sharedWith || {}).map(decodeEmail);
                      return (
                        <tr key={id} className="border-b border-slate-100 last:border-0">
                          <td className="px-4 py-3 text-sm font-medium text-slate-800">{getListName(id)}</td>
                          <td className="px-4 py-3">
                            <div className="flex flex-wrap gap-1.5">
                              {emails.map(email => (
                                <span key={email} className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 text-slate-600 rounded-full">
                                  {email}
                                  <button onClick={() => handleRemoveUser(id, email)} className="text-slate-400 hover:text-rose-500"><X size={12} /></button>
                                </span>
                              ))}
                              {addingEmail[id] ? (
                                <form onSubmit={e => { e.preventDefault(); handleAddUser(id); }} className="inline-flex gap-1">
                                  <input
                                    value={emailInput}
                                    onChange={e => setEmailInput(e.target.value)}
                                    placeholder="email"
                                    className="px-2 py-0.5 text-xs border border-slate-300 rounded w-40"
                                    autoFocus
                                  />
                                  <button type="submit" className="text-emerald-600"><Plus size={14} /></button>
                                  <button type="button" onClick={() => { setAddingEmail({}); setEmailInput(''); }} className="text-slate-400"><X size={14} /></button>
                                </form>
                              ) : (
                                <button onClick={() => setAddingEmail({ [id]: true })} className="text-xs text-indigo-600 hover:underline">+ 新增</button>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <button onClick={() => handleUnshare(id)} className="flex items-center gap-1 px-2 py-1 text-xs text-rose-500 hover:bg-rose-50 rounded-lg">
                              <Trash2 size={14} /> 取消分享
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="lg:hidden space-y-3">
                {byMeEntries.map(([id, sharedList]) => {
                  const emails = Object.keys(sharedList.sharedWith || {}).map(decodeEmail);
                  return (
                    <div key={id} className="bg-white border border-slate-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-slate-800">{getListName(id)}</h3>
                        <button onClick={() => handleUnshare(id)} className="text-xs text-rose-500 hover:underline">取消分享</button>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {emails.map(email => (
                          <span key={email} className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 text-slate-600 rounded-full">
                            {email}
                            <button onClick={() => handleRemoveUser(id, email)} className="text-slate-400 hover:text-rose-500"><X size={12} /></button>
                          </span>
                        ))}
                      </div>
                      {addingEmail[id] ? (
                        <form onSubmit={e => { e.preventDefault(); handleAddUser(id); }} className="flex gap-2">
                          <input value={emailInput} onChange={e => setEmailInput(e.target.value)} placeholder="輸入 email" className="flex-1 px-2 py-1 text-sm border border-slate-300 rounded-lg" autoFocus />
                          <button type="submit" className="px-2 py-1 text-sm bg-indigo-600 text-white rounded-lg">新增</button>
                          <button type="button" onClick={() => { setAddingEmail({}); setEmailInput(''); }} className="px-2 py-1 text-sm bg-slate-200 rounded-lg">取消</button>
                        </form>
                      ) : (
                        <button onClick={() => setAddingEmail({ [id]: true })} className="text-sm text-indigo-600 hover:underline">+ 新增分享對象</button>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}

      {/* Shared with me */}
      {tab === 'withMe' && (
        <div>
          {withMeEntries.length === 0 ? (
            <p className="text-center py-8 text-sm text-slate-400">沒有人分享清單給你</p>
          ) : (
            <>
              {/* Desktop table */}
              <div className="hidden lg:block bg-white border border-slate-200 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-slate-600">清單名稱</th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-slate-600">來源</th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-slate-600">勾選進度</th>
                    </tr>
                  </thead>
                  <tbody>
                    {withMeEntries.map(([id, sharedList]) => {
                      const total = (sharedList.items || []).length;
                      const checked = (sharedList.checkedItems || []).length;
                      return (
                        <tr key={id} className="border-b border-slate-100 last:border-0">
                          <td className="px-4 py-3 text-sm font-medium text-slate-800">{sharedList.name}</td>
                          <td className="px-4 py-3 text-sm text-slate-500">{sharedList.ownerName || sharedList.ownerEmail}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: total > 0 ? `${(checked / total) * 100}%` : '0%' }} />
                              </div>
                              <span className="text-xs text-slate-500">{checked}/{total}</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="lg:hidden space-y-3">
                {withMeEntries.map(([id, sharedList]) => {
                  const total = (sharedList.items || []).length;
                  const checked = (sharedList.checkedItems || []).length;
                  return (
                    <div key={id} className="bg-white border border-slate-200 rounded-xl p-4">
                      <h3 className="font-medium text-slate-800">{sharedList.name}</h3>
                      <p className="text-sm text-slate-500 mt-0.5">來自 {sharedList.ownerName || sharedList.ownerEmail}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: total > 0 ? `${(checked / total) * 100}%` : '0%' }} />
                        </div>
                        <span className="text-xs text-slate-500">{checked}/{total}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
