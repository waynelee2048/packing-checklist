import { useState, useRef, useEffect } from 'react';
import { X, Camera, Loader2, Plus, Search, ChevronDown, Check, ScanLine, MapPin, StickyNote } from 'lucide-react';
import { useItemPhoto } from '../hooks/useItemPhoto';

function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" onClick={onCancel}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div
        className="relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6">
          <p className="text-center text-lg text-slate-800 dark:text-slate-100 mb-6">{message}</p>
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]"
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

export default function LibraryView({ data, user, onNavigate, onSaveData, categories = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [editingItemId, setEditingItemId] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showSpaceSwitcher, setShowSpaceSwitcher] = useState(false);

  const spaces = data.spaces || [{ id: 'space_default', name: '個人空間' }];
  const activeSpaceId = data.activeSpaceId || spaces[0]?.id;
  const activeSpace = spaces.find(s => s.id === activeSpaceId) || spaces[0];

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchQuery), 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filter items by active space
  const spaceItems = (data.itemLibrary || []).filter(item => item.spaceId === activeSpaceId);

  // Filter by search query
  const filteredItems = debouncedQuery
    ? spaceItems.filter(item => {
        const q = debouncedQuery.toLowerCase();
        return item.name?.toLowerCase().includes(q) || item.note?.toLowerCase().includes(q);
      })
    : spaceItems;

  const switchSpace = (spaceId) => {
    onSaveData({ ...data, activeSpaceId: spaceId });
    setShowSpaceSwitcher(false);
  };

  const addNewSpace = () => {
    const name = prompt('輸入新空間名稱');
    if (!name?.trim()) return;
    const newSpace = { id: 'space_' + Date.now(), name: name.trim() };
    onSaveData({ ...data, spaces: [...spaces, newSpace] });
  };

  const editingItem = editingItemId ? data.itemLibrary.find(i => i.id === editingItemId) : null;

  const updateItem = (itemId, updates) => {
    const newData = {
      ...data,
      itemLibrary: data.itemLibrary.map(item =>
        item.id === itemId ? { ...item, ...updates } : item
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

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top">
        <div className="flex flex-col">
          <div className="text-lg font-bold">物品庫</div>
          <button
            onClick={() => setShowSpaceSwitcher(true)}
            className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 mt-0.5"
          >
            {activeSpace.name}
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className="bg-white dark:bg-slate-900 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`搜尋 ${spaceItems.length} 項物品`}
            className="w-full pl-9 pr-8 py-2.5 text-sm bg-slate-100 dark:bg-slate-800 rounded-full text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-150"
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

      {/* Items list — flat, separated by dividers */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-500">
            <Search size={40} className="mb-3 opacity-50" />
            <p className="text-sm">{debouncedQuery ? '找不到符合的物品' : '尚未新增任何物品'}</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {filteredItems.map(item => (
              <div
                key={item.id}
                onClick={() => setEditingItemId(item.id)}
                className="flex items-center px-4 py-3 active:bg-slate-50 dark:active:bg-slate-800 cursor-pointer transition-colors duration-150"
              >
                {/* Left: name + location pill (inline) */}
                <div className="flex-1 min-w-0 mr-3 flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate">
                    {item.name}
                  </span>
                  {item.location && (
                    <span className="flex-shrink-0 text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full">
                      {item.location}
                    </span>
                  )}
                </div>
                {/* Right: photo thumbnail (only if uploaded) */}
                {item.photoURL && (
                  <div
                    className="w-12 h-12 rounded-lg flex-shrink-0 overflow-hidden"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(item.photoURL, '_blank');
                    }}
                  >
                    <img
                      src={item.photoURL}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FAB */}
      <button
        onClick={() => setShowAddForm(true)}
        className="fixed right-4 bottom-20 z-30 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150"
        aria-label="新增物品"
      >
        <Plus size={24} />
      </button>

      {/* Add item bottom sheet */}
      {showAddForm && (
        <AddItemSheet
          data={data}
          user={user}
          spaces={spaces}
          activeSpaceId={activeSpaceId}
          categories={categories}
          onSaveData={onSaveData}
          onClose={() => setShowAddForm(false)}
        />
      )}

      {/* Edit modal */}
      {editingItem && (
        <EditItemModal
          item={editingItem}
          user={user}
          data={data}
          spaces={spaces}
          onSave={updateItem}
          onDelete={(id) => { setEditingItemId(null); setConfirmDeleteId(id); }}
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

      {/* Space switcher bottom sheet */}
      {showSpaceSwitcher && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
          onClick={() => setShowSpaceSwitcher(false)}
        >
          <div
            className="bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl safe-bottom animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <div className="w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4" />
              <div className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">切換</div>
              <div className="space-y-1 mb-4">
                {spaces.map(space => (
                  <button
                    key={space.id}
                    onClick={() => switchSpace(space.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150"
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-150 ${
                      space.id === activeSpaceId
                        ? 'border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400'
                        : 'border-slate-300 dark:border-slate-500'
                    }`}>
                      {space.id === activeSpaceId && <Check size={12} className="text-white" />}
                    </div>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-100">{space.name}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={addNewSpace}
                className="w-full py-3 text-sm text-indigo-600 dark:text-indigo-400 font-medium active:opacity-70 transition-opacity"
              >
                + 新增其他空間
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AddItemSheet({ data, user, spaces, activeSpaceId, categories, onSaveData, onClose }) {
  const [name, setName] = useState('');
  const [selectedSpaceId, setSelectedSpaceId] = useState(activeSpaceId);
  const [location, setLocation] = useState('');
  const [note, setNote] = useState('');
  const [showLocation, setShowLocation] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [adding, setAdding] = useState(false);
  const fileInputRef = useRef(null);
  const { uploadPhoto, uploading } = useItemPhoto(user);

  const handlePhotoSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
    e.target.value = '';
  };

  const removePhoto = () => {
    if (photoPreview) URL.revokeObjectURL(photoPreview);
    setPhoto(null);
    setPhotoPreview(null);
  };

  const handleClose = () => {
    removePhoto();
    onClose();
  };

  const handleAdd = async () => {
    if (!name.trim()) return;
    setAdding(true);

    const itemId = Date.now();
    let photoURL = undefined;

    if (photo && user) {
      try {
        photoURL = await uploadPhoto(itemId, photo);
      } catch {
        // Photo upload failed — still create item without photo
      }
    }

    const newItem = {
      id: itemId,
      name: name.trim(),
      category: categories[0] || '其他',
      note: note.trim(),
      location: location.trim(),
      spaceId: selectedSpaceId,
      ...(photoURL && { photoURL })
    };

    onSaveData({
      ...data,
      itemLibrary: [...data.itemLibrary, newItem]
    });

    setAdding(false);
    handleClose();
  };

  const canAdd = name.trim().length > 0;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl p-6 safe-bottom animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title centered, no close button */}
        <div className="text-lg font-bold text-slate-900 dark:text-slate-50 text-center mb-4">新增物品</div>

        {/* Hidden file input */}
        {user && (
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoSelect}
            className="hidden"
          />
        )}

        {/* Name field + photo thumbnail inline */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">物品名稱</label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="輸入完整以利搜尋"
                className="w-full pl-4 pr-12 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => alert('掃描功能即將推出')}
                  className="text-slate-400 p-0.5 flex items-center justify-center"
                  aria-label="掃描"
                >
                  <ScanLine size={18} />
                </button>
                {!photoPreview && user && (
                  <>
                    <span className="text-slate-300 dark:text-slate-600 select-none">|</span>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-slate-400 p-0.5 flex items-center justify-center"
                      aria-label="拍照"
                    >
                      <Camera size={18} />
                    </button>
                  </>
                )}
              </div>
            </div>
            {/* Photo circle thumbnail with red X overlay */}
            {photoPreview && (
              <div className="relative flex-shrink-0">
                <img
                  src={photoPreview}
                  alt="預覽"
                  className="w-11 h-11 object-cover rounded-full"
                />
                <button
                  onClick={removePhoto}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center"
                  aria-label="移除照片"
                >
                  <X size={12} className="text-white" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Space selection (radio circle style) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">空間</label>
          <div className="space-y-2">
            {spaces.map(space => (
              <button
                key={space.id}
                type="button"
                onClick={() => setSelectedSpaceId(space.id)}
                className="w-full flex items-center gap-3 py-1"
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-150 ${
                  selectedSpaceId === space.id
                    ? 'border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400'
                    : 'border-slate-300 dark:border-slate-500'
                }`}>
                  {selectedSpaceId === space.id && <Check size={12} className="text-white" />}
                </div>
                <span className="text-sm text-slate-700 dark:text-slate-300">{space.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Expandable fields: pill buttons → textareas */}
        <div className="mb-4 space-y-3">
          {(!showLocation || !showNote) && (
            <div className="flex gap-3">
              {!showLocation && (
                <button
                  onClick={() => setShowLocation(true)}
                  className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 py-1.5 px-3 border border-slate-200 dark:border-slate-600 rounded-full"
                >
                  <MapPin size={14} />
                  + 存放位置
                </button>
              )}
              {!showNote && (
                <button
                  onClick={() => setShowNote(true)}
                  className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 py-1.5 px-3 border border-slate-200 dark:border-slate-600 rounded-full"
                >
                  <StickyNote size={14} />
                  + 備註
                </button>
              )}
            </div>
          )}
          {showLocation && (
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">存放位置</label>
              <textarea
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                rows={2}
                autoFocus
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150 resize-none"
              />
            </div>
          )}
          {showNote && (
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">備註</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={2}
                autoFocus={!showLocation}
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150 resize-none"
              />
            </div>
          )}
        </div>

        {/* 新增 button — full-width rounded-full */}
        <button
          onClick={handleAdd}
          disabled={!canAdd || adding || uploading}
          className={`w-full py-3 rounded-full font-medium min-h-[44px] flex items-center justify-center gap-2 transition-colors duration-150 ${
            canAdd
              ? 'bg-indigo-600 dark:bg-indigo-500 text-white active:bg-indigo-700 dark:active:bg-indigo-600'
              : 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500'
          } disabled:opacity-50`}
        >
          {(adding || uploading) && <Loader2 size={18} className="animate-spin" />}
          {(adding || uploading) ? '新增中...' : '新增'}
        </button>
      </div>
    </div>
  );
}

function EditItemModal({ item, user, data, spaces, onSave, onDelete, onClose }) {
  const [name, setName] = useState(item.name);
  const [note, setNote] = useState(item.note || '');
  const [location, setLocation] = useState(item.location || '');
  const [photoURL, setPhotoURL] = useState(item.photoURL || '');
  const [newPhoto, setNewPhoto] = useState(null);
  const [newPhotoPreview, setNewPhotoPreview] = useState(null);
  const [photoRemoved, setPhotoRemoved] = useState(false);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef(null);
  const { uploadPhoto, deletePhoto } = useItemPhoto(user);

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
      if (item.photoURL) {
        deletePhoto(item.id);
      }
      finalPhotoURL = '';
    }

    if (newPhoto && user) {
      try {
        finalPhotoURL = await uploadPhoto(item.id, newPhoto);
      } catch {
        finalPhotoURL = photoRemoved ? '' : photoURL;
      }
    }

    onSave(item.id, {
      name,
      note,
      location,
      ...(finalPhotoURL ? { photoURL: finalPhotoURL } : { photoURL: null })
    });
    setSaving(false);
  };

  const displayPhoto = newPhotoPreview || (!photoRemoved && photoURL);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl p-6 safe-bottom animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-bold text-slate-900 dark:text-slate-50">編輯物品</div>
          <button
            onClick={() => onDelete(item.id)}
            className="text-sm text-rose-500 px-3 py-1.5 rounded-lg active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150"
          >
            刪除
          </button>
        </div>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="物品名稱"
          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-150"
        />

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="存放位置（選填）"
          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"
        />

        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="備註（選填）"
          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"
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
                  className="w-20 h-20 object-cover rounded-lg border border-slate-200 dark:border-slate-700"
                />
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-sm text-indigo-600 dark:text-indigo-400 px-3 py-1.5 border border-indigo-200 dark:border-indigo-800 rounded-lg active:bg-indigo-50 dark:active:bg-indigo-900/30 transition-colors duration-150"
                  >
                    更換照片
                  </button>
                  <button
                    onClick={removePhoto}
                    className="text-sm text-rose-500 px-3 py-1.5 border border-rose-200 dark:border-rose-800 rounded-lg active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150"
                  >
                    移除照片
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150"
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
            className="flex-1 py-3 border border-slate-300 dark:border-slate-600 rounded-xl font-medium text-slate-600 dark:text-slate-300 active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]"
          >
            取消
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex-1 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {saving && <Loader2 size={18} className="animate-spin" />}
            {saving ? '儲存中...' : '儲存'}
          </button>
        </div>
      </div>
    </div>
  );
}
