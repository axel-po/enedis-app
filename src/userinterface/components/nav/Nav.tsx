import React from "react";
import { Image, View } from "react-native";
import { images } from "src/constants";

const Nav = () => {
  return (
    <View className="border border-gray">
      <View className="flex items-center justify-center">
        <Image
          className="w-[180px] h-[85px]"
          resizeMode="contain"
          source={images.logo}
        />
      </View>
    </View>
  );
};

export default Nav;
