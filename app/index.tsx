import Button from "@/components/@shared/Button";
import Title from "@/components/@shared/Title";
import Typography from "@/components/@shared/Typography";
import { Link, router } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <View className="w-[90%] mx-auto mt-32">
        <Title level="h1">Touret Link</Title>
        <Typography className="text-xl">
          Renvoyez vos tourets en un clic
        </Typography>

        <Button className="mt-12" handlePress={() => router.push("/sign-in")}>
          Rejoindre une organisation
        </Button>

        <Typography className="mt-24">
          Pour créer une organisation,{" "}
          <Link className="text-secondary font-bold" href="/sign-up">
            cliquez ici
          </Link>{" "}
        </Typography>
      </View>
    </SafeAreaView>
  );
};

export default App;
