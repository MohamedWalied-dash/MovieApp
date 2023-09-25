import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { COLORS } from "../Conts/COLORS";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const screenWidth = Math.round(Dimensions.get("window").width);
const cardWidth = screenWidth;
const MovieCard = ({ name, image, rate }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: "column",
          width: 170,
          borderRadius: 39,
          marginHorizontal: 5,
          height: "auto",
        }}
      >
        <View>
          <Image
            style={{ width: 170, height: 200, borderRadius: 39 }}
            source={image}
          />
        </View>
        <BlurView
          tint="default"
          intensity={50}
          style={{
            justifyContent: "flex-start",
            flexDirection: "row",
            marginLeft: "6%",
            marginTop: -60,
            marginBottom: 20,
            borderRadius: 15,
            width: 150,
            height: 50,
            overflow: "hidden",
          }}
        >
          <View style={{ marginTop: 5, marginLeft: 10 }}>
            <Text style={{ fontSize: 14, color: "#fff" }}>{name}</Text>
            <Text style={{ fontSize: 14, color: "#fff" }}>
              <Ionicons
                style={{
                  marginLeft: 10 / 2,
                }}
                name="star"
                color={COLORS.Button}
                size={14}
              />{" "}
              {rate}
            </Text>
          </View>
          <View style={{ marginLeft: 20, marginTop: 10 }}>
            <AntDesign name="play" size={30} color={COLORS.Button} />
          </View>
        </BlurView>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
