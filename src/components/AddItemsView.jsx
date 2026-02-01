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
      <div className="bg-gray-700 text-white px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('checklist')}
            className="p-2 -ml-2 rounded-lg hover:bg-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <div className="text-lg font-bold">加入物品</div>
          <div className="w-10"></div>
        </div>
        <div className="text-sm text-gray-300 mt-1">
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
              <div className="text-sm text-gray-500 font-medium mb-2">{category}</div>
              <div className="space-y-2">
                {items.map(item => {
                  const isInList = safeList?.items.includes(item.id);

                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItemInList(item.id)}
                      className={`flex items-center p-4 bg-white rounded-xl shadow-sm active:bg-gray-50 cursor-pointer
                        ${isInList ? 'ring-2 ring-gray-400' : ''}`}
                    >
                      <div className={`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0
                        ${isInList ? 'border-gray-600 bg-gray-600' : 'border-gray-300'}`}>
                        {isInList && (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className={isInList ? 'text-gray-800 font-medium' : 'text-gray-600'}>
                          {item.name}
                        </div>
                        {item.note && (
                          <div className="text-xs text-gray-400 mt-0.5">📝 {item.note}</div>
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
      <div className="p-4 bg-white border-t border-gray-200 safe-bottom">
        <div className="text-center text-gray-500 mb-3">
          已選擇 {safeList?.items?.length || 0} 個物品
        </div>
        <button
          onClick={() => onNavigate('checklist')}
          className="w-full py-3 bg-gray-700 text-white rounded-xl font-medium active:bg-gray-800"
        >
          完成
        </button>
      </div>
    </div>
  );
}
