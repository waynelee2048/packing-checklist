import React, { useState } from 'react';
import { Pressable, View, ScrollView, Modal } from 'react-native';
import { ChevronDown, Check } from 'lucide-react-native';
import { useColorScheme } from '@/components/useColorScheme';
import { Text } from './Text';

interface SelectProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function Select({
  value,
  options,
  onChange,
  placeholder = '請選擇...',
  className = '',
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const iconColor = isDark ? '#6b7280' : '#9ca3af';
  const checkColor = isDark ? '#60a5fa' : '#3b82f6';

  return (
    <>
      <Pressable
        onPress={() => setIsOpen(true)}
        className={`flex-row items-center justify-between px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 ${className}`}
      >
        <Text className={value ? 'text-gray-800 dark:text-gray-200' : 'text-gray-400 dark:text-gray-500'}>
          {value || placeholder}
        </Text>
        <ChevronDown size={20} color={iconColor} />
      </Pressable>

      <Modal visible={isOpen} transparent animationType="fade" onRequestClose={() => setIsOpen(false)}>
        <Pressable
          className="flex-1 bg-black/50 justify-end"
          onPress={() => setIsOpen(false)}
        >
          <View className="bg-white dark:bg-gray-800 rounded-t-2xl max-h-[60%]">
            <View className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full self-center mt-3 mb-2" />
            <ScrollView className="px-4 pb-8">
              {options.map((option) => (
                <Pressable
                  key={option}
                  onPress={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`flex-row items-center justify-between py-4 border-b border-gray-100 dark:border-gray-700 ${
                    option === value ? 'bg-gray-50 dark:bg-gray-700' : ''
                  }`}
                >
                  <Text className={option === value ? 'font-medium' : ''}>
                    {option}
                  </Text>
                  {option === value && <Check size={20} color={checkColor} />}
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    </>
  );
}
