export const STORAGE_KEY = 'packing-checklist-data';

export const categories = ['必備', '電子產品', '個人物品', '視天氣', '旅行', '運動'];

export const iconOptions = ['📋', '🚶', '💼', '✈️', '🏃', '🎒', '🏖️', '🏕️', '🎯', '🛒'];

export const defaultData = {
  itemLibrary: [
    { id: 1, name: '錢包', category: '必備', note: '放在玄關抽屜' },
    { id: 2, name: '鑰匙', category: '必備', note: '大門+機車' },
    { id: 3, name: '手機', category: '必備', note: '' },
    { id: 4, name: '悠遊卡', category: '必備', note: '記得加值' },
    { id: 5, name: '耳機', category: '電子產品', note: '充電盒在書桌' },
    { id: 6, name: '行動電源', category: '電子產品', note: '出門前確認電量' },
    { id: 7, name: '充電線', category: '電子產品', note: 'Type-C' },
    { id: 8, name: '口罩', category: '個人物品', note: '備用放包包內袋' },
    { id: 9, name: '面紙', category: '個人物品', note: '' },
    { id: 10, name: '水壺', category: '個人物品', note: '裝滿水' },
    { id: 11, name: '雨傘', category: '視天氣', note: '摺疊傘在門口' },
    { id: 12, name: '護照', category: '旅行', note: '效期到 2027/05' },
    { id: 13, name: '換洗衣物', category: '旅行', note: '依天數準備' },
  ],
  lists: [
    { id: 1, name: '日常出門', icon: '🚶', items: [1, 2, 3, 4, 8, 9], checkedItems: [] },
    { id: 2, name: '上班通勤', icon: '💼', items: [1, 2, 3, 4, 5, 6, 7, 8], checkedItems: [] },
  ],
  activeListId: 1
};

// Email encoding for Firebase keys (. → ,)
export function encodeEmail(email) {
  return email.toLowerCase().replace(/\./g, ',');
}

export function decodeEmail(encoded) {
  return encoded.replace(/,/g, '.');
}

// Sanitize shared list data from Firebase
export function sanitizeSharedList(sharedList) {
  if (!sharedList) return null;
  return {
    ...sharedList,
    items: Array.isArray(sharedList.items) ? sharedList.items : [],
    checkedItems: Array.isArray(sharedList.checkedItems) ? sharedList.checkedItems : [],
    sharedWith: sharedList.sharedWith || {}
  };
}

// Sanitize data from Firebase (handles null arrays)
export function sanitizeData(data) {
  if (!data) return defaultData;

  return {
    itemLibrary: Array.isArray(data.itemLibrary) ? data.itemLibrary : defaultData.itemLibrary,
    lists: Array.isArray(data.lists) ? data.lists.map(list => ({
      ...list,
      items: Array.isArray(list.items) ? list.items : [],
      checkedItems: Array.isArray(list.checkedItems) ? list.checkedItems : [],
      ...(list.sharedListId ? { sharedListId: list.sharedListId } : {})
    })) : defaultData.lists,
    activeListId: data.activeListId || defaultData.activeListId
  };
}

// Load from localStorage
export function loadFromLocal() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return sanitizeData(JSON.parse(saved));
    }
  } catch (e) {
    console.error('載入本地資料失敗', e);
  }
  return defaultData;
}

// Save to localStorage
export function saveToLocal(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('儲存本地資料失敗', e);
  }
}
