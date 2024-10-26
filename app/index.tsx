import Button from "@/components/@shared/Button";
import Title from "@/components/@shared/Title";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <View className="flex items-center justify-center mt-32">
        <Title level="h1">Touret Link</Title>
        <Text>Renvoyez vos tourets en un clic</Text>

        <Button handlePress={() => router.push("/sign-in")}>
          Rejoindre une organisation
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default App;
