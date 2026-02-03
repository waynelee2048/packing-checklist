import { View, ViewProps } from 'react-native';

interface BoxProps extends ViewProps {
  className?: string;
}

export function Box({ className = '', style, ...props }: BoxProps) {
  return <View className={className} style={style} {...props} />;
}

export function VStack({ className = '', ...props }: BoxProps) {
  return <Box className={`flex flex-col ${className}`} {...props} />;
}

export function HStack({ className = '', ...props }: BoxProps) {
  return <Box className={`flex flex-row ${className}`} {...props} />;
}

export function Center({ className = '', ...props }: BoxProps) {
  return <Box className={`flex items-center justify-center ${className}`} {...props} />;
}
