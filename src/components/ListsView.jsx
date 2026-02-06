import { useState } from 'react';
import { Trash2, Share2, X } from 'lucide-react';
import { iconOptions } from '../utils/data';
import Icon from './Icon';
import SharePanel from './SharePanel';

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
              確定
            </button>
          </div>
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

  const sharedWithMeEntries = shared ? Object.entries(shared.sharedWithMe) : [];

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-white text-slate-900 px-4 py-3 border-b border-slate-200 safe-top">
        <div className="text-lg font-bold text-center">我的清單</div>
      </div>

      {/* Lists */}
      <div className="flex-1 overflow-y-auto p-4 pb-20 no-scrollbar">
        <div className="space-y-2">
          {(data.lists || []).map(list => {
            const itemCount = (list.items || []).length;
            const checkedCount = (list.checkedItems || []).length;
            const isActive = list.id === data.activeListId;
            const isShared = !!list.sharedListId;

            return (
              <div
                key={list.id}
                onClick={() => selectList(list.id, list.sharedListId)}
                className={`flex items-center p-4 bg-white rounded-xl border border-slate-200 active:bg-slate-50 cursor-pointer transition-colors duration-150 min-h-[56px]
                  ${isActive ? 'ring-2 ring-indigo-500' : ''}`}
              >
                <div className="mr-3 text-indigo-600">
                  <Icon name={list.icon} size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-slate-800 flex items-center">
                    <span className="truncate">{list.name}</span>
                    {isShared && (
                      <span className="ml-2 text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-200 flex-shrink-0">已分享</span>
                    )}
                  </div>
                  <div className="text-sm text-slate-400">{checkedCount}/{itemCount} 已確認</div>
                </div>
                {user && (
                  <button
                    onClick={(e) => handleShareClick(list, e)}
                    className={`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                      ${isShared ? 'text-emerald-500 active:bg-emerald-50' : 'text-slate-400 active:bg-slate-100'}`}
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

        {/* Shared with me section */}
        {sharedWithMeEntries.length > 0 && (
          <div className="mt-6">
            <div className="text-sm text-slate-500 mb-2 px-1">與我分享的清單</div>
            <div className="space-y-2">
              {sharedWithMeEntries.map(([sharedListId, sharedList]) => {
                const itemCount = (sharedList.items || []).length;
                const checkedCount = (sharedList.checkedItems || []).length;

                return (
                  <div
                    key={sharedListId}
                    onClick={() => selectSharedWithMe(sharedListId)}
                    className="flex items-center p-4 bg-indigo-50 rounded-xl border border-indigo-200 active:bg-indigo-100 cursor-pointer transition-colors duration-150 min-h-[56px]"
                  >
                    <div className="mr-3 text-indigo-600">
                      <Icon name={sharedList.icon || 'clipboard-list'} size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-800">{sharedList.name}</div>
                      <div className="text-sm text-slate-400">
                        {checkedCount}/{itemCount} 已確認
                        <span className="ml-2 text-indigo-500">
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

        {/* Add new list */}
        <div className="mt-4 p-4 bg-white rounded-xl border border-slate-200">
          <div className="text-sm text-slate-500 mb-3">新增清單</div>
          <div className="flex gap-1 mb-3 flex-wrap">
            {iconOptions.map(iconName => (
              <button
                key={iconName}
                onClick={() => setNewListIcon(iconName)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-150 active:bg-indigo-100
                  ${newListIcon === iconName ? 'bg-indigo-100 text-indigo-600' : 'text-slate-500'}`}
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
              placeholder="清單名稱..."
              className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors duration-150"
            />
            <button
              onClick={addNewList}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px]"
            >
              建立
            </button>
          </div>
        </div>
      </div>

      {/* Share Panel */}
      {sharePanelListId !== null && (
        <SharePanel
          sharedData={sharePanelSharedId ? (shared?.sharedByMe?.[sharePanelSharedId] || null) : null}
          onAddUser={handleAddUser}
          onRemoveUser={handleRemoveUser}
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
