import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../Conts/COLORS";
import Input from "../Components/Input";
import Button from "../Components/Button";
import SocialIcon from "../Components/SocialIcon";
import { ScrollView } from "react-native";
const Signup = ({navigation}) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView
    style={{ flex: 1, paddingTop: 5, backgroundColor: COLORS.backgrond }}
  >
    <ScrollView 
    showsVerticalScrollIndicator={false}
    >
    <View
      style={{
        justifyContent: "flex-start",
        marginHorizontal: 18,
        marginVertical: 15,
      }}
    >
      <Text style={{ color: COLORS.text, fontSize: 22 }}> Sign up</Text>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'center',marginTop:20, }}>
      <SocialIcon iconmane={"ios-logo-facebook"} />
      <SocialIcon iconmane={"logo-google"} />
    </View>
    <View>
    <Input
        value={name}
        onChangeText={(text) => setName(text)}
        keyboardType={"email-address"}
        title={"Name"}
        iconName={"person-circle-outline"}
        placeholder="Enter Your Name"
        required
      />
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
       <Input
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        iconName={"lock-closed-outline"}
        title={"Confirm Password"}
        placeholder="Confirm your Password"
        password
        required
      />
    </View>
    <View style={{ marginTop: 30 }}>
      <Button title={"Create Account"} disabled={!email || !password || !confirmPassword|| !name} />
    </View>
    <View style={{justifyContent: 'center',alignItems: 'center',marginVertical:10}}>
      <Text style={{ color: COLORS.placeholder, fontSize: 16 }}>Already have an account? <Text
      onPress={()=>navigation.navigate("Signin")}
      style={{fontSize:18,fontWeight:"bold",color: COLORS.text}}>Login</Text></Text>
    </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default Signup