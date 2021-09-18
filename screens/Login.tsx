import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SIZES, FONTS, images } from "../constants";

const Login = ({ navigation }: { navigation: any }) => {
  const renderHeader = () => {
    return (
      <>
        <View
          style={{
            height: SIZES.height > 700 ? "65%" : "60%",
          }}
        >
          <ImageBackground
            source={images.loginBackground}
            style={{
              flex: 1,
              justifyContent: "flex-end",
            }}
            resizeMode="cover"
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={[COLORS.transparent, COLORS.black]}
              style={{
                height: 200,
                justifyContent: "flex-end",
                paddingHorizontal: SIZES.padding,
              }}
            >
              <Text
                style={{
                  width: "80%",
                  color: COLORS.white,
                  ...FONTS.largeTitle,
                  lineHeight: 45,
                }}
              >
                Cooking A Delicious Food Easily
              </Text>
            </LinearGradient>
          </ImageBackground>
        </View>
      </>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      {renderHeader()}
    </View>
  );
};

export default Login;
