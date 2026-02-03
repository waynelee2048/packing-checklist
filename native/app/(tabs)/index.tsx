import React, { useState } from 'react';
import { ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Menu, Plus, MessageSquare, RotateCcw, CheckCheck } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useColorScheme } from '@/components/useColorScheme';
import { useData } from '@/contexts/DataContext';
import {
  VStack,
  HStack,
  Box,
  Text,
  Progress,
  Checkbox,
  Center,
} from '@/components/ui';

export default function ChecklistScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { data, saveData, user, syncStatus, isLoading } = useData();
  const [expandedNotes, setExpandedNotes] = useState<number[]>([]);

  if (isLoading) {
    return (
      <Center className="flex-1 bg-gray-50 dark:bg-gray-900">
        <ActivityIndicator size="large" color={isDark ? '#60a5fa' : '#3b82f6'} />
      </Center>
    );
  }

  const list = data.lists?.find((l) => l.id === data.activeListId);
  const safeList = list
    ? {
        ...list,
        items: Array.isArray(list.items) ? list.items : [],
        checkedItems: Array.isArray(list.checkedItems) ? list.checkedItems : [],
      }
    : null;

  const items = safeList
    ? safeList.items
        .map((id) => data.itemLibrary?.find((item) => item.id === id))
        .filter(Boolean)
    : [];

  const checkedCount = safeList?.checkedItems?.length || 0;
  const totalCount = items.length;
  const allChecked = totalCount > 0 && checkedCount === totalCount;
  const progress = totalCount > 0 ? (checkedCount / totalCount) * 100 : 0;

  const toggleItemCheck = (itemId: number) => {
    const newData = {
      ...data,
      lists: data.lists.map((l) => {
        if (l.id !== data.activeListId) return l;
        const checkedItems = Array.isArray(l.checkedItems) ? l.checkedItems : [];
        const isChecked = checkedItems.includes(itemId);
        return {
          ...l,
          checkedItems: isChecked
            ? checkedItems.filter((id) => id !== itemId)
            : [...checkedItems, itemId],
        };
      }),
    };
    saveData(newData);
  };

  const resetChecks = () => {
    const newData = {
      ...data,
      lists: data.lists.map((l) =>
        l.id === data.activeListId ? { ...l, checkedItems: [] } : l
      ),
    };
    saveData(newData);
  };

  const checkAll = () => {
    if (!safeList) return;
    const newData = {
      ...data,
      lists: data.lists.map((l) =>
        l.id === data.activeListId ? { ...l, checkedItems: [...safeList.items] } : l
      ),
    };
    saveData(newData);
  };

  const toggleNoteExpand = (itemId: number) => {
    setExpandedNotes((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const getSyncStatusText = () => {
    switch (syncStatus) {
      case 'synced':
        return '已同步';
      case 'syncing':
        return '同步中...';
      case 'error':
        return '同步錯誤';
      default:
        return user ? '離線' : '未登入';
    }
  };

  const iconColor = isDark ? '#9ca3af' : '#6b7280';
  const activeIconColor = isDark ? '#e5e7eb' : '#374151';

  return (
    <VStack className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Box
        className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
        style={{ paddingTop: insets.top }}
      >
        {/* Top bar */}
        <HStack className="px-4 py-3 items-center justify-between">
          <Pressable
            onPress={() => router.push('/lists')}
            className="w-10 h-10 items-center justify-center rounded-full active:bg-gray-100 dark:active:bg-gray-700"
          >
            <Menu size={22} color={iconColor} />
          </Pressable>

          <VStack className="items-center flex-1">
            <HStack className="items-center">
              <Text className="text-xl mr-1.5">{safeList?.icon || '📋'}</Text>
              <Text className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {safeList?.name || '清單'}
              </Text>
            </HStack>
            <Text className="text-xs text-gray-400 dark:text-gray-500">
              {getSyncStatusText()}
            </Text>
          </VStack>

          <Pressable
            onPress={() => router.push('/add')}
            className="w-10 h-10 items-center justify-center rounded-full active:bg-gray-100 dark:active:bg-gray-700"
          >
            <Plus size={22} color={iconColor} />
          </Pressable>
        </HStack>

        {/* Progress section */}
        {totalCount > 0 && (
          <VStack className="px-4 pb-3">
            <HStack className="items-center justify-between mb-2">
              <Text className="text-sm text-gray-500 dark:text-gray-400">
                {checkedCount} / {totalCount} 項目
              </Text>
              <Text className="text-sm font-medium text-blue-500 dark:text-blue-400">
                {Math.round(progress)}%
              </Text>
            </HStack>
            <Progress value={progress} />
          </VStack>
        )}
      </Box>

      {/* Checklist content */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 16 }}
      >
        {items.length === 0 ? (
          <Center className="py-20">
            <Text className="text-5xl mb-4">📭</Text>
            <Text className="text-lg text-gray-400 dark:text-gray-500 mb-2">清單是空的</Text>
            <Pressable onPress={() => router.push('/add')}>
              <Text className="text-blue-500 dark:text-blue-400">從物品庫加入物品</Text>
            </Pressable>
          </Center>
        ) : (
          <VStack className="gap-1">
            {items.map((item) => {
              if (!item) return null;
              const isChecked = safeList!.checkedItems.includes(item.id);
              const hasNote = item.note && item.note.trim();
              const isNoteExpanded = expandedNotes.includes(item.id);

              return (
                <VStack key={item.id}>
                  <Pressable
                    onPress={() => toggleItemCheck(item.id)}
                    className={`flex-row items-center py-3 px-3 rounded-lg active:bg-gray-100 dark:active:bg-gray-800 ${
                      isNoteExpanded ? 'bg-gray-100 dark:bg-gray-800 rounded-b-none' : ''
                    }`}
                  >
                    <Box className="mr-3">
                      <Checkbox
                        checked={isChecked}
                        onPress={() => toggleItemCheck(item.id)}
                      />
                    </Box>
                    <VStack className="flex-1">
                      <Text
                        className={`text-base ${
                          isChecked
                            ? 'line-through text-gray-400 dark:text-gray-500'
                            : 'text-gray-800 dark:text-gray-200'
                        }`}
                      >
                        {item.name}
                      </Text>
                      {item.category && (
                        <Text className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                          {item.category}
                        </Text>
                      )}
                    </VStack>
                    {hasNote && (
                      <Pressable
                        onPress={(e) => {
                          e.stopPropagation();
                          toggleNoteExpand(item.id);
                        }}
                        className="p-2 -mr-1"
                      >
                        <MessageSquare
                          size={18}
                          color={isNoteExpanded ? activeIconColor : iconColor}
                        />
                      </Pressable>
                    )}
                  </Pressable>
                  {hasNote && isNoteExpanded && (
                    <Box className="px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-b-lg -mt-1 ml-9">
                      <Text className="text-sm text-gray-600 dark:text-gray-400">
                        {item.note}
                      </Text>
                    </Box>
                  )}
                </VStack>
              );
            })}
          </VStack>
        )}
      </ScrollView>

      {/* Bottom action bar */}
      {items.length > 0 && (
        <Box
          className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4"
          style={{ paddingBottom: insets.bottom + 12, paddingTop: 12 }}
        >
          <HStack className="gap-3">
            <Pressable
              onPress={resetChecks}
              className="flex-1 flex-row items-center justify-center py-3 rounded-xl bg-gray-100 dark:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600"
            >
              <RotateCcw size={18} color={iconColor} />
              <Text className="ml-2 font-medium text-gray-600 dark:text-gray-300">
                重設
              </Text>
            </Pressable>
            <Pressable
              onPress={checkAll}
              disabled={allChecked}
              className={`flex-1 flex-row items-center justify-center py-3 rounded-xl ${
                allChecked
                  ? 'bg-green-100 dark:bg-green-900'
                  : 'bg-blue-500 dark:bg-blue-600 active:bg-blue-600 dark:active:bg-blue-700'
              }`}
            >
              <CheckCheck size={18} color={allChecked ? (isDark ? '#4ade80' : '#16a34a') : 'white'} />
              <Text className={`ml-2 font-medium ${
                allChecked
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-white'
              }`}>
                {allChecked ? '完成!' : '全部確認'}
              </Text>
            </Pressable>
          </HStack>
        </Box>
      )}
    </VStack>
  );
}
