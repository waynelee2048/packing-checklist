export const STORAGE_KEY = 'packing-checklist-data';

export const defaultCategories = ['必備', '電子產品', '個人物品', '視天氣', '旅行', '運動'];
export { defaultCategories as categories };

export const iconOptions = [
  'clipboard-list', 'footprints', 'briefcase', 'plane', 'person-standing',
  'backpack', 'umbrella', 'tent', 'target', 'shopping-cart',
  'shirt', 'dumbbell', 'mountain', 'baby', 'camera',
  'heart', 'music', 'book-open', 'coffee', 'gift',
];

export const defaultData = {
  itemLibrary: [
    { id: 1, name: '錢包', category: '必備', note: '', location: '玄關抽屜', spaceId: 'space_default' },
    { id: 2, name: '鑰匙', category: '必備', note: '大門+機車', location: '', spaceId: 'space_default' },
    { id: 3, name: '手機', category: '必備', note: '', location: '', spaceId: 'space_default' },
    { id: 4, name: '悠遊卡', category: '必備', note: '記得加值', location: '', spaceId: 'space_default' },
    { id: 5, name: '耳機', category: '電子產品', note: '', location: '書桌', spaceId: 'space_default' },
    { id: 6, name: '行動電源', category: '電子產品', note: '出門前確認電量', location: '', spaceId: 'space_default' },
    { id: 7, name: '充電線', category: '電子產品', note: 'Type-C', location: '', spaceId: 'space_default' },
    { id: 8, name: '口罩', category: '個人物品', note: '備用放包包內袋', location: '', spaceId: 'space_default' },
    { id: 9, name: '面紙', category: '個人物品', note: '', location: '', spaceId: 'space_default' },
    { id: 10, name: '水壺', category: '個人物品', note: '裝滿水', location: '', spaceId: 'space_default' },
    { id: 11, name: '雨傘', category: '視天氣', note: '', location: '門口', spaceId: 'space_default' },
    { id: 12, name: '護照', category: '旅行', note: '效期到 2027/05', location: '', spaceId: 'space_default' },
    { id: 13, name: '換洗衣物', category: '旅行', note: '依天數準備', location: '', spaceId: 'space_default' },
  ],
  lists: [
    { id: 1, name: '日常出門', icon: 'footprints', items: [1, 2, 3, 4, 8, 9], checkedItems: [] },
    { id: 2, name: '上班通勤', icon: 'briefcase', items: [1, 2, 3, 4, 5, 6, 7, 8], checkedItems: [] },
  ],
  activeListId: 1,
  templates: [],
  spaces: [
    { id: 'space_default', name: '個人空間' },
    { id: 'space_family', name: '家庭共享空間' }
  ],
  activeSpaceId: 'space_default'
};

// Email encoding for Firebase keys (. → ,)
export function encodeEmail(email) {
  return email.toLowerCase().replace(/\./g, ',');
}

export function decodeEmail(encoded) {
  return encoded.replace(/,/g, '.');
}

// Strip undefined values from objects/arrays before writing to Firebase
export function stripUndefined(val) {
  if (Array.isArray(val)) return val.map(stripUndefined);
  if (val !== null && typeof val === 'object') {
    return Object.fromEntries(
      Object.entries(val).filter(([, v]) => v !== undefined).map(([k, v]) => [k, stripUndefined(v)])
    );
  }
  return val;
}

// Sanitize shared list data from Firebase
export function sanitizeSharedList(sharedList) {
  if (!sharedList) return null;
  return {
    ...sharedList,
    items: Array.isArray(sharedList.items) ? sharedList.items : [],
    checkedItems: Array.isArray(sharedList.checkedItems) ? sharedList.checkedItems : [],
    sharedWith: Object.fromEntries(
      Object.entries(sharedList.sharedWith || {}).map(
        ([k, v]) => [k, v === true ? 'view' : v]
      )
    )
  };
}

// Sanitize data from Firebase (handles null arrays)
export function sanitizeData(data) {
  if (!data) return defaultData;

  const spaces = Array.isArray(data.spaces) && data.spaces.length > 0
    ? data.spaces
    : defaultData.spaces;
  const activeSpaceId = data.activeSpaceId || spaces[0].id;
  const defaultSpaceId = spaces[0].id;

  const itemLibrary = (Array.isArray(data.itemLibrary) ? data.itemLibrary : defaultData.itemLibrary)
    .map(item => ({
      ...item,
      note: item.note || '',
      location: item.location || '',
      spaceId: item.spaceId || defaultSpaceId,
    }));

  return {
    itemLibrary,
    lists: Array.isArray(data.lists) ? data.lists.map(list => ({
      ...list,
      items: Array.isArray(list.items) ? list.items : [],
      checkedItems: Array.isArray(list.checkedItems) ? list.checkedItems : [],
      inlineItems: Array.isArray(list.inlineItems) ? list.inlineItems : [],
      ...(list.sharedListId ? { sharedListId: list.sharedListId } : {})
    })) : defaultData.lists,
    activeListId: data.activeListId || defaultData.activeListId,
    templates: Array.isArray(data.templates) ? data.templates : [],
    spaces,
    activeSpaceId
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
