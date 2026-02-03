import React from 'react';
import { Modal, Pressable, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function BottomSheet({ visible, onClose, children }: BottomSheetProps) {
  const insets = useSafeAreaInsets();

  const animatedBackdropStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(visible ? 1 : 0, { duration: 200 }),
    };
  });

  const animatedSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(visible ? 0 : 300, { duration: 250 }),
        },
      ],
    };
  });

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <Animated.View
          className="absolute inset-0 bg-black/50"
          style={animatedBackdropStyle}
        >
          <Pressable className="flex-1" onPress={onClose} />
        </Animated.View>
        <Animated.View
          className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-2xl"
          style={[animatedSheetStyle, { paddingBottom: insets.bottom }]}
        >
          <View className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full self-center mt-3 mb-2" />
          <View className="p-6">{children}</View>
        </Animated.View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
