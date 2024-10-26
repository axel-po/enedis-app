import clsx from "clsx";
import React from "react";
import { Text } from "react-native";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
};

const Typography = ({ children, className }: TypographyProps) => {
  return <Text className={clsx("", className)}>{children}</Text>;
};

export default Typography;
