import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { COLORS } from "../Conts/COLORS";
import Header from "../Components/Header";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TextInput } from "react-native";
import FavoriteCard from "../Components/FavoriteCard";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";

const data = [
  {
    image: require("../../assets/download.jpeg"),
    name: "Harry Potter 1",
    type: "Eng | Fiction | 2h10m",
    rate: "4.5",
    id: 1,
  },
  {
    image: require("../../assets/download.jpeg"),
    name: "Harry Potter 2",
    type: "Eng | Fiction | 2h10m",
    rate: "4.5",
    id: 2,
  },
  {
    image: require("../../assets/download.jpeg"),
    name: "Harry Potter 3",
    type: "Eng | Fiction | 2h10m",
    rate: "4.5",
    id: 3,
  },
  {
    image: require("../../assets/download.jpeg"),
    name: "Harry Potter 4",
    type: "Eng | Fiction | 2h10m",
    rate: "4.5",
    id: 4,
  },
  {
    image: require("../../assets/download.jpeg"),
    name: "Harry Potter 5",
    type: "Eng | Fiction | 2h10m",
    rate: "4.5",
    id: 5,
  },
];

const Favorites = ({ search }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 5, backgroundColor: COLORS.backgrond }}
    >
      <View style={{ padding: 10 }}>
        <Text style={{ color: COLORS.text, fontSize: 22, fontWeight: "bold" }}>
          All
        </Text>
      </View>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FavoriteCard
            name={item.name}
            image={item.image}
            rate={item.rate}
            type={item.type}
            favorite
          />
        )}
      />
      
    </SafeAreaView>
  );
};

export default Favorites;
