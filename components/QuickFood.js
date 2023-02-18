import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import quickfood from "../data/quickfood";
import { MaterialIcons } from "@expo/vector-icons";

const QuickFood = () => {
  const data = quickfood;
  return (
    <View style={{ marginTop: 1, marginLeft: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 21, marginLeft: 8 }}>
        Get It Quickly
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator>
        {data.map((item, index) => (
          <Pressable key={index}>
            <ImageBackground
              imageStyle={{ borderRadius: 7 }}
              source={{ uri: item.image }}
              style={{ aspectRatio: 5 / 6, height: 170, margin: 10 }}
            >
              <Text
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  fontSize: 32,
                  fontWeight: "900",
                  color: "white",
                }}
              >
                {item.offer} OFF
              </Text>
            </ImageBackground>
            <Text style={{ marginLeft: 12, fontSize: 19, fontWeight: "500" }}>
              {item.name}
            </Text>
            <View
              style={{ flexDirection: "row", marginLeft: 10, marginTop: 4 }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                {item.rating}
              </Text>
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "350" }}>
                {item.time} mins
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default QuickFood;

const styles = StyleSheet.create({});
