import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { COLORS } from "../Conts/COLORS";

const FavoriteCard = ({ image, name, rate, type,subtitle,time,favorite }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
      }}
    >
      <View
        style={{
          width: "92%",
          height: 125,
          backgroundColor: "#62606b",
          marginHorizontal: "4%",
          borderRadius: 22,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginHorizontal: 2,
            width: "40%",
            marginVertical: "1.5%",
          }}
        >
          <Image
            style={{ height: 115, width: "100%", borderRadius: 17 }}
            source={image}
          />
        </View>
        <View style={{ width: "60%", padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 20,
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>{name}</Text>
            <Ionicons
              style={{
                marginTop: 3,
              }}
              name={favorite?"backspace":"bookmark"}
              color={COLORS.text}
              size={favorite?25:20}
            />
          </View>
          <Text style={{ fontSize: 14, color: "gray", marginVertical: 10 }}>
            {type}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 20,
            }}
          >
            <BlurView
              tint="default"
              intensity={100}
              style={{ width: 50, overflow: "hidden", borderRadius: 20 }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  marginTop: 4,
                  marginLeft: 2,
                }}
              >
                {" "}
                <Ionicons
                  style={{
                    marginLeft: 10 / 2,
                  }}
                  name="star"
                  color={COLORS.Button}
                  size={15}
                />{" "}
                {rate}
              </Text>
            </BlurView>
            <AntDesign name="play" size={30} color={COLORS.text} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FavoriteCard;
