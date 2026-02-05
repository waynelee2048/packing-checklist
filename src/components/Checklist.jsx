import { useState } from 'react';
import UserSection from './UserSection';

export default function Checklist({
  data,
  user,
  syncStatus,
  onLogin,
  onLogout,
  onNavigate,
  onSaveData,
  shared,
  activeSharedListId
}) {
  const [expandedNotes, setExpandedNotes] = useState([]);

  // Determine mode: 'shared-with-me', 'own-shared', or 'local'
  const isSharedWithMe = activeSharedListId && shared?.sharedWithMe?.[activeSharedListId];
  const isOwnShared = activeSharedListId && shared?.sharedByMe?.[activeSharedListId];

  const mode = isSharedWithMe ? 'shared-with-me' : isOwnShared ? 'own-shared' : 'local';

  // Get the shared data if applicable
  const sharedData = isSharedWithMe
    ? shared.sharedWithMe[activeSharedListId]
    : isOwnShared
      ? shared.sharedByMe[activeSharedListId]
      : null;

  // Local list (for 'local' and 'own-shared' modes)
  const list = data.lists?.find(l => l.id === data.activeListId);
  const safeList = list ? {
    ...list,
    items: Array.isArray(list.items) ? list.items : [],
    checkedItems: Array.isArray(list.checkedItems) ? list.checkedItems : []
  } : null;

  // Build items and checkedItems based on mode
  let items = [];
  let checkedItems = [];
  let displayName = '';
  let displayIcon = '';
  let ownerLabel = '';

  if (mode === 'shared-with-me' && sharedData) {
    items = (sharedData.items || []).filter(Boolean);
    checkedItems = sharedData.checkedItems || [];
    displayName = sharedData.name || '清單';
    displayIcon = sharedData.icon || '📋';
    ownerLabel = sharedData.ownerName || sharedData.ownerEmail || '';
  } else if (mode === 'own-shared' && safeList && sharedData) {
    items = safeList.items
      .map(id => data.itemLibrary?.find(item => item.id === id))
      .filter(Boolean);
    checkedItems = sharedData.checkedItems || [];
    displayName = safeList.name || '清單';
    displayIcon = safeList.icon || '📋';
  } else {
    // local mode
    items = safeList
      ? safeList.items
          .map(id => data.itemLibrary?.find(item => item.id === id))
          .filter(Boolean)
      : [];
    checkedItems = safeList?.checkedItems || [];
    displayName = safeList?.name || '清單';
    displayIcon = safeList?.icon || '📋';
  }

  const checkedCount = checkedItems.length;
  const totalCount = items.length;
  const allChecked = totalCount > 0 && checkedCount === totalCount;
  const progress = totalCount > 0 ? (checkedCount / totalCount) * 100 : 0;

  const toggleItemCheck = (itemId) => {
    if (mode === 'shared-with-me' || mode === 'own-shared') {
      shared.toggleSharedCheck(activeSharedListId, itemId);
    } else {
      const newData = {
        ...data,
        lists: data.lists.map(l => {
          if (l.id !== data.activeListId) return l;
          const checked = Array.isArray(l.checkedItems) ? l.checkedItems : [];
          const isChecked = checked.includes(itemId);
          return {
            ...l,
            checkedItems: isChecked
              ? checked.filter(id => id !== itemId)
              : [...checked, itemId]
          };
        })
      };
      onSaveData(newData);
    }
  };

  const resetChecks = () => {
    if (mode === 'shared-with-me' || mode === 'own-shared') {
      shared.resetSharedChecks(activeSharedListId);
    } else {
      const newData = {
        ...data,
        lists: data.lists.map(l =>
          l.id === data.activeListId ? { ...l, checkedItems: [] } : l
        )
      };
      onSaveData(newData);
    }
  };

  const checkAll = () => {
    if (mode === 'shared-with-me' || mode === 'own-shared') {
      const allIds = items.map(item => item.id);
      shared.checkAllShared(activeSharedListId, allIds);
    } else {
      if (!safeList) return;
      const newData = {
        ...data,
        lists: data.lists.map(l =>
          l.id === data.activeListId ? { ...l, checkedItems: [...safeList.items] } : l
        )
      };
      onSaveData(newData);
    }
  };

  const toggleNoteExpand = (itemId) => {
    setExpandedNotes(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleBack = () => {
    onNavigate('lists', { sharedListId: null });
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-gray-700 text-white px-4 py-3 safe-top">
        {/* User status bar */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-gray-300">
            打包清單
            {mode === 'shared-with-me' && ownerLabel && (
              <span className="ml-2 text-blue-300">來自 {ownerLabel}</span>
            )}
            {mode === 'own-shared' && (
              <span className="ml-2 text-green-300">已分享</span>
            )}
          </div>
          <UserSection
            user={user}
            syncStatus={syncStatus}
            onLogin={onLogin}
            onLogout={onLogout}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            className="p-2 -ml-2 rounded-lg hover:bg-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          <div className="text-center">
            <div className="text-lg font-bold flex items-center justify-center">
              <span className="mr-2">{displayIcon}</span>
              {displayName}
            </div>
          </div>
          {mode === 'shared-with-me' ? (
            <div className="p-2 -mr-2 w-10" /> // placeholder for alignment
          ) : (
            <button
              onClick={() => onNavigate('addItems')}
              className="p-2 -mr-2 rounded-lg hover:bg-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
              </svg>
            </button>
          )}
        </div>
        {/* Progress bar */}
        {totalCount > 0 && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-300 mb-1">
              <span>完成進度</span>
              <span>{checkedCount}/{totalCount}</span>
            </div>
            <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Checklist content */}
      <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
        {items.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <div className="text-5xl mb-4">📭</div>
            <div className="text-lg mb-2">清單是空的</div>
            {mode !== 'shared-with-me' && (
              <button
                onClick={() => onNavigate('addItems')}
                className="text-gray-500 underline"
              >
                從物品庫加入物品
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            {items.map(item => {
              const isChecked = checkedItems.includes(item.id);
              const hasNote = item.note && item.note.trim();
              const isNoteExpanded = expandedNotes.includes(item.id);

              return (
                <div key={item.id} className="group">
                  <div
                    onClick={() => toggleItemCheck(item.id)}
                    className={`flex items-center p-4 bg-white rounded-xl shadow-sm active:bg-gray-50 transition-all cursor-pointer
                      ${isChecked ? 'bg-gray-50' : ''} ${isNoteExpanded ? 'rounded-b-none' : ''}`}
                  >
                    <div className={`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors
                      ${isChecked ? 'border-gray-600 bg-gray-600' : 'border-gray-300'}`}>
                      {isChecked && (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`${isChecked ? 'line-through text-gray-400' : 'text-gray-800'} text-lg`}>
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-400">{item.category}</div>
                    </div>
                    {hasNote && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleNoteExpand(item.id);
                        }}
                        className={`p-2 rounded-lg ${isNoteExpanded ? 'bg-gray-200 text-gray-600' : 'text-gray-400'}`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                        </svg>
                      </button>
                    )}
                  </div>
                  {hasNote && isNoteExpanded && (
                    <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 rounded-b-xl">
                      <div className="flex items-start text-sm text-gray-600">
                        <span className="mr-2">{'\uD83D\uDCDD'}</span>
                        <span>{item.note}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom buttons */}
      {items.length > 0 && (
        <div className="p-4 bg-white border-t border-gray-200 safe-bottom">
          <div className="flex gap-3">
            <button
              onClick={resetChecks}
              className="flex-1 py-3 text-gray-600 border border-gray-300 rounded-xl font-medium active:bg-gray-100"
            >
              重設
            </button>
            <button
              onClick={checkAll}
              disabled={allChecked}
              className={`flex-1 py-3 rounded-xl font-medium transition-colors
                ${allChecked ? 'bg-gray-200 text-gray-400' : 'bg-gray-700 text-white active:bg-gray-800'}`}
            >
              {allChecked ? '✓ 準備完成！' : '全部確認'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
