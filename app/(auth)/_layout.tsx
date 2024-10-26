import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

const AuthLayout = () => {
  return (
    <>
      <StatusBar backgroundColor="#161622" style="light" />
      <View className="flex-1 mx-12 mt-12 ">
        <Stack>
          <Stack.Screen
            name="sign-in"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="sign-up"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </View>
    </>
  );
};

export default AuthLayout;
