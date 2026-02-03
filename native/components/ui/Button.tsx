import { Pressable, PressableProps, Text } from 'react-native';

interface ButtonProps extends PressableProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export function Button({
  className = '',
  variant = 'primary',
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'py-3 px-6 rounded-xl font-medium flex items-center justify-center';

  const variantStyles = {
    primary: disabled
      ? 'bg-gray-200 dark:bg-gray-700'
      : 'bg-blue-500 dark:bg-blue-600 active:bg-blue-600 dark:active:bg-blue-700',
    secondary: 'bg-gray-100 dark:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600',
    outline: 'border border-gray-300 dark:border-gray-600 active:bg-gray-100 dark:active:bg-gray-800',
    ghost: 'active:bg-gray-100 dark:active:bg-gray-800',
  };

  const textStyles = {
    primary: disabled ? 'text-gray-400 dark:text-gray-500' : 'text-white',
    secondary: 'text-gray-700 dark:text-gray-300',
    outline: 'text-gray-600 dark:text-gray-400',
    ghost: 'text-gray-600 dark:text-gray-400',
  };

  return (
    <Pressable
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      <Text className={`font-medium text-center ${textStyles[variant]}`}>
        {children}
      </Text>
    </Pressable>
  );
}
