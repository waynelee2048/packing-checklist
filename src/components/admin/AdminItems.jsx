import { useState, useRef } from 'react';
import { Search, Filter, Trash2, Edit3, Download, Upload, Check, X, Tag } from 'lucide-react';
import { categories } from '../../utils/data';

export default function AdminItems({ data, onSaveData }) {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [selected, setSelected] = useState(new Set());
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', category: '', note: '' });
  const [batchCategory, setBatchCategory] = useState('');
  const [showBatchCategory, setShowBatchCategory] = useState(false);
  const fileInputRef = useRef(null);

  const items = data.itemLibrary.filter(item => {
    const matchSearch = !search || item.name.toLowerCase().includes(search.toLowerCase()) || (item.note || '').toLowerCase().includes(search.toLowerCase());
    const matchCategory = !categoryFilter || item.category === categoryFilter;
    return matchSearch && matchCategory;
  });

  const toggleSelect = (id) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selected.size === items.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(items.map(i => i.id)));
    }
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditForm({ name: item.name, category: item.category, note: item.note || '' });
  };

  const saveEdit = () => {
    const newLibrary = data.itemLibrary.map(item =>
      item.id === editingId ? { ...item, ...editForm } : item
    );
    onSaveData({ ...data, itemLibrary: newLibrary });
    setEditingId(null);
  };

  const deleteItems = (ids) => {
    const idSet = new Set(ids);
    const newLibrary = data.itemLibrary.filter(item => !idSet.has(item.id));
    const newLists = data.lists.map(list => ({
      ...list,
      items: (list.items || []).filter(id => !idSet.has(id)),
      checkedItems: (list.checkedItems || []).filter(id => !idSet.has(id)),
    }));
    onSaveData({ ...data, itemLibrary: newLibrary, lists: newLists });
    setSelected(new Set());
  };

  const batchChangeCategory = () => {
    if (!batchCategory) return;
    const newLibrary = data.itemLibrary.map(item =>
      selected.has(item.id) ? { ...item, category: batchCategory } : item
    );
    onSaveData({ ...data, itemLibrary: newLibrary });
    setSelected(new Set());
    setShowBatchCategory(false);
    setBatchCategory('');
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(data.itemLibrary, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'item-library.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importJSON = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const imported = JSON.parse(ev.target.result);
        if (!Array.isArray(imported)) {
          alert('格式錯誤：需要 JSON 陣列');
          return;
        }
        const valid = imported.every(item => item.name && item.category);
        if (!valid) {
          alert('格式錯誤：每個物品需包含 name 和 category');
          return;
        }
        const maxId = Math.max(0, ...data.itemLibrary.map(i => i.id));
        const existingNames = new Set(data.itemLibrary.map(i => i.name));
        const newItems = imported
          .filter(item => !existingNames.has(item.name))
          .map((item, idx) => ({
            id: item.id || maxId + idx + 1,
            name: item.name,
            category: item.category,
            note: item.note || '',
            ...(item.photoURL ? { photoURL: item.photoURL } : {}),
          }));
        if (newItems.length === 0) {
          alert('沒有新物品可匯入（全部重複）');
          return;
        }
        // Re-assign IDs to avoid conflicts
        const allIds = new Set(data.itemLibrary.map(i => i.id));
        let nextId = maxId + 1;
        newItems.forEach(item => {
          while (allIds.has(nextId)) nextId++;
          item.id = nextId;
          allIds.add(nextId);
          nextId++;
        });
        onSaveData({ ...data, itemLibrary: [...data.itemLibrary, ...newItems] });
        alert(`已匯入 ${newItems.length} 個物品`);
      } catch {
        alert('JSON 解析失敗');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <h2 className="text-xl font-bold text-slate-900">物品管理</h2>
        <div className="flex gap-2">
          <button onClick={exportJSON} className="flex items-center gap-1.5 px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg hover:bg-slate-50">
            <Download size={16} /> 匯出
          </button>
          <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-1.5 px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg hover:bg-slate-50">
            <Upload size={16} /> 匯入
          </button>
          <input ref={fileInputRef} type="file" accept=".json" onChange={importJSON} className="hidden" />
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="搜尋物品..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="relative">
          <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <select
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
            className="pl-9 pr-8 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
          >
            <option value="">所有分類</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {/* Batch actions */}
      {selected.size > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-4 p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
          <span className="text-sm font-medium text-indigo-700">已選 {selected.size} 項</span>
          <button
            onClick={() => { if (confirm(`確定刪除 ${selected.size} 個物品？`)) deleteItems([...selected]); }}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-rose-500 text-white rounded-lg hover:bg-rose-600"
          >
            <Trash2 size={14} /> 批量刪除
          </button>
          {showBatchCategory ? (
            <div className="flex items-center gap-2">
              <select value={batchCategory} onChange={e => setBatchCategory(e.target.value)} className="px-2 py-1.5 text-sm border border-slate-200 rounded-lg bg-white">
                <option value="">選擇分類</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <button onClick={batchChangeCategory} disabled={!batchCategory} className="px-2 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50">
                <Check size={14} />
              </button>
              <button onClick={() => { setShowBatchCategory(false); setBatchCategory(''); }} className="px-2 py-1.5 text-sm bg-slate-200 rounded-lg hover:bg-slate-300">
                <X size={14} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowBatchCategory(true)}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-500 text-white rounded-lg hover:bg-amber-600"
            >
              <Tag size={14} /> 批量改分類
            </button>
          )}
        </div>
      )}

      {/* Desktop table */}
      <div className="hidden lg:block bg-white border border-slate-200 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="w-10 px-4 py-3">
                <input type="checkbox" checked={items.length > 0 && selected.size === items.length} onChange={toggleSelectAll} className="rounded" />
              </th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-slate-600">名稱</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-slate-600">分類</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-slate-600">備註</th>
              <th className="w-24 px-4 py-3 text-sm font-semibold text-slate-600">操作</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                <td className="px-4 py-3">
                  <input type="checkbox" checked={selected.has(item.id)} onChange={() => toggleSelect(item.id)} className="rounded" />
                </td>
                {editingId === item.id ? (
                  <>
                    <td className="px-4 py-2">
                      <input value={editForm.name} onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))} className="w-full px-2 py-1 border border-slate-300 rounded text-sm" />
                    </td>
                    <td className="px-4 py-2">
                      <select value={editForm.category} onChange={e => setEditForm(f => ({ ...f, category: e.target.value }))} className="px-2 py-1 border border-slate-300 rounded text-sm bg-white">
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </td>
                    <td className="px-4 py-2">
                      <input value={editForm.note} onChange={e => setEditForm(f => ({ ...f, note: e.target.value }))} className="w-full px-2 py-1 border border-slate-300 rounded text-sm" />
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex gap-1">
                        <button onClick={saveEdit} className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded"><Check size={16} /></button>
                        <button onClick={() => setEditingId(null)} className="p-1.5 text-slate-400 hover:bg-slate-100 rounded"><X size={16} /></button>
                      </div>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-4 py-3 text-sm text-slate-800">{item.name}</td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">{item.category}</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500">{item.note || '-'}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1">
                        <button onClick={() => startEdit(item)} className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded"><Edit3 size={16} /></button>
                        <button onClick={() => { if (confirm(`刪除「${item.name}」？`)) deleteItems([item.id]); }} className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
            {items.length === 0 && (
              <tr><td colSpan={5} className="text-center py-8 text-sm text-slate-400">沒有符合的物品</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="lg:hidden space-y-2">
        {items.length === 0 && <p className="text-center py-8 text-sm text-slate-400">沒有符合的物品</p>}
        {items.map(item => (
          <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <input type="checkbox" checked={selected.has(item.id)} onChange={() => toggleSelect(item.id)} className="mt-1 rounded" />
              {editingId === item.id ? (
                <div className="flex-1 space-y-2">
                  <input value={editForm.name} onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))} className="w-full px-2 py-1 border border-slate-300 rounded text-sm" />
                  <select value={editForm.category} onChange={e => setEditForm(f => ({ ...f, category: e.target.value }))} className="w-full px-2 py-1 border border-slate-300 rounded text-sm bg-white">
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <input value={editForm.note} onChange={e => setEditForm(f => ({ ...f, note: e.target.value }))} className="w-full px-2 py-1 border border-slate-300 rounded text-sm" placeholder="備註" />
                  <div className="flex gap-2">
                    <button onClick={saveEdit} className="px-3 py-1 text-sm bg-emerald-500 text-white rounded-lg">儲存</button>
                    <button onClick={() => setEditingId(null)} className="px-3 py-1 text-sm bg-slate-200 rounded-lg">取消</button>
                  </div>
                </div>
              ) : (
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-800">{item.name}</span>
                    <div className="flex gap-1">
                      <button onClick={() => startEdit(item)} className="p-1.5 text-slate-400 hover:text-indigo-600"><Edit3 size={16} /></button>
                      <button onClick={() => { if (confirm(`刪除「${item.name}」？`)) deleteItems([item.id]); }} className="p-1.5 text-slate-400 hover:text-rose-600"><Trash2 size={16} /></button>
                    </div>
                  </div>
                  <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">{item.category}</span>
                  {item.note && <p className="text-sm text-slate-500 mt-1">{item.note}</p>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
