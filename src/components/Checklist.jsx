import { useState, useEffect, useRef } from 'react';
import { Plus, Inbox, StickyNote, Check, Camera, ChevronDown, RotateCcw, CheckCheck } from 'lucide-react';
import Icon from './Icon';
import { categories } from '../utils/data';

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
              className="flex-1 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]"
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CelebrationOverlay() {
  const confettiColors = [
    'bg-red-400', 'bg-yellow-400', 'bg-green-400', 'bg-blue-400', 'bg-purple-400',
    'bg-pink-400', 'bg-indigo-400', 'bg-emerald-400', 'bg-orange-400', 'bg-cyan-400'
  ];

  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
      {/* Confetti particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-2.5 h-2.5 rounded-sm animate-confetti ${confettiColors[i % confettiColors.length]}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 0.8}s`,
            animationDuration: `${1.5 + Math.random() * 1}s`,
          }}
        />
      ))}
      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-celebration-text text-center">
          <div className="text-6xl mb-2">🎉</div>
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-800 bg-opacity-90 dark:bg-opacity-90 px-6 py-3 rounded-2xl shadow-lg">
            準備完成！
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
  const [lastToggledId, setLastToggledId] = useState(null);
  const [collapsedCategories, setCollapsedCategories] = useState([]);
  const [showCelebration, setShowCelebration] = useState(false);

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

  // Celebration: detect allChecked transition from false → true
  const prevAllCheckedRef = useRef(allChecked);
  useEffect(() => {
    if (allChecked && !prevAllCheckedRef.current) {
      setShowCelebration(true);
      const timer = setTimeout(() => setShowCelebration(false), 2500);
      return () => clearTimeout(timer);
    }
    prevAllCheckedRef.current = allChecked;
  }, [allChecked]);

  // Group items by category
  const groupedByCategory = (() => {
    const groups = [];
    const itemsByCategory = {};

    items.forEach(item => {
      const cat = item.category || '其他';
      if (!itemsByCategory[cat]) itemsByCategory[cat] = [];
      itemsByCategory[cat].push(item);
    });

    // Follow categories array order
    categories.forEach(cat => {
      if (itemsByCategory[cat]) {
        groups.push({ category: cat, items: itemsByCategory[cat] });
        delete itemsByCategory[cat];
      }
    });

    // Unknown categories at the end
    Object.keys(itemsByCategory).forEach(cat => {
      groups.push({ category: cat, items: itemsByCategory[cat] });
    });

    return groups;
  })();

  const toggleItemCheck = (itemId) => {
    setLastToggledId(itemId);
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

  const toggleCategoryCollapse = (category) => {
    setCollapsedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const renderItem = (item) => {
    const isChecked = checkedItems.includes(item.id);
    const hasNote = item.note?.trim();
    const hasExtra = hasNote || item.photoURL;
    const isNoteExpanded = expandedNotes.includes(item.id);
    const isJustToggled = lastToggledId === item.id;

    return (
      <div key={item.id}>
        <div
          onClick={() => toggleItemCheck(item.id)}
          className={`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150 cursor-pointer min-h-[56px]
            ${isChecked ? 'bg-slate-50 dark:bg-slate-800/50' : ''} ${hasExtra && isNoteExpanded ? 'rounded-b-none border-b-0' : ''}`}
        >
          <div
            className={`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
              ${isChecked ? 'border-indigo-600 bg-indigo-600 dark:border-indigo-500 dark:bg-indigo-500' : 'border-slate-300 dark:border-slate-600'}
              ${isJustToggled && isChecked ? 'animate-check-bounce' : ''}`}
            onAnimationEnd={() => setLastToggledId(null)}
          >
            {isChecked && (
              <Check
                size={14}
                className={`text-white ${isJustToggled ? 'animate-check-icon-in' : ''}`}
              />
            )}
          </div>
          {item.photoURL && (
            <img
              src={item.photoURL}
              alt=""
              className="w-10 h-10 object-cover rounded-lg mr-3 flex-shrink-0"
              loading="lazy"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          )}
          <div className="flex-1 min-w-0">
            <div className={`text-lg transition-all duration-300 ${isChecked ? 'line-through text-slate-400 dark:text-slate-500 opacity-60' : 'text-slate-800 dark:text-slate-100'}`}>
              {item.name}
            </div>
          </div>
          {hasExtra && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleNoteExpand(item.id);
              }}
              className={`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                ${isNoteExpanded ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`}
              aria-label="展開詳情"
            >
              <ChevronDown size={18} className={`transition-transform duration-200 ${isNoteExpanded ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
        {hasExtra && isNoteExpanded && (
          <div className="px-4 py-3 bg-indigo-50 dark:bg-indigo-900/30 border border-slate-200 dark:border-slate-700 border-t-0 rounded-b-xl">
            {hasNote && (
              <div className="flex items-start text-sm text-slate-600 dark:text-slate-300 gap-2">
                <StickyNote size={14} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                <span>{item.note}</span>
              </div>
            )}
            {item.photoURL && (
              <div className={hasNote ? 'mt-2' : ''}>
                <img
                  src={item.photoURL}
                  alt={item.name}
                  className="max-w-[200px] rounded-lg"
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <Icon name={displayIcon} size={22} className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
            <span className="text-lg font-bold truncate">{displayName}</span>
            {mode === 'shared-with-me' && ownerLabel && (
              <span className="text-xs text-indigo-500 dark:text-indigo-400 flex-shrink-0">來自 {ownerLabel}</span>
            )}
            {mode === 'own-shared' && (
              <span className="text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0">已分享</span>
            )}
          </div>
          {mode !== 'shared-with-me' && (
            <button
              onClick={() => onNavigate('addItems')}
              className="p-2 -mr-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="新增物品"
            >
              <Plus size={22} className="text-indigo-600 dark:text-indigo-400" />
            </button>
          )}
        </div>
        {/* Progress bar */}
        {totalCount > 0 && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span>完成進度</span>
              <span>{checkedCount}/{totalCount}</span>
            </div>
            <div className="h-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Checklist content */}
      <div className="flex-1 overflow-y-auto px-4 pt-6 pb-4 no-scrollbar">
        {items.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <Inbox size={48} className="mx-auto mb-4 text-slate-300 dark:text-slate-600" />
            <div className="text-lg mb-2">清單是空的</div>
            {mode !== 'shared-with-me' && (
              <button
                onClick={() => onNavigate('addItems')}
                className="text-indigo-600 dark:text-indigo-400 font-medium active:text-indigo-700 dark:active:text-indigo-300 transition-colors duration-150"
              >
                從物品庫加入物品
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {groupedByCategory.map(({ category, items: catItems }) => {
              const isCollapsed = collapsedCategories.includes(category);
              const catCheckedCount = catItems.filter(item => checkedItems.includes(item.id)).length;
              const catTotalCount = catItems.length;
              const catAllChecked = catCheckedCount === catTotalCount;

              return (
                <div key={category}>
                  {/* Category header */}
                  <button
                    onClick={() => toggleCategoryCollapse(category)}
                    className="w-full flex items-center gap-2 py-2 px-1 mb-1"
                  >
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 transition-transform duration-200 ${isCollapsed ? '-rotate-90' : ''}`}
                    />
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">{category}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${catAllChecked ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                      {catCheckedCount}/{catTotalCount}
                    </span>
                  </button>
                  {/* Category items */}
                  {!isCollapsed && (
                    <div className="space-y-2 animate-slide-down">
                      {catItems.map(item => renderItem(item))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom buttons */}
        {items.length > 0 && (
          <div className="pt-4 pb-16">
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmAction('reset')}
                className="flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]"
              >
                <RotateCcw size={16} className="inline mr-1.5 -mt-0.5" />重設
              </button>
              <button
                onClick={() => setConfirmAction('checkAll')}
                disabled={allChecked}
                className={`flex-1 py-3 rounded-xl font-medium transition-colors duration-150 min-h-[44px]
                  ${allChecked ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-400' : 'bg-indigo-600 dark:bg-indigo-500 text-white active:bg-indigo-700 dark:active:bg-indigo-600'}`}
              >
                <CheckCheck size={16} className="inline mr-1.5 -mt-0.5" />{allChecked ? '準備完成！' : '全部確認'}
              </button>
            </div>
          </div>
        )}
      </div>

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

      {/* Celebration overlay */}
      {showCelebration && <CelebrationOverlay />}
    </div>
  );
}
