import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MenuItem = ({ item }) => {
  // console.log(item)
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Menu", {
            id: item.id,
            name: item.name,
            image: item.image,
            rating: item.rating,
            time: item.time,
            adress: item.adress,
            cost_for_two: item.cost_for_two,
            cuisines: item.cuisines,
            menu: item.menu,
            distance: item.distance,
          })
        }
        style={{ flexDirection: "row" }}
      >
        <View style={{ marginTop: 12 }}>
          <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            source={{ uri: item.image }}
            style={{
              aspectRatio: 8 / 9,
              height: 150,
              margin: 10,
            }}
          >
            <AntDesign
              name="heart"
              size={24}
              color="red"
              style={{
                position: "absolute",
                top: 10,
                right: 10,
              }}
            />
          </ImageBackground>
        </View>

        <View style={{ marginLeft: 10 }}>
          <Text style={{ marginTop: 26, fontWeight: "bold", fontSize: 18 }}>
            {item.name}
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 1, marginTop: 4 }}>
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 5 }}>
              {item.rating}
            </Text>
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "350" }}>
              {item.time} mins
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
              fontWeight: "350",
              marginTop: 6,
            }}
          >
            {item.adress}
          </Text>

          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
          >
            <View
              style={{
                backgroundColor: "#FFB6C1",
                width: 22,
                height: 22,
                borderRadius: 11,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                ₹
              </Text>
            </View>

            <Text
              style={{
                marginTop: 3,
                marginLeft: 4,
                fontSize: 19,
                fontWeight: "800",
              }}
            >
              {item.cost_for_two}
            </Text>
            <Text style={{ fontSize: 17, marginLeft: 6, marginTop: 4 }}>
              for two
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="delivery-dining" size={24} color="black" />
            <Text style={{ fontSize: 16, marginLeft: 6 }}>FREE DELIVERY</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
