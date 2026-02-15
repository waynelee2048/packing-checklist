import { useState } from 'react';
import { ChevronLeft, Check, StickyNote, Plus, X, Search } from 'lucide-react';

export default function AddItemsView({ data, onNavigate, onSaveData, categories = [] }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState(categories[0] || '');
  const [searchQuery, setSearchQuery] = useState('');
  const list = data.lists?.find(l => l.id === data.activeListId);
  const safeList = list ? {
    ...list,
    items: Array.isArray(list.items) ? list.items : [],
    checkedItems: Array.isArray(list.checkedItems) ? list.checkedItems : []
  } : null;

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

  const handleAddItem = () => {
    const trimmed = newItemName.trim();
    if (!trimmed) return;
    const newId = 'item_' + Date.now();
    const newItem = { id: newId, name: trimmed, category: newItemCategory };
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
    setNewItemName('');
    setShowAddForm(false);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('checklist')}
            className="p-2 -ml-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="返回"
          >
            <ChevronLeft size={22} className="text-slate-600 dark:text-slate-300" />
          </button>
          <div className="text-lg font-bold">加入物品</div>
          <div className="w-10"></div>
        </div>
        <div className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">
          選擇要加入「{safeList?.name}」的物品
        </div>
      </div>

      {/* Items selection */}
      <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
        {/* Search bar */}
        <div className="mb-4">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜尋物品..."
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

        {/* No search results */}
        {searchQuery && categories.every(cat => {
          const q = searchQuery.toLowerCase();
          return groupedItems[cat].filter(item =>
            item.name?.toLowerCase().includes(q) ||
            item.category?.toLowerCase().includes(q) ||
            item.note?.toLowerCase().includes(q)
          ).length === 0;
        }) && (
          <div className="text-center py-8 text-slate-400">
            找不到「{searchQuery}」相關物品
          </div>
        )}

        {categories.map(category => {
          const items = searchQuery
            ? groupedItems[category].filter(item => {
                const q = searchQuery.toLowerCase();
                return item.name?.toLowerCase().includes(q) ||
                  item.category?.toLowerCase().includes(q) ||
                  item.note?.toLowerCase().includes(q);
              })
            : groupedItems[category];
          if (items.length === 0) return null;

          const listItems = safeList?.items || [];
          const allInList = items.length > 0 && items.every(item => listItems.includes(item.id));

          return (
            <div key={category} className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">{category}</span>
                <button
                  onClick={() => toggleCategoryAll(items)}
                  className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors duration-150 min-h-[28px]
                    ${allInList
                      ? 'text-rose-500 bg-rose-50 dark:bg-rose-900/30 active:bg-rose-100 dark:active:bg-rose-900/50'
                      : 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 active:bg-indigo-100 dark:active:bg-indigo-900/50'}`}
                >
                  {allInList ? '全部移除' : '全部加入'}
                </button>
              </div>
              <div className="space-y-2">
                {items.map(item => {
                  const isInList = safeList?.items.includes(item.id);

                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItemInList(item.id)}
                      className={`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 cursor-pointer transition-colors duration-150 min-h-[56px]
                        ${isInList ? 'ring-2 ring-indigo-500' : ''}`}
                    >
                      <div className={`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
                        ${isInList ? 'border-indigo-600 bg-indigo-600 dark:border-indigo-500 dark:bg-indigo-500' : 'border-slate-300 dark:border-slate-600'}`}>
                        {isInList && <Check size={14} className="text-white" />}
                      </div>
                      {item.photoURL && (
                        <img
                          src={item.photoURL}
                          alt=""
                          className="w-8 h-8 object-cover rounded-md mr-3 flex-shrink-0"
                          loading="lazy"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      )}
                      <div className="flex-1">
                        <div className={isInList ? 'text-slate-800 dark:text-slate-100 font-medium' : 'text-slate-600 dark:text-slate-300'}>
                          {item.name}
                        </div>
                        {item.note && (
                          <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                            <StickyNote size={10} className="flex-shrink-0" />
                            {item.note}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* FAB overlay + form */}
      {showAddForm && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => { setShowAddForm(false); setNewItemName(''); }}
        />
      )}
      {showAddForm && (
        <div className="fixed right-4 bottom-[168px] z-50 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 space-y-3">
          <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">快速新增物品</div>
          <input
            type="text"
            placeholder="物品名稱"
            value={newItemName}
            onChange={e => setNewItemName(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleAddItem(); }}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select
            value={newItemCategory}
            onChange={e => setNewItemCategory(e.target.value)}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button
            onClick={handleAddItem}
            disabled={!newItemName.trim()}
            className="w-full py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg text-sm font-medium active:bg-indigo-700 dark:active:bg-indigo-600 disabled:opacity-40 transition-colors duration-150"
          >
            新增並加入清單
          </button>
        </div>
      )}
      <button
        onClick={() => { setShowAddForm(v => !v); if (showAddForm) setNewItemName(''); }}
        className="fixed right-4 bottom-[112px] z-50 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150"
        aria-label={showAddForm ? '關閉新增表單' : '新增物品'}
      >
        {showAddForm ? <X size={24} /> : <Plus size={24} />}
      </button>

      {/* Bottom */}
      <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
        <div className="text-center text-slate-500 dark:text-slate-400 mb-3">
          已選擇 {safeList?.items?.length || 0} 個物品
        </div>
        <button
          onClick={() => onNavigate('checklist')}
          className="w-full py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]"
        >
          完成
        </button>
      </div>
    </div>
  );
}
