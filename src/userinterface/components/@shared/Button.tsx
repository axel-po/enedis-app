import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-primary rounded-full h-[40px] leading-[40px] max-h-[40px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-black font-bold text-lg ${textStyles}`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
