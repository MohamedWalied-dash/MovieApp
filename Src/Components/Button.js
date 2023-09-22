import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { COLORS } from "../Conts/COLORS";

const Button = ({
  title,
  disabled,
  onPress = () => {},
  isLoading,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={isLoading ? null : onPress}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: "90%",
        backgroundColor: disabled
          ? COLORS.placeholder
          : isLoading
          ? COLORS.Button // You can define this color for loading state
          : COLORS.Button,
        marginVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginHorizontal: "5%",
      }}
      {...props}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <ActivityIndicator color={COLORS.text} size="small" />
      ) : (
        <Text style={{ color: COLORS.text, fontSize: 22 }}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
