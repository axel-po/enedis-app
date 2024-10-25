import React from "react";
import { View } from "react-native";
import Input from "../@shared/Input";
import Title from "../@shared/Title";

const RegisterForm = () => {
  return (
    <View className="flex">
      <Title level="h1">Création d’une organisation</Title>

      <View className="flex-col space-y-4 h-full mt-12">
        <Input label="Nom" placeholder="Nom" />
        <Input label="Email" placeholder="Email" inputType="email-address" />
      </View>
    </View>
  );
};

export default RegisterForm;
