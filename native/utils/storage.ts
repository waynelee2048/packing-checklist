import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY, AppData, defaultData, sanitizeData } from './data';

// Load from AsyncStorage
export async function loadFromLocal(): Promise<AppData> {
  try {
    const saved = await AsyncStorage.getItem(STORAGE_KEY);
    if (saved) {
      return sanitizeData(JSON.parse(saved));
    }
  } catch (e) {
    console.error('載入本地資料失敗', e);
  }
  return defaultData;
}

// Save to AsyncStorage
export async function saveToLocal(data: AppData): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('儲存本地資料失敗', e);
  }
}
