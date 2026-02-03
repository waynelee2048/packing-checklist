import React from 'react';
import { ScrollView, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChevronLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useColorScheme } from '@/components/useColorScheme';
import { useData } from '@/contexts/DataContext';
import { categories } from '@/utils/data';
import {
  VStack,
  HStack,
  Box,
  Text,
  Button,
  Checkbox,
  PressableCard,
} from '@/components/ui';

export default function AddItemsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { data, saveData } = useData();

  const iconColor = isDark ? '#9ca3af' : '#6b7280';

  const list = data.lists?.find((l) => l.id === data.activeListId);
  const safeList = list
    ? {
        ...list,
        items: Array.isArray(list.items) ? list.items : [],
        checkedItems: Array.isArray(list.checkedItems) ? list.checkedItems : [],
      }
    : null;

  // Group items by category
  const groupedItems: Record<string, typeof data.itemLibrary> = {};
  categories.forEach((cat) => {
    groupedItems[cat] = [];
  });
  (data.itemLibrary || []).forEach((item) => {
    if (groupedItems[item.category]) {
      groupedItems[item.category].push(item);
    }
  });

  const toggleItemInList = (itemId: number) => {
    const newData = {
      ...data,
      lists: data.lists.map((l) => {
        if (l.id !== data.activeListId) return l;
        const items = Array.isArray(l.items) ? l.items : [];
        const checkedItems = Array.isArray(l.checkedItems) ? l.checkedItems : [];
        const hasItem = items.includes(itemId);
        return {
          ...l,
          items: hasItem
            ? items.filter((id) => id !== itemId)
            : [...items, itemId],
          checkedItems: hasItem
            ? checkedItems.filter((id) => id !== itemId)
            : checkedItems,
        };
      }),
    };
    saveData(newData);
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
            onPress={() => router.push('/')}
            className="w-10 h-10 items-center justify-center rounded-full active:bg-gray-100 dark:active:bg-gray-700"
          >
            <ChevronLeft size={24} color={iconColor} />
          </Pressable>
          <VStack className="items-center flex-1">
            <Text className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              加入物品
            </Text>
            <Text className="text-xs text-gray-400 dark:text-gray-500">
              選擇要加入「{safeList?.name}」的物品
            </Text>
          </VStack>
          <Box className="w-10" />
        </HStack>
      </Box>

      {/* Items selection */}
      <ScrollView className="flex-1 p-4">
        {categories.map((category) => {
          const items = groupedItems[category];
          if (items.length === 0) return null;

          return (
            <VStack key={category} className="mb-4">
              <Text className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">
                {category}
              </Text>
              <VStack className="gap-1">
                {items.map((item) => {
                  const isInList = safeList?.items.includes(item.id);

                  return (
                    <Pressable
                      key={item.id}
                      onPress={() => toggleItemInList(item.id)}
                      className={`flex-row items-center py-3 px-3 rounded-lg active:bg-gray-100 dark:active:bg-gray-800 ${
                        isInList ? 'bg-blue-50 dark:bg-blue-900/30' : ''
                      }`}
                    >
                      <Box className="mr-3">
                        <Checkbox
                          checked={isInList ?? false}
                          onPress={() => toggleItemInList(item.id)}
                        />
                      </Box>
                      <VStack className="flex-1">
                        <Text
                          className={
                            isInList
                              ? 'text-gray-800 dark:text-gray-200 font-medium'
                              : 'text-gray-600 dark:text-gray-400'
                          }
                        >
                          {item.name}
                        </Text>
                        {item.note && (
                          <Text className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                            {item.note}
                          </Text>
                        )}
                      </VStack>
                    </Pressable>
                  );
                })}
              </VStack>
            </VStack>
          );
        })}
        <Box className="h-4" />
      </ScrollView>

      {/* Bottom */}
      <Box
        className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
        style={{ paddingBottom: insets.bottom + 16 }}
      >
        <Text className="text-center text-gray-500 dark:text-gray-400 mb-3">
          已選擇 {safeList?.items?.length || 0} 個物品
        </Text>
        <Button onPress={() => router.push('/')} className="w-full">
          完成
        </Button>
      </Box>
    </VStack>
  );
}
