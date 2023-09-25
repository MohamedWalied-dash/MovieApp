import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../Conts/COLORS";

const Header = ({name , visable}) => {
  return (
    <>
    {visable===true &&
    <View
    style={{
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      width: "100%",
      padding: 15,
    }}
  >
    <TouchableOpacity>
      <Ionicons name="menu" size={30} color={COLORS.placeholder} />
    </TouchableOpacity>

    <View>
      <Text style={{ color: COLORS.text, fontSize: 22, fontWeight: "600" }}>
        <Text
          style={{
            color: COLORS.Button,
            fontSize: 22,
          }}
        >
          M
        </Text>
        ovie
      </Text>
    </View>
    <TouchableOpacity>
      <Ionicons name="log-out" size={30} color={COLORS.placeholder} />
    </TouchableOpacity>
  </View>}
     <View style={{ padding: 12 }}>
     <Text style={{ fontSize: 20, color: COLORS.text }}>Hi, {name}</Text>
   </View>
   </>
  );
};

export default Header;
