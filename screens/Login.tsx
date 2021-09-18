import React from "react";
import { CustomButton } from "../components";
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

  const renderDetail = () => {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text
          style={{
            marginTop: SIZES.radius,
            width: "70%",
            color: COLORS.gray,
            ...FONTS.body3,
          }}
        >
          Discover More Than 1200 food recipes in yours hands and cooking it
          Easily!
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <CustomButton
            buttonText="Login"
            colors={[COLORS.darkGreen, COLORS.lime]}
            onPress={() => navigation.navigate("home")}
          />
        </View>
      </View>
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

      {renderDetail()}
    </View>
  );
};

export default Login;
