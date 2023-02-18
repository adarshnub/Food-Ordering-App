import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import { Ionicons } from "@expo/vector-icons";
import hotels from "../data/hotels";
import MenuItem from "../components/MenuItem";

const HomePage = () => {
    const data = hotels;
  return (
    <ScrollView style={{ marginTop: 50 }}>
      {/* serach bar */}
      <View
        style={{
          flexDirection: "row",
          height: 48,
          paddingLeft: 6,
          paddingRight: 6,
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          padding: 4,
          margin: 10,
          marginTop: 40,
          borderColor: "#C0c0c0",
          borderRadius: 7,
        }}
      >
        <TextInput placeholder="Search for Restaurant" />
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>

      {/* image slider component */}
      <Carousel />

      {/* food items type */}
      <FoodTypes />

      {/* Quick foods component */}
      <QuickFood />

      {/* Filter buttons */}
      <View style={{ flexDirection: "row", margin: 10 }}>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            justifyContent: "space-between",
            borderRadius: 20,
            padding: 10,
          }}
        >
          <Text>Filter</Text>
          <Ionicons
            name="filter"
            size={24}
            color="black"
            style={{ marginLeft: 6 }}
          />
        </Pressable>

        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            justifyContent: "center",
            borderRadius: 20,
            padding: 10,
          }}
        >
          <Text>Sort By Rating</Text>
        </Pressable>

        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            justifyContent: "center",
            borderRadius: 20,
            padding: 10,
          }}
        >
          <Text>Sort By Price</Text>
        </Pressable>
      </View>

      {/* Menu compponent */}
      {data.map((item,index)=>(
        <MenuItem key={index} item={item}/>
      ))}
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
