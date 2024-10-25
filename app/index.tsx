import RegisterForm from "@/components/auth/RegisterForm";
import React from "react";
import { SafeAreaView, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <View className="flex items-center justify-center mt-24">
        <View className="w-[90%]">
          <RegisterForm />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
