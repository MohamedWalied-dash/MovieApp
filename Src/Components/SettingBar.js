import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../Conts/COLORS";
import { MaterialIcons } from "@expo/vector-icons";
const SettingBar = ({ name, iconName }) => {
  return (
    <View style={{ marginTop: 40 }}>
      <View
        style={{
          width: "90%",
          height: 50,
          backgroundColor: COLORS.placeholder,
          marginHorizontal: "5%",
          borderRadius: 999,
          flexDirection: "row",
          padding: 8,
        }}
      >
        <View style={{ marginLeft: 5 }}>
          <MaterialIcons name={iconName} size={35} color="white" />
        </View>
        <View style={{ padding: 5, marginHorizontal: 15 }}>
          <Text style={{ color: COLORS.text, fontSize: 18 }}>{name}</Text>
        </View>
        <View style={{ marginLeft: 135 }}>
          <Ionicons name="chevron-forward" size={35} color="white" />
        </View>
      </View>
    </View>
  );
};

export default SettingBar;
