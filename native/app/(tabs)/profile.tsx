import React from 'react';
import { ScrollView, Pressable, Image, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { User, LogOut, Cloud, CloudOff, RefreshCw } from 'lucide-react-native';
import { useColorScheme } from '@/components/useColorScheme';
import { useData } from '@/contexts/DataContext';
import { useGoogleAuth } from '@/hooks/useGoogleAuth';
import {
  VStack,
  HStack,
  Box,
  Text,
  Heading,
  Button,
  Card,
  Center,
} from '@/components/ui';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { user, syncStatus, handleLogout } = useData();
  const { signIn, isLoading, isReady } = useGoogleAuth();

  const iconColor = isDark ? '#9ca3af' : '#6b7280';

  const confirmLogout = () => {
    Alert.alert('確認登出', '登出後將無法同步資料到雲端', [
      { text: '取消', style: 'cancel' },
      {
        text: '登出',
        style: 'destructive',
        onPress: handleLogout,
      },
    ]);
  };

  const getSyncStatusInfo = () => {
    switch (syncStatus) {
      case 'synced':
        return { icon: Cloud, text: '已同步', color: '#22c55e' };
      case 'syncing':
        return { icon: RefreshCw, text: '同步中...', color: '#f59e0b' };
      case 'error':
        return { icon: CloudOff, text: '同步錯誤', color: '#ef4444' };
      default:
        return { icon: CloudOff, text: '離線模式', color: iconColor };
    }
  };

  const statusInfo = getSyncStatusInfo();
  const StatusIcon = statusInfo.icon;

  return (
    <VStack className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Box
        className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
        style={{ paddingTop: insets.top }}
      >
        <HStack className="px-4 py-3 items-center justify-center">
          <Text className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            設定
          </Text>
        </HStack>
      </Box>

      <ScrollView className="flex-1 p-4">
        {/* User Section */}
        <Card className="p-6 mb-4">
          {user ? (
            <VStack className="items-center">
              {user.photoURL ? (
                <Image
                  source={{ uri: user.photoURL }}
                  className="w-20 h-20 rounded-full mb-3"
                />
              ) : (
                <Center className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 mb-3">
                  <User size={40} color={iconColor} />
                </Center>
              )}
              <Heading className="mb-1">{user.displayName || '使用者'}</Heading>
              <Text className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {user.email}
              </Text>

              {/* Sync Status */}
              <HStack className="items-center mb-4 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <StatusIcon size={16} color={statusInfo.color} />
                <Text className="text-sm ml-2" style={{ color: statusInfo.color }}>
                  {statusInfo.text}
                </Text>
              </HStack>

              <Button
                variant="outline"
                onPress={confirmLogout}
                className="w-full"
              >
                <HStack className="items-center justify-center">
                  <LogOut size={18} color={iconColor} />
                  <Text className="ml-2 text-gray-600 dark:text-gray-400 font-medium">
                    登出
                  </Text>
                </HStack>
              </Button>
            </VStack>
          ) : (
            <VStack className="items-center">
              <Center className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 mb-3">
                <User size={40} color={iconColor} />
              </Center>
              <Heading className="mb-1">未登入</Heading>
              <Text className="text-sm text-gray-500 dark:text-gray-400 text-center mb-4">
                登入 Google 帳號以同步資料到雲端
              </Text>
              <Button
                onPress={signIn}
                disabled={!isReady || isLoading}
                className="w-full"
              >
                {isLoading ? '登入中...' : '使用 Google 登入'}
              </Button>
            </VStack>
          )}
        </Card>

        {/* Info Section */}
        <Card className="p-4">
          <Text className="text-sm text-gray-500 dark:text-gray-400 mb-3">關於</Text>
          <VStack className="gap-3">
            <HStack className="justify-between">
              <Text className="text-gray-600 dark:text-gray-400">版本</Text>
              <Text className="text-gray-400 dark:text-gray-500">1.0.0</Text>
            </HStack>
            <HStack className="justify-between">
              <Text className="text-gray-600 dark:text-gray-400">資料儲存</Text>
              <Text className="text-gray-400 dark:text-gray-500">
                {user ? '雲端同步' : '本機儲存'}
              </Text>
            </HStack>
          </VStack>
        </Card>

        <Box className="h-4" />
      </ScrollView>
    </VStack>
  );
}
