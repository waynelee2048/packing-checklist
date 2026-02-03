import React, { useState } from 'react';
import { ScrollView, Pressable, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChevronLeft, Trash2, Archive } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useColorScheme } from '@/components/useColorScheme';
import { useData } from '@/contexts/DataContext';
import { iconOptions } from '@/utils/data';
import {
  VStack,
  HStack,
  Box,
  Text,
  Button,
  Input,
  Card,
  PressableCard,
} from '@/components/ui';

export default function ListsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { data, saveData } = useData();
  const [newListName, setNewListName] = useState('');
  const [newListIcon, setNewListIcon] = useState('📋');

  const iconColor = isDark ? '#9ca3af' : '#6b7280';

  const selectList = (listId: number) => {
    const newData = {
      ...data,
      activeListId: listId,
    };
    saveData(newData);
    router.push('/');
  };

  const addNewList = () => {
    if (!newListName.trim()) return;

    const newList = {
      id: Date.now(),
      name: newListName.trim(),
      icon: newListIcon,
      items: [] as number[],
      checkedItems: [] as number[],
    };

    const newData = {
      ...data,
      lists: [...data.lists, newList],
      activeListId: newList.id,
    };

    saveData(newData);
    setNewListName('');
    setNewListIcon('📋');
    router.push('/');
  };

  const deleteList = (listId: number) => {
    if (data.lists.length <= 1) return;

    Alert.alert('確認刪除', '確定刪除此清單？', [
      { text: '取消', style: 'cancel' },
      {
        text: '刪除',
        style: 'destructive',
        onPress: () => {
          const newLists = data.lists.filter((l) => l.id !== listId);
          const newData = {
            ...data,
            lists: newLists,
            activeListId:
              data.activeListId === listId ? newLists[0].id : data.activeListId,
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
            onPress={() => router.push('/')}
            className="w-10 h-10 items-center justify-center rounded-full active:bg-gray-100 dark:active:bg-gray-700"
          >
            <ChevronLeft size={24} color={iconColor} />
          </Pressable>
          <Text className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            我的清單
          </Text>
          <Pressable
            onPress={() => router.push('/library')}
            className="w-10 h-10 items-center justify-center rounded-full active:bg-gray-100 dark:active:bg-gray-700"
          >
            <Archive size={20} color={iconColor} />
          </Pressable>
        </HStack>
      </Box>

      {/* Lists */}
      <ScrollView className="flex-1 p-4">
        <VStack className="gap-2">
          {(data.lists || []).map((list) => {
            const itemCount = (list.items || []).length;
            const checkedCount = (list.checkedItems || []).length;
            const isActive = list.id === data.activeListId;

            return (
              <PressableCard
                key={list.id}
                onPress={() => selectList(list.id)}
                className={`p-4 ${isActive ? 'border-2 border-blue-400 dark:border-blue-500' : ''}`}
              >
                <HStack className="items-center">
                  <Text className="text-2xl mr-3">{list.icon}</Text>
                  <VStack className="flex-1">
                    <Text className="font-medium text-gray-800 dark:text-gray-200">
                      {list.name}
                    </Text>
                    <Text className="text-sm text-gray-400 dark:text-gray-500">
                      {checkedCount}/{itemCount} 已確認
                    </Text>
                  </VStack>
                  {data.lists.length > 1 && (
                    <Pressable
                      onPress={() => deleteList(list.id)}
                      className="p-2"
                    >
                      <Trash2 size={20} color={iconColor} />
                    </Pressable>
                  )}
                </HStack>
              </PressableCard>
            );
          })}
        </VStack>

        {/* Add new list */}
        <Card className="mt-4 p-4">
          <Text className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            新增清單
          </Text>
          <HStack className="flex-wrap gap-1 mb-3">
            {iconOptions.map((icon) => (
              <Pressable
                key={icon}
                onPress={() => setNewListIcon(icon)}
                className={`w-10 h-10 rounded-lg items-center justify-center ${
                  newListIcon === icon
                    ? 'bg-blue-100 dark:bg-blue-900'
                    : ''
                }`}
              >
                <Text className="text-xl">{icon}</Text>
              </Pressable>
            ))}
          </HStack>
          <HStack className="gap-2">
            <Input
              value={newListName}
              onChangeText={setNewListName}
              placeholder="清單名稱..."
              className="flex-1"
            />
            <Button onPress={addNewList} className="px-6">
              建立
            </Button>
          </HStack>
        </Card>

        <Box className="h-4" />
      </ScrollView>

      {/* Bottom: Library button */}
      <Box
        className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
        style={{ paddingBottom: insets.bottom + 16 }}
      >
        <Pressable
          onPress={() => router.push('/library')}
          className="py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl"
        >
          <Text className="text-gray-500 dark:text-gray-400 font-medium text-center">
            📚 管理物品庫
          </Text>
        </Pressable>
      </Box>
    </VStack>
  );
}
