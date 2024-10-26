import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";
import Button from "../@shared/Button";
import Input from "../@shared/Input";
import Title from "../@shared/Title";

const RegisterForm = () => {
  return (
    <View className="">
      <Link href="/" className="text-lg ">
        Retour
      </Link>
      <Title level="h1">Création d’une organisation</Title>

      <View className="flex-col gap-y-6 h-full mt-12">
        <Input label="Nom" placeholder="Nom" />
        <Input label="Email" placeholder="Email" inputType="email-address" />

        <Button handlePress={() => {}}>Créer</Button>
      </View>
    </View>
  );
};

export default RegisterForm;
