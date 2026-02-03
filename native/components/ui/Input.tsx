import { TextInput, TextInputProps } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';

interface InputProps extends TextInputProps {
  className?: string;
}

export function Input({ className = '', style, ...props }: InputProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <TextInput
      className={`px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 ${className}`}
      placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
      style={style}
      {...props}
    />
  );
}
