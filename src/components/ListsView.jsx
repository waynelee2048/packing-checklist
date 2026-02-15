import { useState } from 'react';
import { Trash2, Share2, X, Plus, Search, ArrowUpDown, GripVertical } from 'lucide-react';
import { DndContext, closestCenter, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { iconOptions } from '../utils/data';
import Icon from './Icon';
import SharePanel from './SharePanel';

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
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SortableListItem({ list, isActive }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: list.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : undefined,
    position: 'relative',
  };

  const itemCount = (list.items || []).length;
  const checkedCount = (list.checkedItems || []).length;
  const isShared = !!list.sharedListId;

  return (
    <div ref={setNodeRef} style={style}>
      <div
        className={`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 min-h-[56px]
          ${isDragging ? 'shadow-lg opacity-90' : ''} ${isActive ? 'ring-2 ring-indigo-500' : ''}`}
      >
        <div
          {...attributes}
          {...listeners}
          className="w-6 h-6 mr-3 flex items-center justify-center flex-shrink-0 text-slate-400 dark:text-slate-500 touch-none cursor-grab active:cursor-grabbing"
        >
          <GripVertical size={20} />
        </div>
        <div className="mr-3 text-indigo-600 dark:text-indigo-400">
          <Icon name={list.icon} size={24} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-medium text-slate-800 dark:text-slate-100 flex items-center">
            <span className="truncate">{list.name}</span>
            {isShared && (
              <span className="ml-2 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0">已分享</span>
            )}
          </div>
          <div className="text-sm text-slate-400">{checkedCount}/{itemCount} 已確認</div>
        </div>
      </div>
    </div>
  );
}

export default function ListsView({ data, user, onNavigate, onSaveData, shared }) {
  const [newListName, setNewListName] = useState('');
  const [newListIcon, setNewListIcon] = useState('clipboard-list');
  const [sharePanelListId, setSharePanelListId] = useState(null);
  const [sharePanelSharedId, setSharePanelSharedId] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortMode, setSortMode] = useState('default'); // 'default' | 'name' | 'progress' | 'manual'

  const selectList = (listId, sharedListId) => {
    const newData = {
      ...data,
      activeListId: listId
    };
    onSaveData(newData);
    onNavigate('checklist', { sharedListId: sharedListId || null });
  };

  const selectSharedWithMe = (sharedListId) => {
    onNavigate('checklist', { sharedListId });
  };

  const addNewList = () => {
    if (!newListName.trim()) return;

    const newList = {
      id: Date.now(),
      name: newListName.trim(),
      icon: newListIcon,
      items: [],
      checkedItems: []
    };

    const newData = {
      ...data,
      lists: [...data.lists, newList],
      activeListId: newList.id
    };

    onSaveData(newData);
    setNewListName('');
    setNewListIcon('clipboard-list');
    setShowAddForm(false);
    onNavigate('checklist', { sharedListId: null });
  };

  const deleteList = async (listId) => {
    if (data.lists.length <= 1) return;

    const listToDelete = data.lists.find(l => l.id === listId);

    // If the list was shared, clean up shared data
    if (listToDelete?.sharedListId && shared) {
      try {
        await shared.unshareList(listToDelete.sharedListId);
      } catch (err) {
        console.error('清理分享資料失敗', err);
      }
    }

    const newLists = data.lists.filter(l => l.id !== listId);
    const newData = {
      ...data,
      lists: newLists,
      activeListId: data.activeListId === listId ? newLists[0].id : data.activeListId
    };
    onSaveData(newData);
    setConfirmDelete(null);
  };

  const handleDeleteClick = (listId, e) => {
    e.stopPropagation();
    if (data.lists.length <= 1) return;
    setConfirmDelete(listId);
  };

  // Share button handler
  const handleShareClick = (list, e) => {
    e.stopPropagation();
    setSharePanelListId(list.id);
    setSharePanelSharedId(list.sharedListId || null);
  };

  // Initial share: create shared list and link it
  const handleInitialShare = async (email) => {
    const list = data.lists.find(l => l.id === sharePanelListId);
    if (!list || !shared) return;

    try {
      const sharedListId = await shared.shareList(list, data.itemLibrary, [email]);
      const newData = {
        ...data,
        lists: data.lists.map(l =>
          l.id === sharePanelListId ? { ...l, sharedListId } : l
        )
      };
      onSaveData(newData);
      setSharePanelSharedId(sharedListId);
    } catch (err) {
      console.error('分享失敗', err);
      alert('分享失敗：' + err.message);
    }
  };

  const handleAddUser = async (email) => {
    if (sharePanelSharedId) {
      try {
        await shared.addSharedUser(sharePanelSharedId, email);
      } catch (err) {
        console.error('新增分享對象失敗', err);
      }
    } else {
      await handleInitialShare(email);
    }
  };

  const handleRemoveUser = async (email) => {
    if (!sharePanelSharedId || !shared) return;
    try {
      await shared.removeSharedUser(sharePanelSharedId, email);
    } catch (err) {
      console.error('移除分享對象失敗', err);
    }
  };

  const handleSetPermission = async (email, permission) => {
    if (sharePanelSharedId && shared) {
      try {
        await shared.setUserPermission(sharePanelSharedId, email, permission);
      } catch (err) {
        console.error('設定權限失敗', err);
      }
    }
  };

  const handleUnshare = async () => {
    if (!sharePanelSharedId || !shared) return;

    try {
      await shared.unshareList(sharePanelSharedId);
      const newData = {
        ...data,
        lists: data.lists.map(l =>
          l.id === sharePanelListId ? { ...l, sharedListId: undefined } : l
        )
      };
      onSaveData(newData);
      setSharePanelListId(null);
      setSharePanelSharedId(null);
    } catch (err) {
      console.error('停止分享失敗', err);
    }
  };

  const cycleSortMode = () => {
    setSortMode(prev => {
      if (prev === 'default') return 'name';
      if (prev === 'name') return 'progress';
      if (prev === 'progress') return 'manual';
      return 'default';
    });
  };
  const sortModeLabel = sortMode === 'name' ? '名稱' : sortMode === 'progress' ? '完成度' : sortMode === 'manual' ? '手動' : '';

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const lists = data.lists || [];
    const oldIndex = lists.findIndex(l => l.id === active.id);
    const newIndex = lists.findIndex(l => l.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;
    const newLists = arrayMove(lists, oldIndex, newIndex);
    onSaveData({ ...data, lists: newLists });
  };

  // Filter lists by search
  const q = searchQuery.toLowerCase();
  const filteredLists = (data.lists || []).filter(list =>
    !q || list.name.toLowerCase().includes(q)
  );

  // Sort filtered lists
  const sortedLists = (() => {
    if (sortMode === 'name') {
      return [...filteredLists].sort((a, b) => a.name.localeCompare(b.name, 'zh-Hant'));
    }
    if (sortMode === 'progress') {
      const getProgress = (list) => {
        const total = (list.items || []).length;
        if (total === 0) return 0;
        return (list.checkedItems || []).length / total;
      };
      return [...filteredLists].sort((a, b) => getProgress(a) - getProgress(b));
    }
    return filteredLists;
  })();

  const sharedWithMeEntries = (shared ? Object.entries(shared.sharedWithMe) : []).filter(
    ([, sharedList]) => !q || (sharedList.name || '').toLowerCase().includes(q)
  );

  return (
    <div className="flex flex-col h-screen pb-tabbar">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top">
        <div className="flex items-center justify-between">
          <div className="w-10" />
          <div className="text-lg font-bold text-center">我的清單</div>
          <div className="flex flex-col items-center w-10">
            <button
              onClick={cycleSortMode}
              className={`p-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center
                ${sortMode !== 'default' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`}
              aria-label="排序方式"
            >
              <ArrowUpDown size={20} />
            </button>
            {sortModeLabel && (
              <span className="text-[10px] text-indigo-600 dark:text-indigo-400 -mt-1 font-medium">{sortModeLabel}</span>
            )}
          </div>
        </div>
      </div>

      {/* Lists */}
      <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
        {/* Search bar */}
        <div className="mb-4">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜尋清單..."
              className="w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"
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

        {sortMode === 'manual' ? (
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={(data.lists || []).map(l => l.id)} strategy={verticalListSortingStrategy}>
              <div className="space-y-2">
                {(data.lists || []).map(list => (
                  <SortableListItem key={list.id} list={list} isActive={list.id === data.activeListId} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        ) : (
          <div className="space-y-2">
            {sortedLists.map(list => {
              const itemCount = (list.items || []).length;
              const checkedCount = (list.checkedItems || []).length;
              const isActive = list.id === data.activeListId;
              const isShared = !!list.sharedListId;

              return (
                <div
                  key={list.id}
                  onClick={() => selectList(list.id, list.sharedListId)}
                  className={`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 cursor-pointer transition-colors duration-150 min-h-[56px]
                    ${isActive ? 'ring-2 ring-indigo-500' : ''}`}
                >
                  <div className="mr-3 text-indigo-600 dark:text-indigo-400">
                    <Icon name={list.icon} size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-slate-800 dark:text-slate-100 flex items-center">
                      <span className="truncate">{list.name}</span>
                      {isShared && (
                        <span className="ml-2 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0">已分享</span>
                      )}
                    </div>
                    <div className="text-sm text-slate-400">{checkedCount}/{itemCount} 已確認</div>
                  </div>
                  {user && (
                    <button
                      onClick={(e) => handleShareClick(list, e)}
                      className={`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                        ${isShared ? 'text-emerald-500 active:bg-emerald-50 dark:active:bg-emerald-900/30' : 'text-slate-400 active:bg-slate-100 dark:active:bg-slate-700'}`}
                      aria-label="分享清單"
                    >
                      <Share2 size={18} />
                    </button>
                  )}
                  {data.lists.length > 1 && (
                    <button
                      onClick={(e) => handleDeleteClick(list.id, e)}
                      className="p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150"
                      aria-label="刪除清單"
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Shared with me section */}
        {sharedWithMeEntries.length > 0 && (
          <div className="mt-6">
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-2 px-1">與我分享的清單</div>
            <div className="space-y-2">
              {sharedWithMeEntries.map(([sharedListId, sharedList]) => {
                const itemCount = (sharedList.items || []).length;
                const checkedCount = (sharedList.checkedItems || []).length;

                return (
                  <div
                    key={sharedListId}
                    onClick={() => selectSharedWithMe(sharedListId)}
                    className="flex items-center p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800 active:bg-indigo-100 dark:active:bg-indigo-900/50 cursor-pointer transition-colors duration-150 min-h-[56px]"
                  >
                    <div className="mr-3 text-indigo-600 dark:text-indigo-400">
                      <Icon name={sharedList.icon || 'clipboard-list'} size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-800 dark:text-slate-100">{sharedList.name}</div>
                      <div className="text-sm text-slate-400">
                        {checkedCount}/{itemCount} 已確認
                        <span className="ml-2 text-indigo-500 dark:text-indigo-400">
                          來自 {sharedList.ownerName || sharedList.ownerEmail}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Add new list trigger */}
        <div className="mt-4">
          <button
            onClick={() => setShowAddForm(true)}
            className="w-full py-3 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 font-medium active:bg-slate-50 dark:active:bg-slate-800 transition-colors duration-150 flex items-center justify-center gap-2"
          >
            <Plus size={18} />
            新增清單
          </button>
        </div>
      </div>

      {/* Add new list bottom sheet */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => { setShowAddForm(false); setNewListName(''); setNewListIcon('clipboard-list'); }}
          />
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom">
            <div className="p-4">
              <div className="w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4" />
              <div className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">新增清單</div>
              <div className="flex gap-1 mb-3 flex-wrap">
                {iconOptions.map(iconName => (
                  <button
                    key={iconName}
                    onClick={() => setNewListIcon(iconName)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-150 active:bg-indigo-100 dark:active:bg-indigo-900/50
                      ${newListIcon === iconName ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`}
                    aria-label={iconName}
                  >
                    <Icon name={iconName} size={20} />
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') addNewList(); }}
                  placeholder="清單名稱..."
                  className="flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"
                />
                <button
                  onClick={addNewList}
                  className="px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]"
                >
                  建立
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Share Panel */}
      {sharePanelListId !== null && (
        <SharePanel
          sharedData={sharePanelSharedId ? (shared?.sharedByMe?.[sharePanelSharedId] || null) : null}
          onAddUser={handleAddUser}
          onRemoveUser={handleRemoveUser}
          onSetPermission={handleSetPermission}
          onUnshare={handleUnshare}
          onClose={() => { setSharePanelListId(null); setSharePanelSharedId(null); }}
        />
      )}

      {/* Confirm delete dialog */}
      {confirmDelete !== null && (
        <ConfirmDialog
          message="確定刪除此清單？"
          onConfirm={() => deleteList(confirmDelete)}
          onCancel={() => setConfirmDelete(null)}
        />
      )}
    </div>
  );
}
