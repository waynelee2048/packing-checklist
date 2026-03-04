import { useState } from 'react';
import { X, Minus, Plus, Search } from 'lucide-react';

export default function AddItemsView({ data, onNavigate, onSaveData, categories = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSelected, setShowSelected] = useState(false);

  const list = data.lists?.find(l => l.id === data.activeListId);
  const safeList = list ? {
    ...list,
    items: Array.isArray(list.items) ? list.items : [],
    checkedItems: Array.isArray(list.checkedItems) ? list.checkedItems : []
  } : null;

  const selectedCount = safeList?.items?.length || 0;

  // Group items by category
  const groupedItems = {};
  categories.forEach(cat => { groupedItems[cat] = []; });
  (data.itemLibrary || []).forEach(item => {
    if (groupedItems[item.category]) {
      groupedItems[item.category].push(item);
    }
  });

  const toggleItemInList = (itemId) => {
    const newData = {
      ...data,
      lists: data.lists.map(l => {
        if (l.id !== data.activeListId) return l;
        const items = Array.isArray(l.items) ? l.items : [];
        const checkedItems = Array.isArray(l.checkedItems) ? l.checkedItems : [];
        const hasItem = items.includes(itemId);
        return {
          ...l,
          items: hasItem
            ? items.filter(id => id !== itemId)
            : [...items, itemId],
          checkedItems: hasItem
            ? checkedItems.filter(id => id !== itemId)
            : checkedItems
        };
      })
    };
    onSaveData(newData);
  };

  const toggleCategoryAll = (categoryItems) => {
    const listItems = safeList?.items || [];
    const allInList = categoryItems.every(item => listItems.includes(item.id));
    const newData = {
      ...data,
      lists: data.lists.map(l => {
        if (l.id !== data.activeListId) return l;
        const items = Array.isArray(l.items) ? l.items : [];
        const checkedItems = Array.isArray(l.checkedItems) ? l.checkedItems : [];
        if (allInList) {
          const removeIds = new Set(categoryItems.map(i => i.id));
          return {
            ...l,
            items: items.filter(id => !removeIds.has(id)),
            checkedItems: checkedItems.filter(id => !removeIds.has(id))
          };
        } else {
          const toAdd = categoryItems.filter(i => !items.includes(i.id)).map(i => i.id);
          return { ...l, items: [...items, ...toAdd] };
        }
      })
    };
    onSaveData(newData);
  };

  const handleCreateNewItem = () => {
    const trimmed = searchQuery.trim();
    if (!trimmed) return;
    const newId = 'item_' + Date.now();
    const newItem = { id: newId, name: trimmed, category: categories[0] || '其他' };
    const newData = {
      ...data,
      itemLibrary: [...(data.itemLibrary || []), newItem],
      lists: data.lists.map(l => {
        if (l.id !== data.activeListId) return l;
        const items = Array.isArray(l.items) ? l.items : [];
        return { ...l, items: [...items, newId] };
      })
    };
    onSaveData(newData);
    setSearchQuery('');
  };

  // US-009: show CTA when query has no exact match
  const trimmedQuery = searchQuery.trim();
  const hasExactMatch = trimmedQuery
    ? (data.itemLibrary || []).some(item => item.name?.toLowerCase() === trimmedQuery.toLowerCase())
    : false;
  const showCreateCTA = trimmedQuery !== '' && !hasExactMatch;

  // Selected item names for expanded panel
  const selectedItemNames = (data.itemLibrary || [])
    .filter(item => safeList?.items?.includes(item.id))
    .map(item => item.name);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top">
        <div className="flex items-center justify-between">
          <div className="w-10" />
          <div className="text-lg font-bold truncate">加入物品到 {safeList?.name}</div>
          <button
            onClick={() => onNavigate('checklist')}
            className="p-2 -mr-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="關閉"
          >
            <X size={22} className="text-slate-600 dark:text-slate-300" />
          </button>
        </div>
      </div>

      {/* Items selection */}
      <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
        {/* Search bar */}
        <div className="mb-2">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜尋物品名稱..."
              className="w-full pl-9 pr-8 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"
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

        {/* US-007: Selected counter */}
        <button
          onClick={() => setShowSelected(v => !v)}
          className="text-sm text-slate-500 dark:text-slate-400 py-2 flex items-center gap-1"
        >
          已選 {selectedCount} 個 {showSelected ? '▲' : '▼'}
        </button>

        {/* Selected items expanded panel */}
        {showSelected && selectedCount > 0 && (
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 mb-2 space-y-1">
            {selectedItemNames.map((name, idx) => (
              <div key={idx} className="text-xs text-slate-500 dark:text-slate-400">{name}</div>
            ))}
          </div>
        )}

        {/* Category groups */}
        {categories.map(category => {
          const items = searchQuery
            ? groupedItems[category].filter(item => {
                const q = searchQuery.toLowerCase();
                return item.name?.toLowerCase().includes(q) ||
                  item.category?.toLowerCase().includes(q) ||
                  item.note?.toLowerCase().includes(q) ||
                  item.location?.toLowerCase().includes(q);
              })
            : groupedItems[category];
          if (items.length === 0) return null;

          return (
            <div key={category} className="mb-4">
              <div className="mb-2">
                <span className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">{category}</span>
              </div>
              <div className="space-y-2">
                {items.map(item => {
                  const isInList = safeList?.items.includes(item.id);

                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItemInList(item.id)}
                      className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 cursor-pointer transition-colors duration-150 min-h-[56px]"
                    >
                      {item.photoURL && (
                        <img
                          src={item.photoURL}
                          alt=""
                          className="w-8 h-8 object-cover rounded-md mr-3 flex-shrink-0"
                          loading="lazy"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      )}
                      <div className="flex-1 flex items-center gap-2 min-w-0 flex-wrap">
                        <span className={`${isInList ? 'text-slate-800 dark:text-slate-100 font-medium' : 'text-slate-600 dark:text-slate-300'}`}>
                          {item.name}
                        </span>
                        {item.location && (
                          <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full flex-shrink-0">
                            {item.location}
                          </span>
                        )}
                      </div>
                      {/* US-008: +/- toggle button */}
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleItemInList(item.id); }}
                        className={`ml-3 flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors duration-150
                          ${isInList
                            ? 'border-rose-500 text-rose-500'
                            : 'border-indigo-500 text-indigo-500'}`}
                        aria-label={isInList ? '從清單移除' : '加入清單'}
                      >
                        {isInList ? <Minus size={16} /> : <Plus size={16} />}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* US-009: Create new item CTA */}
        {showCreateCTA && (
          <button
            onClick={handleCreateNewItem}
            className="text-indigo-600 dark:text-indigo-400 text-sm py-4 text-center w-full active:opacity-70 transition-opacity"
          >
            + 建立新物品「{trimmedQuery}」
          </button>
        )}
      </div>
    </div>
  );
}
