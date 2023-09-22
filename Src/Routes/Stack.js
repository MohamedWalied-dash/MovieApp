import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "../Screens/Home";
import Signin from "../Screens/Signin";
import Signup from "../Screens/Signup";
import ForgetPassword from "../Screens/ForgetPassword";
import Profile from "../Screens/Profile";
import Favorites from "../Screens/Favorites";
import MovieDetails from "../Screens/MovieDetails";
import Search from "../Screens/Search";
import Setting from "../Screens/Setting";
const Stacks = createStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator screenOptions={{ headerShown: false }}>
        <Stacks.Screen name="Signin" component={Signin} />
        <Stacks.Screen name="Signup" component={Signup} />
        <Stacks.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stacks.Screen name="Home" component={Home} />
        <Stacks.Screen name="Profile" component={Profile} />
        <Stacks.Screen name="Favorites" component={Favorites} />
        <Stacks.Screen name="MovieDetails" component={MovieDetails} />
        <Stacks.Screen name="Search" component={Search} />
        <Stacks.Screen name="Setting" component={Setting} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
