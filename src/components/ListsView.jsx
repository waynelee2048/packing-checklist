import { useState } from 'react';
import { iconOptions } from '../utils/data';

export default function ListsView({ data, onNavigate, onSaveData }) {
  const [newListName, setNewListName] = useState('');
  const [newListIcon, setNewListIcon] = useState('📋');

  const selectList = (listId) => {
    const newData = {
      ...data,
      activeListId: listId
    };
    onSaveData(newData);
    onNavigate('checklist');
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
    onNavigate('checklist');
  };

  const deleteList = (listId, e) => {
    e.stopPropagation();
    if (data.lists.length <= 1) return;
    if (!confirm('確定刪除此清單？')) return;

    const newLists = data.lists.filter(l => l.id !== listId);
    const newData = {
      ...data,
      lists: newLists,
      activeListId: data.activeListId === listId ? newLists[0].id : data.activeListId
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

            return (
              <div
                key={list.id}
                onClick={() => selectList(list.id)}
                className={`flex items-center p-4 bg-white rounded-xl shadow-sm active:bg-gray-50 cursor-pointer
                  ${isActive ? 'ring-2 ring-gray-400' : ''}`}
              >
                <span className="text-2xl mr-3">{list.icon}</span>
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{list.name}</div>
                  <div className="text-sm text-gray-400">{checkedCount}/{itemCount} 已確認</div>
                </div>
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
          📚 管理物品庫
        </button>
      </div>
    </div>
  );
}
