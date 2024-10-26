import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

type InputProps = {
  label: string;
  placeholder: string;
  inputType?: TextInputProps["keyboardType"]; // default || email-address || numeric || phone-pad
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  inputType = "default",
}) => {
  return (
    <View className="space-y-2">
      <Text className="text-base text-gray-100 font-pmedium mb-3">{label}</Text>

      <View className="w-full h-[50px] leading-[56px] px-4 bg-black-100 rounded-xl border border-gray focus:border-black flex flex-row items-center">
        <TextInput
          className="w-full text-base"
          placeholderTextColor="#7B7B8B"
          placeholder={placeholder}
          keyboardType={inputType}
        />
      </View>
    </View>
  );
};

export default Input;
