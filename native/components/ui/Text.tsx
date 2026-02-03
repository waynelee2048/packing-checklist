import { Text as RNText, TextProps as RNTextProps } from 'react-native';

interface TextProps extends RNTextProps {
  className?: string;
}

export function Text({ className = '', style, ...props }: TextProps) {
  return <RNText className={`text-gray-800 dark:text-gray-200 ${className}`} style={style} {...props} />;
}

export function Heading({ className = '', ...props }: TextProps) {
  return <Text className={`text-lg font-bold text-gray-900 dark:text-gray-100 ${className}`} {...props} />;
}
