import clsx from "clsx";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  handlePress: () => void;
  className?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  handlePress,
  className,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={clsx(
        "block bg-primary rounded-full h-[50px] leading-[50px] max-h-[40px] justify-center items-center",
        className,
        isLoading && "opacity-50"
      )}
      disabled={isLoading}
    >
      <Text className={clsx("text-black font-bold text-lg", textStyles)}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
