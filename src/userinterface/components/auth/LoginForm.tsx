import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../@shared/Button";
import Input from "../@shared/Input";
import Title from "../@shared/Title";
import Typography from "../@shared/Typography";

const LoginForm = () => {
  return (
    <View>
      <Link href="/" className="text-lg ">
        Retour
      </Link>

      <Title level="h1">Rejoindre une organisation</Title>
      <Typography className="text-2xl mt-6">
        Entrez votre e-mail pour recevoir un lien de connexion
      </Typography>

      <View className="mt-12">
        <Input label="Votre email" placeholder="Email" />
        <Button className="mt-6" handlePress={() => {}}>
          Envoyer le lien
        </Button>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
