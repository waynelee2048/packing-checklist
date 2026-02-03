import { Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { Check } from 'lucide-react-native';
import { useColorScheme } from '@/components/useColorScheme';

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { box: 20, icon: 14, borderWidth: 1.5 },
  md: { box: 24, icon: 16, borderWidth: 2 },
  lg: { box: 28, icon: 18, borderWidth: 2 },
};

export function Checkbox({ checked, onPress, size = 'md' }: CheckboxProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { box, icon, borderWidth } = sizes[size];

  const checkedColor = isDark ? '#60a5fa' : '#3b82f6';
  const uncheckedBorder = isDark ? '#4b5563' : '#d1d5db';

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withSpring(checked ? checkedColor : 'transparent', { damping: 15 }),
      borderColor: withSpring(checked ? checkedColor : uncheckedBorder, { damping: 15 }),
    };
  });

  const animatedCheckStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(checked ? 1 : 0, { damping: 15 }) }],
      opacity: withSpring(checked ? 1 : 0, { damping: 15 }),
    };
  });

  return (
    <Pressable onPress={onPress} hitSlop={8}>
      <Animated.View
        style={[
          {
            width: box,
            height: box,
            borderWidth,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
          },
          animatedContainerStyle,
        ]}
      >
        <Animated.View style={animatedCheckStyle}>
          <Check size={icon} color="white" strokeWidth={3} />
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
}
