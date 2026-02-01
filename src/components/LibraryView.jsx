import { useState } from 'react';
import { categories } from '../utils/data';

export default function LibraryView({ data, onNavigate, onSaveData }) {
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState(categories[0]);
  const [newItemNote, setNewItemNote] = useState('');
  const [editingItemId, setEditingItemId] = useState(null);

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
    if (!confirm('確定刪除？')) return;

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
  };

  const editingItem = editingItemId ? data.itemLibrary.find(i => i.id === editingItemId) : null;

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-gray-700 text-white px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('lists')}
            className="p-2 -ml-2 rounded-lg hover:bg-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <div className="text-lg font-bold">📚 物品庫</div>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Add new item form */}
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <div className="text-sm text-gray-500 mb-2">新增物品</div>
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="物品名稱..."
          className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-2 focus:outline-none focus:border-gray-500"
        />
        <select
          value={newItemCategory}
          onChange={(e) => setNewItemCategory(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-2 bg-white focus:outline-none focus:border-gray-500"
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
          className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-2 text-gray-600 focus:outline-none focus:border-gray-500"
        />
        <button
          onClick={addItemToLibrary}
          className="w-full py-3 bg-gray-700 text-white rounded-xl font-medium active:bg-gray-800"
        >
          + 新增物品
        </button>
      </div>

      {/* Items list */}
      <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
        {categories.map(category => {
          const items = groupedItems[category];
          if (items.length === 0) return null;

          return (
            <div key={category} className="mb-4">
              <div className="text-sm text-gray-500 font-medium mb-2">{category}</div>
              <div className="space-y-2">
                {items.map(item => (
                  <div key={item.id} className="p-3 bg-white rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">{item.name}</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingItemId(item.id)}
                          className="text-sm text-gray-400 px-2"
                        >
                          編輯
                        </button>
                        <button
                          onClick={() => deleteItemFromLibrary(item.id)}
                          className="text-sm text-red-400 px-2"
                        >
                          刪除
                        </button>
                      </div>
                    </div>
                    {item.note && (
                      <div className="text-sm text-gray-400 mt-1">📝 {item.note}</div>
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
        <div className="text-lg font-bold mb-4">編輯物品</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-2 focus:outline-none focus:border-gray-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-2 bg-white focus:outline-none focus:border-gray-500"
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
          className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:border-gray-500"
        />
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 border border-gray-300 rounded-xl font-medium"
          >
            取消
          </button>
          <button
            onClick={() => onSave(item.id, name, category, note)}
            className="flex-1 py-3 bg-gray-700 text-white rounded-xl font-medium"
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  );
}
