import { useState } from 'react';
import { Plus, Inbox, StickyNote, Check } from 'lucide-react';
import Icon from './Icon';

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
              className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px]"
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
  const [confirmAction, setConfirmAction] = useState(null);

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
    displayIcon = sharedData.icon || 'clipboard-list';
    ownerLabel = sharedData.ownerName || sharedData.ownerEmail || '';
  } else if (mode === 'own-shared' && safeList && sharedData) {
    items = safeList.items
      .map(id => data.itemLibrary?.find(item => item.id === id))
      .filter(Boolean);
    checkedItems = sharedData.checkedItems || [];
    displayName = safeList.name || '清單';
    displayIcon = safeList.icon || 'clipboard-list';
  } else {
    // local mode
    items = safeList
      ? safeList.items
          .map(id => data.itemLibrary?.find(item => item.id === id))
          .filter(Boolean)
      : [];
    checkedItems = safeList?.checkedItems || [];
    displayName = safeList?.name || '清單';
    displayIcon = safeList?.icon || 'clipboard-list';
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

  return (
    <div className="flex flex-col h-screen pb-16">
      {/* Header */}
      <div className="bg-white text-slate-900 px-4 py-3 border-b border-slate-200 safe-top">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <Icon name={displayIcon} size={22} className="text-indigo-600 flex-shrink-0" />
            <span className="text-lg font-bold truncate">{displayName}</span>
            {mode === 'shared-with-me' && ownerLabel && (
              <span className="text-xs text-indigo-500 flex-shrink-0">來自 {ownerLabel}</span>
            )}
            {mode === 'own-shared' && (
              <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-200 flex-shrink-0">已分享</span>
            )}
          </div>
          {mode !== 'shared-with-me' && (
            <button
              onClick={() => onNavigate('addItems')}
              className="p-2 -mr-2 rounded-lg active:bg-slate-100 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="新增物品"
            >
              <Plus size={22} className="text-indigo-600" />
            </button>
          )}
        </div>
        {/* Progress bar */}
        {totalCount > 0 && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>完成進度</span>
              <span>{checkedCount}/{totalCount}</span>
            </div>
            <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Checklist content */}
      <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
        {items.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <Inbox size={48} className="mx-auto mb-4 text-slate-300" />
            <div className="text-lg mb-2">清單是空的</div>
            {mode !== 'shared-with-me' && (
              <button
                onClick={() => onNavigate('addItems')}
                className="text-indigo-600 font-medium active:text-indigo-700 transition-colors duration-150"
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
                <div key={item.id}>
                  <div
                    onClick={() => toggleItemCheck(item.id)}
                    className={`flex items-center p-4 bg-white rounded-xl border border-slate-200 active:bg-slate-50 transition-colors duration-150 cursor-pointer min-h-[56px]
                      ${isChecked ? 'bg-slate-50' : ''} ${isNoteExpanded ? 'rounded-b-none border-b-0' : ''}`}
                  >
                    <div className={`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
                      ${isChecked ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300'}`}>
                      {isChecked && <Check size={14} className="text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`${isChecked ? 'line-through text-slate-400' : 'text-slate-800'} text-lg`}>
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-400">{item.category}</div>
                    </div>
                    {hasNote && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleNoteExpand(item.id);
                        }}
                        className={`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                          ${isNoteExpanded ? 'bg-indigo-50 text-indigo-600' : 'text-slate-400'}`}
                        aria-label="展開備註"
                      >
                        <StickyNote size={18} />
                      </button>
                    )}
                  </div>
                  {hasNote && isNoteExpanded && (
                    <div className="px-4 py-3 bg-indigo-50 border border-slate-200 border-t-0 rounded-b-xl">
                      <div className="flex items-start text-sm text-slate-600 gap-2">
                        <StickyNote size={14} className="text-indigo-400 mt-0.5 flex-shrink-0" />
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
        <div className="p-4 bg-white border-t border-slate-200">
          <div className="flex gap-3">
            <button
              onClick={() => setConfirmAction('reset')}
              className="flex-1 py-3 text-slate-600 border border-slate-300 rounded-xl font-medium active:bg-slate-100 transition-colors duration-150 min-h-[44px]"
            >
              重設
            </button>
            <button
              onClick={() => setConfirmAction('checkAll')}
              disabled={allChecked}
              className={`flex-1 py-3 rounded-xl font-medium transition-colors duration-150 min-h-[44px]
                ${allChecked ? 'bg-indigo-100 text-indigo-400' : 'bg-indigo-600 text-white active:bg-indigo-700'}`}
            >
              {allChecked ? '準備完成！' : '全部確認'}
            </button>
          </div>
        </div>
      )}

      {confirmAction === 'reset' && (
        <ConfirmDialog
          message="確定要重設所有勾選？"
          onConfirm={() => { resetChecks(); setConfirmAction(null); }}
          onCancel={() => setConfirmAction(null)}
        />
      )}
      {confirmAction === 'checkAll' && (
        <ConfirmDialog
          message="確定要勾選全部項目？"
          onConfirm={() => { checkAll(); setConfirmAction(null); }}
          onCancel={() => setConfirmAction(null)}
        />
      )}
    </div>
  );
}
