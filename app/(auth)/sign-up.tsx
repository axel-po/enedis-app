import RegisterForm from "@/components/auth/RegisterForm";
import React from "react";
import { StyleSheet, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <View className="w-[90%] h-screen">
        <RegisterForm />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
