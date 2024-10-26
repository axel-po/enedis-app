import React from "react";
import { Text, View } from "react-native";

type TitleProps = {
  level?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({ level = "h2", children }) => {
  const titleStyles = {
    h1: "text-5xl font-bold text-gray-900",
    h2: "text-3xl font-semibold text-gray-800",
    h3: "text-2xl font-medium text-gray-700",
    h4: "text-xl font-normal text-gray-600",
  };

  return (
    <View>
      <Text className={titleStyles[level]}>{children}</Text>
    </View>
  );
};

export default Title;
