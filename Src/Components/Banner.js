import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { COLORS } from "../Conts/COLORS";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Banner = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{ height: 230, width: "95%", borderRadius: 39 }}
        source={require("../../assets/Splash.png")}
      />
      <View
        style={{
          position: "absolute",
          left: "10%",
          overflow: "hidden",
          bottom: "5%",
        }}
      >
        <Text style={{ fontSize: 14, color: COLORS.text }}>
          Captain America: Civil War{" "}
        </Text>
        <Text style={{ fontSize: 14, color: COLORS.text, marginVertical: 5 }}>
          {" "}
          <Ionicons
            style={{
              marginLeft: 10 / 2,
            }}
            name="star"
            color={COLORS.Button}
            size={10 * 1.7}
          />{" "}
          5
        </Text>
      </View>
      <View style={{ position: "absolute", right: "10%", bottom: "7.5%" }}>
        <AntDesign name="play" size={40} color={COLORS.Button} />
      </View>
    </View>
  );
};

export default Banner;
