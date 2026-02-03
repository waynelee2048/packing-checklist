import { View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface ProgressProps {
  value: number;
  className?: string;
}

export function Progress({ value, className = '' }: ProgressProps) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(`${Math.min(100, Math.max(0, value))}%`, { duration: 300 }),
    };
  });

  return (
    <View className={`h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${className}`}>
      <Animated.View
        className="h-full bg-blue-500 dark:bg-blue-400 rounded-full"
        style={animatedStyle}
      />
    </View>
  );
}
