import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../Conts/COLORS";

const SocialIcon = ({iconmane}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.placeholder,
        height: 70,
        width: "45%",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 8,
      }}
    >
      <Ionicons name={iconmane} size={25} color={COLORS.text} />
    </View>
  );
};

export default SocialIcon;
