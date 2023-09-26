import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { COLORS } from "../Conts/COLORS";
import { Ionicons } from "@expo/vector-icons";
import Banner from "../Components/Banner";
import { FlatList } from "react-native";
import { Image } from "react-native";
import MovieCard from "../Components/MovieCard";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
const Cast = [
  {
    image: require("../../assets/actors1.jpeg"),
    type: "Actor",
    name: "Samuel L. Jackson",
  },
  {
    image: require("../../assets/actors1.jpeg"),
    type: "Actor",
    name: "Chris Evans",
  },
  {
    image: require("../../assets/actors2.jpeg"),
    type: "Actor",
    name: "Chris Evans",
  },
  {
    image: require("../../assets/actors2.jpeg"),
    type: "Actor",
    name: "Chris Evans",
  },
];
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
const MovieDetails = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 5, backgroundColor: COLORS.backgrond }}
    >
      <ScrollView>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            padding: 10,
          }}
        >
          <Ionicons name="arrow-back" size={25} color="white" />
          <Text></Text>
          <Ionicons name="ios-bookmark-outline" size={25} color={"white"} />
        </View>
        <Banner />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text
            style={{ color: COLORS.text, fontSize: 18, fontWeight: "bold" }}
          >
            Captain America: Civil War
          </Text>
          <Text
            style={{
              color: COLORS.placeholder,
              fontSize: 14,
              fontWeight: "light",
            }}
          >
            Eng | Action | 2h10m
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#4F4F4F",
            width: "90%",
            marginHorizontal: "5%",
            padding: 10,
          }}
        />
        <View style={{ padding: 15 }}>
          <Text style={{ color: COLORS.text, fontSize: 16 }}>Story line</Text>
          <Text
            style={{
              color: "#A5A5A5",
              fontSize: 14,
              lineHeight: 15,
              marginTop: 5,
            }}
          >
            Political involvement in the Avengers' affairs causes a rift between
            Captain America and Iron Man. With many people fearing the actions
            of super heroes, the government decides to push for the Hero
            Registration Act, a law that limits a hero's actions. This results
            in a division in The Avengers.
          </Text>
        </View>

        <View style={{ padding: 15 }}>
          <Text style={{ color: COLORS.text, fontSize: 16 }}>Star cast</Text>
          <FlatList
            data={Cast}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{}}>
                  <Image
                    style={{ width: 60, height: 60, borderRadius: 999 }}
                    source={item.image}
                  />
                </View>
                <View style={{ padding: 5, marginLeft: 5 }}>
                  <Text style={{ color: COLORS.placeholder, fontSize: 12 }}>
                    {item.type}
                  </Text>
                  <Text style={{ color: COLORS.text, fontSize: 13 }}>
                    {item.name}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 14, color: COLORS.text }}>Recommended</Text>
          <Text></Text>
          <Text></Text>
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

        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetails;
