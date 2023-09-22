import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../Conts/COLORS";
import Input from "../Components/Input";
import Button from "../Components/Button";
import SocialIcon from "../Components/SocialIcon";
const Signin = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 5, backgroundColor: COLORS.backgrond }}
    >
      <View
        style={{
          justifyContent: "flex-start",
          marginHorizontal: 18,
          marginVertical: 15,
        }}
      >
        <Text style={{ color: COLORS.text, fontSize: 22 }}>Login</Text>
      </View>
      <View style={{ justifyContent: "center", marginHorizontal: 25 }}>
        <Text style={{ color: COLORS.text, fontSize: 16 }}>
          Log in whit one of following options
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <SocialIcon iconmane={"ios-logo-facebook"} />
        <SocialIcon iconmane={"logo-google"} />
      </View>
      <View>
        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType={"email-address"}
          title={"Email"}
          iconName={"mail"}
          placeholder="Enter Your Email"
          required
        />
        <Input
          value={password}
          onChangeText={(text) => setPassword(text)}
          iconName={"lock-closed-outline"}
          title={"Password"}
          placeholder="Enter Your Password"
          password
          required
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <Button title={"Log in"} disabled={!email || !password} />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Text style={{ color: COLORS.placeholder, fontSize: 16 }}>
          Don't have an account?{" "}
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={{ fontSize: 18, fontWeight: "bold", color: COLORS.text }}
          >
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
