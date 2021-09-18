import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Recipe")}>
        <Text>Navigate to Recipe</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
