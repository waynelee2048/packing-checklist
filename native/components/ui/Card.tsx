import { Pressable, PressableProps, View, ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  className?: string;
}

export function Card({ className = '', style, ...props }: CardProps) {
  return (
    <View
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm ${className}`}
      style={style}
      {...props}
    />
  );
}

interface PressableCardProps extends PressableProps {
  className?: string;
  children: React.ReactNode;
}

export function PressableCard({ className = '', children, ...props }: PressableCardProps) {
  return (
    <Pressable
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm active:bg-gray-50 dark:active:bg-gray-700 ${className}`}
      {...props}
    >
      {children}
    </Pressable>
  );
}
