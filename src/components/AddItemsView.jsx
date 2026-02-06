import { ChevronLeft, Check, StickyNote } from 'lucide-react';
import { categories } from '../utils/data';

export default function AddItemsView({ data, onNavigate, onSaveData }) {
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

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-white text-slate-900 px-4 py-3 border-b border-slate-200 safe-top">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('checklist')}
            className="p-2 -ml-2 rounded-lg active:bg-slate-100 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="返回"
          >
            <ChevronLeft size={22} className="text-slate-600" />
          </button>
          <div className="text-lg font-bold">加入物品</div>
          <div className="w-10"></div>
        </div>
        <div className="text-sm text-indigo-600 mt-1">
          選擇要加入「{safeList?.name}」的物品
        </div>
      </div>

      {/* Items selection */}
      <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
        {categories.map(category => {
          const items = groupedItems[category];
          if (items.length === 0) return null;

          return (
            <div key={category} className="mb-4">
              <div className="text-sm text-indigo-600 font-semibold mb-2">{category}</div>
              <div className="space-y-2">
                {items.map(item => {
                  const isInList = safeList?.items.includes(item.id);

                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItemInList(item.id)}
                      className={`flex items-center p-4 bg-white rounded-xl border border-slate-200 active:bg-slate-50 cursor-pointer transition-colors duration-150 min-h-[56px]
                        ${isInList ? 'ring-2 ring-indigo-500' : ''}`}
                    >
                      <div className={`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
                        ${isInList ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300'}`}>
                        {isInList && <Check size={14} className="text-white" />}
                      </div>
                      <div className="flex-1">
                        <div className={isInList ? 'text-slate-800 font-medium' : 'text-slate-600'}>
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

      {/* Bottom */}
      <div className="p-4 bg-white border-t border-slate-200 safe-bottom">
        <div className="text-center text-slate-500 mb-3">
          已選擇 {safeList?.items?.length || 0} 個物品
        </div>
        <button
          onClick={() => onNavigate('checklist')}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px]"
        >
          完成
        </button>
      </div>
    </div>
  );
}
