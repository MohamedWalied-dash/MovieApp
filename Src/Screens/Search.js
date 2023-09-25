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

const Search = ({ search }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 5, backgroundColor: COLORS.backgrond }}
    >
      <ScrollView 
      showsVerticalScrollIndicator={false}
      >
        <Header name={"Wailed"} />
        <View
          style={{
            flexDirection: "row",
            padding: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 50,
              borderRadius: 20,
              flexDirection: "row",
              backgroundColor: "#E5E5E5",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                height: 40,
                backgroundColor: "transparent",
                borderBottomWidth: 0,
                fontSize: 20,
                color: "#000",
              }}
              placeholder="Search"
              placeholderTextColor={COLORS.black}
              //value={searchQuery}
            />
          </View>
          <View
            style={{
              width: 50,
              height: 50,
              marginLeft: 5,
              backgroundColor: COLORS.Button,
              borderRadius: 99,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {search ? (
              <Icon
                name="cancel"
                size={28}
                color={"white"}
                // onPress={clearSearch} // Trigger handleSearch when the search icon is clicked
              />
            ) : (
              <Icon
                name="search"
                size={28}
                color={"white"}
                // onPress={handleSearch} // Trigger handleSearch when the search icon is clicked
              />
            )}
          </View>
        </View>
        <View>
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
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
