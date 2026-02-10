import { useState, useRef } from 'react';
import { Search, X, StickyNote, Camera, Loader2, Plus } from 'lucide-react';
import { categories } from '../utils/data';
import { useItemPhoto } from '../hooks/useItemPhoto';

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

export default function LibraryView({ data, user, onNavigate, onSaveData }) {
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState(categories[0]);
  const [newItemNote, setNewItemNote] = useState('');
  const [newItemPhoto, setNewItemPhoto] = useState(null); // File object
  const [newItemPhotoPreview, setNewItemPhotoPreview] = useState(null); // blob URL
  const [editingItemId, setEditingItemId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [adding, setAdding] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const fileInputRef = useRef(null);

  const { uploadPhoto, deletePhoto, uploading } = useItemPhoto(user);

  // Group items by category
  const groupedItems = {};
  categories.forEach(cat => { groupedItems[cat] = []; });
  (data.itemLibrary || []).forEach(item => {
    if (groupedItems[item.category]) {
      groupedItems[item.category].push(item);
    }
  });

  const handlePhotoSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setNewItemPhoto(file);
    setNewItemPhotoPreview(URL.createObjectURL(file));
    // Reset input so same file can be re-selected
    e.target.value = '';
  };

  const removeNewPhoto = () => {
    if (newItemPhotoPreview) URL.revokeObjectURL(newItemPhotoPreview);
    setNewItemPhoto(null);
    setNewItemPhotoPreview(null);
  };

  const addItemToLibrary = async () => {
    if (!newItemName.trim()) return;
    setAdding(true);

    const itemId = Date.now();
    let photoURL = undefined;

    if (newItemPhoto && user) {
      try {
        photoURL = await uploadPhoto(itemId, newItemPhoto);
      } catch {
        // Photo upload failed — still create item without photo
      }
    }

    const newItem = {
      id: itemId,
      name: newItemName.trim(),
      category: newItemCategory,
      note: newItemNote.trim(),
      ...(photoURL && { photoURL })
    };

    const newData = {
      ...data,
      itemLibrary: [...data.itemLibrary, newItem]
    };

    onSaveData(newData);
    setNewItemName('');
    setNewItemNote('');
    removeNewPhoto();
    setAdding(false);
    setShowAddForm(false);
  };

  const updateItem = async (itemId, name, category, note, photoURL) => {
    const newData = {
      ...data,
      itemLibrary: data.itemLibrary.map(item =>
        item.id === itemId ? { ...item, name, category, note, ...(photoURL ? { photoURL } : { photoURL: null }) } : item
      )
    };
    onSaveData(newData);
    setEditingItemId(null);
  };

  const deleteItemFromLibrary = async (itemId) => {
    const item = data.itemLibrary.find(i => i.id === itemId);
    if (item?.photoURL) {
      deletePhoto(itemId);
    }
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
    <div className="flex flex-col h-screen pb-16">
      {/* Header */}
      <div className="bg-white text-slate-900 px-4 py-3 border-b border-slate-200 safe-top">
        <div className="text-lg font-bold text-center">物品庫</div>
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
      <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
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
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        {item.photoURL && (
                          <img
                            src={item.photoURL}
                            alt=""
                            className="w-10 h-10 object-cover rounded-lg flex-shrink-0"
                            loading="lazy"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                        )}
                        <span className="font-medium text-slate-800">{item.name}</span>
                      </div>
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

      {/* FAB */}
      <button
        onClick={() => setShowAddForm(true)}
        className="fixed right-4 bottom-20 z-30 w-14 h-14 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 transition-colors duration-150"
        aria-label="新增物品"
      >
        <Plus size={24} />
      </button>

      {/* Add item bottom sheet */}
      {showAddForm && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
          onClick={() => { setShowAddForm(false); setNewItemName(''); setNewItemNote(''); removeNewPhoto(); }}
        >
          <div
            className="bg-white w-full max-w-lg rounded-t-2xl p-6 safe-bottom animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-bold text-slate-900">新增物品</div>
              <button
                onClick={() => { setShowAddForm(false); setNewItemName(''); setNewItemNote(''); removeNewPhoto(); }}
                className="p-1 rounded-lg active:bg-slate-100"
              >
                <X size={20} className="text-slate-400" />
              </button>
            </div>
            <input
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="物品名稱..."
              autoFocus
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
            {/* Photo section */}
            {user && (
              <div className="mb-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handlePhotoSelect}
                  className="hidden"
                />
                {newItemPhotoPreview ? (
                  <div className="flex items-center gap-3">
                    <img
                      src={newItemPhotoPreview}
                      alt="預覽"
                      className="w-20 h-20 object-cover rounded-lg border border-slate-200"
                    />
                    <button
                      onClick={removeNewPhoto}
                      className="text-sm text-rose-500 px-3 py-1.5 border border-rose-200 rounded-lg active:bg-rose-50 transition-colors duration-150"
                    >
                      移除照片
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 px-4 py-2.5 border border-slate-300 rounded-xl text-slate-500 active:bg-slate-50 transition-colors duration-150"
                  >
                    <Camera size={18} />
                    <span className="text-sm">附加照片</span>
                  </button>
                )}
              </div>
            )}
            <button
              onClick={addItemToLibrary}
              disabled={adding || uploading}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {(adding || uploading) && <Loader2 size={18} className="animate-spin" />}
              {(adding || uploading) ? '新增中...' : '+ 新增物品'}
            </button>
          </div>
        </div>
      )}

      {/* Edit modal */}
      {editingItem && (
        <EditItemModal
          item={editingItem}
          user={user}
          categories={categories}
          onSave={updateItem}
          onClose={() => setEditingItemId(null)}
          uploadPhoto={uploadPhoto}
          deletePhoto={deletePhoto}
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

function EditItemModal({ item, user, categories, onSave, onClose, uploadPhoto, deletePhoto }) {
  const [name, setName] = useState(item.name);
  const [category, setCategory] = useState(item.category);
  const [note, setNote] = useState(item.note || '');
  const [photoURL, setPhotoURL] = useState(item.photoURL || '');
  const [newPhoto, setNewPhoto] = useState(null); // File for replacement
  const [newPhotoPreview, setNewPhotoPreview] = useState(null);
  const [photoRemoved, setPhotoRemoved] = useState(false);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef(null);

  const handlePhotoSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setNewPhoto(file);
    if (newPhotoPreview) URL.revokeObjectURL(newPhotoPreview);
    setNewPhotoPreview(URL.createObjectURL(file));
    setPhotoRemoved(false);
    e.target.value = '';
  };

  const removePhoto = () => {
    if (newPhotoPreview) URL.revokeObjectURL(newPhotoPreview);
    setNewPhoto(null);
    setNewPhotoPreview(null);
    setPhotoRemoved(true);
  };

  const handleSave = async () => {
    setSaving(true);
    let finalPhotoURL = photoURL;

    if (photoRemoved && !newPhoto) {
      // Delete existing photo
      if (item.photoURL) {
        deletePhoto(item.id);
      }
      finalPhotoURL = '';
    }

    if (newPhoto && user) {
      // Upload new/replacement photo
      try {
        finalPhotoURL = await uploadPhoto(item.id, newPhoto);
      } catch {
        // Upload failed — keep existing photo
        finalPhotoURL = photoRemoved ? '' : photoURL;
      }
    }

    onSave(item.id, name, category, note, finalPhotoURL);
    setSaving(false);
  };

  const displayPhoto = newPhotoPreview || (!photoRemoved && photoURL);

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
          className="w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 focus:outline-none focus:border-indigo-500 transition-colors duration-150"
        />
        {/* Photo section */}
        {user && (
          <div className="mb-4">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handlePhotoSelect}
              className="hidden"
            />
            {displayPhoto ? (
              <div className="flex items-center gap-3">
                <img
                  src={newPhotoPreview || photoURL}
                  alt="照片"
                  className="w-20 h-20 object-cover rounded-lg border border-slate-200"
                />
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-sm text-indigo-600 px-3 py-1.5 border border-indigo-200 rounded-lg active:bg-indigo-50 transition-colors duration-150"
                  >
                    更換照片
                  </button>
                  <button
                    onClick={removePhoto}
                    className="text-sm text-rose-500 px-3 py-1.5 border border-rose-200 rounded-lg active:bg-rose-50 transition-colors duration-150"
                  >
                    移除照片
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2.5 border border-slate-300 rounded-xl text-slate-500 active:bg-slate-50 transition-colors duration-150"
              >
                <Camera size={18} />
                <span className="text-sm">附加照片</span>
              </button>
            )}
          </div>
        )}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 border border-slate-300 rounded-xl font-medium active:bg-slate-100 transition-colors duration-150 min-h-[44px]"
          >
            取消
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {saving && <Loader2 size={18} className="animate-spin" />}
            {saving ? '儲存中...' : '儲存'}
          </button>
        </div>
      </div>
    </div>
  );
}
