import { useState } from 'react';
import { iconOptions } from '../utils/data';
import SharePanel from './SharePanel';

export default function ListsView({ data, user, onNavigate, onSaveData, shared }) {
  const [newListName, setNewListName] = useState('');
  const [newListIcon, setNewListIcon] = useState('📋');
  const [sharePanelListId, setSharePanelListId] = useState(null); // local list id for share panel
  const [sharePanelSharedId, setSharePanelSharedId] = useState(null); // sharedListId for share panel

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
    setNewListIcon('📋');
    onNavigate('checklist', { sharedListId: null });
  };

  const deleteList = async (listId, e) => {
    e.stopPropagation();
    if (data.lists.length <= 1) return;
    if (!confirm('確定刪除此清單？')) return;

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
  };

  // Share button handler - opens panel for initial share or manage existing
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
      // Save sharedListId back to the local list
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

  // Add user to existing shared list
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

  // Remove user from shared list
  const handleRemoveUser = async (email) => {
    if (!sharePanelSharedId || !shared) return;
    try {
      await shared.removeSharedUser(sharePanelSharedId, email);
    } catch (err) {
      console.error('移除分享對象失敗', err);
    }
  };

  // Completely unshare
  const handleUnshare = async () => {
    if (!sharePanelSharedId || !shared) return;
    if (!confirm('確定停止分享？所有被分享者將無法看到此清單。')) return;

    try {
      await shared.unshareList(sharePanelSharedId);
      // Remove sharedListId from local list
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
      <div className="bg-gray-700 text-white px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('checklist', { sharedListId: null })}
            className="p-2 -ml-2 rounded-lg hover:bg-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <div className="text-lg font-bold">我的清單</div>
          <button
            onClick={() => onNavigate('library')}
            className="p-2 -mr-2 rounded-lg hover:bg-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Lists */}
      <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
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
                className={`flex items-center p-4 bg-white rounded-xl shadow-sm active:bg-gray-50 cursor-pointer
                  ${isActive ? 'ring-2 ring-gray-400' : ''}`}
              >
                <span className="text-2xl mr-3">{list.icon}</span>
                <div className="flex-1">
                  <div className="font-medium text-gray-800 flex items-center">
                    {list.name}
                    {isShared && (
                      <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">已分享</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-400">{checkedCount}/{itemCount} 已確認</div>
                </div>
                {user && (
                  <button
                    onClick={(e) => handleShareClick(list, e)}
                    className={`p-2 mr-1 rounded-lg ${isShared ? 'text-green-500' : 'text-gray-400'} hover:bg-gray-100`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                    </svg>
                  </button>
                )}
                {data.lists.length > 1 && (
                  <button
                    onClick={(e) => deleteList(list.id, e)}
                    className="p-2 text-gray-400 hover:text-red-500"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Shared with me section */}
        {sharedWithMeEntries.length > 0 && (
          <div className="mt-6">
            <div className="text-sm text-gray-500 mb-2 px-1">與我分享的清單</div>
            <div className="space-y-2">
              {sharedWithMeEntries.map(([sharedListId, sharedList]) => {
                const itemCount = (sharedList.items || []).length;
                const checkedCount = (sharedList.checkedItems || []).length;

                return (
                  <div
                    key={sharedListId}
                    onClick={() => selectSharedWithMe(sharedListId)}
                    className="flex items-center p-4 bg-blue-50 rounded-xl shadow-sm active:bg-blue-100 cursor-pointer border border-blue-100"
                  >
                    <span className="text-2xl mr-3">{sharedList.icon || '📋'}</span>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">{sharedList.name}</div>
                      <div className="text-sm text-gray-400">
                        {checkedCount}/{itemCount} 已確認
                        <span className="ml-2 text-blue-400">
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
        <div className="mt-4 p-4 bg-white rounded-xl shadow-sm">
          <div className="text-sm text-gray-500 mb-3">新增清單</div>
          <div className="flex gap-1 mb-3 flex-wrap">
            {iconOptions.map(icon => (
              <button
                key={icon}
                onClick={() => setNewListIcon(icon)}
                className={`w-10 h-10 rounded-lg text-xl hover:bg-gray-100
                  ${newListIcon === icon ? 'bg-gray-200' : ''}`}
              >
                {icon}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              placeholder="清單名稱..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-500"
            />
            <button
              onClick={addNewList}
              className="px-6 py-3 bg-gray-700 text-white rounded-xl font-medium active:bg-gray-800"
            >
              建立
            </button>
          </div>
        </div>
      </div>

      {/* Bottom: Library button */}
      <div className="p-4 bg-white border-t border-gray-200 safe-bottom">
        <button
          onClick={() => onNavigate('library')}
          className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-medium active:bg-gray-50"
        >
          管理物品庫
        </button>
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
    </div>
  );
}
