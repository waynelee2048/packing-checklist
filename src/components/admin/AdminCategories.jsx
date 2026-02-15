import { useState } from 'react';
import { Plus, X, Check, Edit3, Trash2 } from 'lucide-react';

export default function AdminCategories({ categories, addCategory, updateCategory, removeCategory }) {
  const [newName, setNewName] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const handleAdd = async () => {
    const trimmed = newName.trim();
    if (!trimmed) return;
    await addCategory(trimmed);
    setNewName('');
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditName(categories[index]);
  };

  const saveEdit = async () => {
    if (editingIndex === null) return;
    await updateCategory(categories[editingIndex], editName);
    setEditingIndex(null);
    setEditName('');
  };

  const handleRemove = async (name) => {
    if (categories.length <= 1) return;
    if (!confirm(`確定刪除分類「${name}」？已使用此分類的物品不會被刪除。`)) return;
    await removeCategory(name);
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">分類管理</h2>

      {/* Category list */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden mb-4">
        {categories.map((cat, index) => (
          <div
            key={cat}
            className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700 last:border-0"
          >
            {editingIndex === index ? (
              <div className="flex items-center gap-2 flex-1">
                <input
                  value={editName}
                  onChange={e => setEditName(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') saveEdit(); if (e.key === 'Escape') setEditingIndex(null); }}
                  className="flex-1 px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button onClick={saveEdit} className="p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded">
                  <Check size={16} />
                </button>
                <button onClick={() => setEditingIndex(null)} className="p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded">
                  <X size={16} />
                </button>
              </div>
            ) : (
              <>
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">{cat}</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => startEdit(index)}
                    className="p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded"
                  >
                    <Edit3 size={16} />
                  </button>
                  {categories.length > 1 && (
                    <button
                      onClick={() => handleRemove(cat)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Add new category */}
      <div className="flex gap-2">
        <input
          type="text"
          value={newName}
          onChange={e => setNewName(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') handleAdd(); }}
          placeholder="新增分類名稱..."
          className="flex-1 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleAdd}
          disabled={!newName.trim()}
          className="flex items-center gap-1.5 px-4 py-2.5 text-sm bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 disabled:opacity-50 transition-colors"
        >
          <Plus size={16} /> 新增
        </button>
      </div>
    </div>
  );
}
