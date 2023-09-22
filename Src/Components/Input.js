import { View, Text, TextInput } from "react-native";
import React from "react";
import { COLORS } from "../Conts/COLORS";
import { Ionicons } from "@expo/vector-icons";
const Input = ({ title, password, iconName, required, ...props }) => {
  const [hidePassword, setHidePassword] = React.useState(password);

  return (
    <View style={{ marginTop: 10 }}>
      <Text
        style={{
          color: COLORS.text,
          marginVertical: 10,
          fontSize: 17,
          marginLeft: 10,
        }}
      >
        {title} {required && <Text style={{ color: COLORS.Button }}>*</Text>}
      </Text>
      <View
        style={{
          height: 55,
          backgroundColor: "#353341",
          width: "95%",
          marginHorizontal: "2.5%",
          borderRadius: 10,
          paddingHorizontal: 5,
          flexDirection: "row",
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Ionicons
            name={iconName}
            style={{
              color: COLORS.placeholder,
              fontSize: 22,
              marginRight: 10,
              paddingHorizontal: 5,
            }}
          />
        </View>
        <TextInput
          placeholderTextColor={COLORS.placeholder}
          autoCorrect={false}
          secureTextEntry={hidePassword}
          style={{
            color: COLORS.text,
            fontSize: 18,
            textAlign: "auto",
            flex: 1,
          }}
          {...props}
        />
        {password && (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Ionicons
              onPress={() => setHidePassword(!hidePassword)}
              name={hidePassword ? "eye-outline" : "eye-off-outline"}
              style={{
                color: COLORS.placeholder,
                fontSize: 22,
                marginVertical: 5,
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Input;
