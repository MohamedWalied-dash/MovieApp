import React from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Dimensions, Platform } from "react-native";
const Tab = createBottomTabNavigator();
import { Ionicons } from "@expo/vector-icons";
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Favorites from "../Screens/Favorites";
import Profile from "../Screens/Profile";
import { COLORS } from "../Conts/COLORS";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
const Tabs = () => {
  const tabScreens = [
    {
      name: "Home",
      component: Home,
      icon: ({ color, size }) => (
        <Octicons name="home" size={size} color={color} />
      ),
    },
    {
      name: "Search",
      component: Search,
      icon: ({ color, size }) => (
        <AntDesign name="search1" size={size} color={color} />
      ),
    },
    {
      name: "Favorites",
      component: Favorites,
      icon: ({ color, size }) => (
        <Ionicons name="ios-bookmark-outline" size={size} color={color} />
      ),
    },
    {
      name: "Profile",
      component: Profile,
      icon: ({ color, size }) => (
        <Ionicons name="ios-person-outline" size={size} color={color} />
      ),
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 90 : 55,
          width: "100%",
          shadowColor: "transparent",
          elevation: 4,
          backgroundColor: COLORS.backgrond,
          borderTopColor: "transparent", // use borderTopColor instead of borderColor for removing the white line in iOS
          overflow: "hidden",
          padding: 5,
          borderBottomColor: "transparent",
        },
        tabBarInactiveTintColor: COLORS.text,
        tabBarActiveTintColor: COLORS.text,
      }}
    >
      {tabScreens.map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: screen.icon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Tabs;
