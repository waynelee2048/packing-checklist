import { useState } from 'react';
import { Search, X, StickyNote } from 'lucide-react';
import { categories } from '../utils/data';

function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" onClick={onCancel}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div
        className="relative w-full max-w-lg bg-white rounded-t-2xl animate-slide-up safe-bottom"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6">
          <p className="text-center text-lg text-slate-800 mb-6">{message}</p>
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 py-3 text-slate-600 border border-slate-300 rounded-xl font-medium active:bg-slate-100 transition-colors duration-150 min-h-[44px]"
            >
              取消
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]"
            >
              確定刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LibraryView({ data, onNavigate, onSaveData }) {
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState(categories[0]);
  const [newItemNote, setNewItemNote] = useState('');
  const [editingItemId, setEditingItemId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  // Group items by category
  const groupedItems = {};
  categories.forEach(cat => { groupedItems[cat] = []; });
  (data.itemLibrary || []).forEach(item => {
    if (groupedItems[item.category]) {
      groupedItems[item.category].push(item);
    }
  });

  const addItemToLibrary = () => {
    if (!newItemName.trim()) return;

    const newItem = {
      id: Date.now(),
      name: newItemName.trim(),
      category: newItemCategory,
      note: newItemNote.trim()
    };

    const newData = {
      ...data,
      itemLibrary: [...data.itemLibrary, newItem]
    };

    onSaveData(newData);
    setNewItemName('');
    setNewItemNote('');
  };

  const updateItem = (itemId, name, category, note) => {
    const newData = {
      ...data,
      itemLibrary: data.itemLibrary.map(item =>
        item.id === itemId ? { ...item, name, category, note } : item
      )
    };
    onSaveData(newData);
    setEditingItemId(null);
  };

  const deleteItemFromLibrary = (itemId) => {
    const newData = {
      ...data,
      itemLibrary: data.itemLibrary.filter(item => item.id !== itemId),
      lists: data.lists.map(list => ({
        ...list,
        items: (list.items || []).filter(id => id !== itemId),
        checkedItems: (list.checkedItems || []).filter(id => id !== itemId)
      }))
    };
    onSaveData(newData);
    setConfirmDeleteId(null);
  };

  const editingItem = editingItemId ? data.itemLibrary.find(i => i.id === editingItemId) : null;

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-white text-slate-900 px-4 py-3 border-b border-slate-200 safe-top">
        <div className="text-lg font-bold text-center">物品庫</div>
      </div>

      {/* Add new item form */}
      <div className="p-4 bg-white border-b border-slate-200">
        <div className="text-sm text-slate-500 mb-2">新增物品</div>
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="物品名稱..."
          className="w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 focus:outline-none focus:border-indigo-500 transition-colors duration-150"
        />
        <select
          value={newItemCategory}
          onChange={(e) => setNewItemCategory(e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 bg-white focus:outline-none focus:border-indigo-500 transition-colors duration-150"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="text"
          value={newItemNote}
          onChange={(e) => setNewItemNote(e.target.value)}
          placeholder="備註（選填）：存放位置、提醒事項..."
          className="w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors duration-150"
        />
        <button
          onClick={addItemToLibrary}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px]"
        >
          + 新增物品
        </button>
      </div>

      {/* Search bar */}
      <div className="px-4 py-2 bg-white border-b border-slate-200">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜尋物品..."
            className="w-full pl-9 pr-8 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-150"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center"
              aria-label="清除搜尋"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Items list */}
      <div className="flex-1 overflow-y-auto p-4 pb-20 no-scrollbar">
        {categories.map(category => {
          const items = searchQuery
            ? groupedItems[category].filter(item => {
                const q = searchQuery.toLowerCase();
                return item.name?.toLowerCase().includes(q) || item.note?.toLowerCase().includes(q);
              })
            : groupedItems[category];
          if (items.length === 0) return null;

          return (
            <div key={category} className="mb-4">
              <div className="text-sm text-indigo-600 font-semibold mb-2">{category}</div>
              <div className="space-y-2">
                {items.map(item => (
                  <div key={item.id} className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between min-h-[36px]">
                      <span className="font-medium text-slate-800">{item.name}</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingItemId(item.id)}
                          className="text-sm text-slate-400 px-2 py-1 rounded active:bg-slate-100 transition-colors duration-150 min-h-[32px]"
                        >
                          編輯
                        </button>
                        <button
                          onClick={() => setConfirmDeleteId(item.id)}
                          className="text-sm text-rose-400 px-2 py-1 rounded active:bg-rose-50 transition-colors duration-150 min-h-[32px]"
                        >
                          刪除
                        </button>
                      </div>
                    </div>
                    {item.note && (
                      <div className="text-sm text-slate-400 mt-1 flex items-center gap-1">
                        <StickyNote size={12} className="flex-shrink-0" />
                        {item.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Edit modal */}
      {editingItem && (
        <EditItemModal
          item={editingItem}
          categories={categories}
          onSave={updateItem}
          onClose={() => setEditingItemId(null)}
        />
      )}

      {/* Confirm delete dialog */}
      {confirmDeleteId !== null && (
        <ConfirmDialog
          message="確定刪除此物品？"
          onConfirm={() => deleteItemFromLibrary(confirmDeleteId)}
          onCancel={() => setConfirmDeleteId(null)}
        />
      )}
    </div>
  );
}

function EditItemModal({ item, categories, onSave, onClose }) {
  const [name, setName] = useState(item.name);
  const [category, setCategory] = useState(item.category);
  const [note, setNote] = useState(item.note || '');

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-t-2xl p-6 safe-bottom"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-lg font-bold mb-4 text-slate-900">編輯物品</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 focus:outline-none focus:border-indigo-500 transition-colors duration-150"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 bg-white focus:outline-none focus:border-indigo-500 transition-colors duration-150"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="備註（選填）"
          className="w-full px-4 py-3 border border-slate-300 rounded-xl mb-4 focus:outline-none focus:border-indigo-500 transition-colors duration-150"
        />
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 border border-slate-300 rounded-xl font-medium active:bg-slate-100 transition-colors duration-150 min-h-[44px]"
          >
            取消
          </button>
          <button
            onClick={() => onSave(item.id, name, category, note)}
            className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px]"
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  );
}
