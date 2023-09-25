import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../Components/Header";
import { COLORS } from "../Conts/COLORS";
import Banner from "../Components/Banner";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import MovieCard from "../Components/MovieCard";
import { Entypo } from "@expo/vector-icons";
const MovieData = [
  {
    name: "Harry Potter 1",
    id: 1,
    image: require("../../assets/download.jpeg"),
    rate: 5,
  },
  {
    name: "Harry Potter 2",
    id: 2,
    image: require("../../assets/download.jpeg"),
    rate: 5,
  },
  {
    name: "Harry Potter 3",
    id: 3,
    image: require("../../assets/download.jpeg"),
    rate: 5,
  },
  {
    name: "Harry Potter 4",
    id: 4,
    image: require("../../assets/download.jpeg"),
    rate: 5,
  },
  {
    name: "Harry Potter 5",
    id: 5,
    image: require("../../assets/download.jpeg"),
    rate: 5,
  },
];
const Home = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 5, backgroundColor: COLORS.backgrond }}
    >
      <ScrollView>
        <Header name={"Walied"} visable />

        <Banner />

        <View
          style={{
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, color: COLORS.text }}>Popular</Text>
          <Text></Text>
          <TouchableOpacity>
            <Entypo
              name="dots-three-horizontal"
              size={24}
              color={COLORS.Button}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={MovieData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieCard name={item.name} image={item.image} rate={item.rate} />
          )}
        />

        <View
          style={{
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, color: COLORS.text }}>You may like</Text>
          <Text></Text>
          <TouchableOpacity>
            <Entypo
              name="dots-three-horizontal"
              size={24}
              color={COLORS.Button}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={MovieData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieCard name={item.name} image={item.image} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
