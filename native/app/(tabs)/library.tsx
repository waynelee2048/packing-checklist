import React, { useState } from 'react';
import { ScrollView, Pressable, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChevronLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useColorScheme } from '@/components/useColorScheme';
import { useData } from '@/contexts/DataContext';
import { categories, Item } from '@/utils/data';
import {
  VStack,
  HStack,
  Box,
  Text,
  Heading,
  Button,
  Input,
  Card,
  Select,
  BottomSheet,
} from '@/components/ui';

export default function LibraryScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { data, saveData } = useData();
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState(categories[0]);
  const [newItemNote, setNewItemNote] = useState('');
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  // Edit modal state
  const [editName, setEditName] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [editNote, setEditNote] = useState('');

  const iconColor = isDark ? '#9ca3af' : '#6b7280';

  // Group items by category
  const groupedItems: Record<string, Item[]> = {};
  categories.forEach((cat) => {
    groupedItems[cat] = [];
  });
  (data.itemLibrary || []).forEach((item) => {
    if (groupedItems[item.category]) {
      groupedItems[item.category].push(item);
    }
  });

  const addItemToLibrary = () => {
    if (!newItemName.trim()) return;

    const newItem: Item = {
      id: Date.now(),
      name: newItemName.trim(),
      category: newItemCategory,
      note: newItemNote.trim(),
    };

    const newData = {
      ...data,
      itemLibrary: [...data.itemLibrary, newItem],
    };

    saveData(newData);
    setNewItemName('');
    setNewItemNote('');
  };

  const openEditModal = (item: Item) => {
    setEditingItem(item);
    setEditName(item.name);
    setEditCategory(item.category);
    setEditNote(item.note || '');
  };

  const updateItem = () => {
    if (!editingItem) return;

    const newData = {
      ...data,
      itemLibrary: data.itemLibrary.map((item) =>
        item.id === editingItem.id
          ? { ...item, name: editName, category: editCategory, note: editNote }
          : item
      ),
    };
    saveData(newData);
    setEditingItem(null);
  };

  const deleteItemFromLibrary = (itemId: number) => {
    Alert.alert('確認刪除', '確定刪除？', [
      { text: '取消', style: 'cancel' },
      {
        text: '刪除',
        style: 'destructive',
        onPress: () => {
          const newData = {
            ...data,
            itemLibrary: data.itemLibrary.filter((item) => item.id !== itemId),
            lists: data.lists.map((list) => ({
              ...list,
              items: (list.items || []).filter((id) => id !== itemId),
              checkedItems: (list.checkedItems || []).filter((id) => id !== itemId),
            })),
          };
          saveData(newData);
        },
      },
    ]);
  };

  return (
    <VStack className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Box
        className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
        style={{ paddingTop: insets.top }}
      >
        <HStack className="px-4 py-3 items-center justify-between">
          <Pressable
            onPress={() => router.push('/lists')}
            className="w-10 h-10 items-center justify-center rounded-full active:bg-gray-100 dark:active:bg-gray-700"
          >
            <ChevronLeft size={24} color={iconColor} />
          </Pressable>
          <Text className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            物品庫
          </Text>
          <Box className="w-10" />
        </HStack>
      </Box>

      {/* Add new item form */}
      <Box className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <Text className="text-sm text-gray-500 dark:text-gray-400 mb-2">新增物品</Text>
        <Input
          value={newItemName}
          onChangeText={setNewItemName}
          placeholder="物品名稱..."
          className="mb-2"
        />
        <Select
          value={newItemCategory}
          options={categories}
          onChange={setNewItemCategory}
          className="mb-2"
        />
        <Input
          value={newItemNote}
          onChangeText={setNewItemNote}
          placeholder="備註（選填）：存放位置、提醒事項..."
          className="mb-2"
        />
        <Button onPress={addItemToLibrary} className="w-full">
          + 新增物品
        </Button>
      </Box>

      {/* Items list */}
      <ScrollView className="flex-1 p-4">
        {categories.map((category) => {
          const items = groupedItems[category];
          if (items.length === 0) return null;

          return (
            <VStack key={category} className="mb-4">
              <Text className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">
                {category}
              </Text>
              <VStack className="gap-2">
                {items.map((item) => (
                  <Card key={item.id} className="p-3">
                    <HStack className="items-center justify-between">
                      <Text className="font-medium text-gray-800 dark:text-gray-200">
                        {item.name}
                      </Text>
                      <HStack className="gap-2">
                        <Pressable onPress={() => openEditModal(item)}>
                          <Text className="text-sm text-blue-500 dark:text-blue-400 px-2">
                            編輯
                          </Text>
                        </Pressable>
                        <Pressable onPress={() => deleteItemFromLibrary(item.id)}>
                          <Text className="text-sm text-red-400 px-2">刪除</Text>
                        </Pressable>
                      </HStack>
                    </HStack>
                    {item.note && (
                      <Text className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                        {item.note}
                      </Text>
                    )}
                  </Card>
                ))}
              </VStack>
            </VStack>
          );
        })}
        <Box className="h-4" />
      </ScrollView>

      {/* Edit modal */}
      <BottomSheet
        visible={editingItem !== null}
        onClose={() => setEditingItem(null)}
      >
        <Heading className="mb-4">編輯物品</Heading>
        <Input
          value={editName}
          onChangeText={setEditName}
          className="mb-2"
        />
        <Select
          value={editCategory}
          options={categories}
          onChange={setEditCategory}
          className="mb-2"
        />
        <Input
          value={editNote}
          onChangeText={setEditNote}
          placeholder="備註（選填）"
          className="mb-4"
        />
        <HStack className="gap-3">
          <Button
            variant="outline"
            onPress={() => setEditingItem(null)}
            className="flex-1"
          >
            取消
          </Button>
          <Button onPress={updateItem} className="flex-1">
            儲存
          </Button>
        </HStack>
      </BottomSheet>
    </VStack>
  );
}
