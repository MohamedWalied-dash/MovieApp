import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { COLORS } from "../Conts/COLORS";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SettingBar from "../Components/SettingBar";
const Profile = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 5, backgroundColor: COLORS.backgrond }}
    >
      <View
        style={{
          width: "80%",
          height: 160,
          marginHorizontal: "10%",
          marginTop: 20,
          flexDirection: "row",
        }}
      >
        <View style={{ padding: 5 }}>
          <Image
            source={require("../../assets/actors2.jpeg")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 999,
              marginVertical: 15,
            }}
          />
        </View>
        <View
          style={{
            borderRightWidth: 2,
            borderRightColor: COLORS.textinput,
            marginHorizontal: "5%",
            padding: 10,
            height: "80%",
            marginVertical: "10%",
          }}
        />
        <View style={{ padding: 5, marginVertical: "20%" }}>
          <Text style={{ color: COLORS.textinput, fontSize: 16 }}>Joined</Text>
          <Text style={{ color: COLORS.text, fontSize: 16 }}>2 mon ago</Text>
        </View>
      </View>
      <View style={{ padding: 25 }}>
        <Text style={{ color: COLORS.text, fontSize: 18 }}>Hoang Toddy</Text>
        <Text style={{ color: COLORS.textinput, fontSize: 14 }}>Trinh Huu</Text>
      </View>
      <SettingBar name={"My info"} iconName={"info"} />
      <SettingBar name={"Setting"} iconName={"settings"} />
      <SettingBar name={"policy"} iconName={"policy"} />
      <View
        style={{
          width: "35%",
          height: 50,
          backgroundColor: "gray",
          marginHorizontal: "5%",
          borderRadius: 999,
          flexDirection: "row",
          marginVertical: 30,
          padding: 10,
        }}
      >
        <AntDesign name="logout" size={24} color="red" />
        <View style={{ marginLeft: 8 }}>
          <Text style={{ color: COLORS.text, fontSize: 18 }}>Sign Out</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
