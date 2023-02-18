import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import FoodItem from "../components/FoodItem";
import Model from "react-native-modal";
import { useSelector } from "react-redux";

const MenuScreen = () => {
  const cart = useSelector((state)=>state.cart.cart);
  console.log(cart);
  const route = useRoute();
  const navigation = useNavigation();
  //console.log(route.params);
  const [menu, setMenu] = useState([]);
  const [modelVisible, setModelVisible] = useState(false);
  useEffect(() => {
    const fetchMenu = () => {
      setMenu(route.params.menu);
    };

    fetchMenu();
  }, []);
  const toggleModel = () => {
    setModelVisible(!modelVisible);
  };
  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        <View
          style={{
            height: 300,
            backgroundColor: "#B0C4DE",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={28}
              color="black"
              style={{ padding: 16 }}
            />
            <View style={{ flexDirection: "row", padding: 16 }}>
              <Feather name="search" size={24} color="black" style={{}} />
              <Text style={{ marginLeft: 10, fontWeight: "700", fontSize: 16 }}>
                Search
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "white",
              height: 210,
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              marginVertical: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "900", marginLeft: 10 }}>
                {route.params.name}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo
                  name="share"
                  size={24}
                  color="black"
                  style={{ marginHorizontal: 20 }}
                />
                <AntDesign name="hearto" size={24} color="black" />
              </View>
            </View>
            <View
              style={{ flexDirection: "row", marginLeft: 10, marginTop: 4 }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 5 }}>
                {route.params.rating}
              </Text>
              <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: "350" }}>
                {route.params.time} mins
              </Text>
            </View>

            <Text
              style={{
                color: "gray",
                marginLeft: 10,
                fontSize: 18,
                marginTop: 8,
              }}
            >
              {route.params.cuisines}
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
                marginTop: 4,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "900" }}>Outlet</Text>
              <Text
                style={{
                  color: "gray",
                  marginLeft: 10,
                  fontSize: 18,
                  marginLeft: 22,
                }}
              >
                {route.params.adress}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
                marginTop: 4,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "900" }}>
                {route.params.distance} mins
              </Text>
              <Text style={{ color: "gray", marginLeft: 10, fontSize: 18 }}>
                Home
              </Text>
            </View>

            <Text>______________________________________________________</Text>

            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="delivery-dining" size={30} color="orange" />
              <Text style={{ color: "gray", marginLeft: 10, fontSize: 18 }}>
                0-3 Kms |
              </Text>
              <Text style={{ marginLeft: 10, fontSize: 17 }}>
                35 Delivery Fee will apply
              </Text>
            </View>
          </View>
        </View>

        {/* Menu for each selected hotel */}
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            fontWeight: "800",
            marginTop: 10,
            color: "gray",
          }}
        >
          MENU
        </Text>
        <Text
          style={{
            borderColor: "gray",
            borderWidth: 1,
            height: 1,
            marginTop: 12,
          }}
        />

        {/* passing route params through menu sub array inside item */}
        {route.params.menu.map((item, index) => (
          <FoodItem key={index} item={item} />
        ))}
      </ScrollView>

      {/* menu book icon */}
      <Pressable
        onPress={toggleModel}
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          justifyContent: "center",
          backgroundColor: "black",
          marginLeft: "auto",
          position: "absolute",
          bottom: 35,
          right: 25,
        }}
      >
        <MaterialIcons
          style={{ textAlign: "center" }}
          name="menu-book"
          size={24}
          color="white"
        />
        <Text
          style={{
            color: "white",
            textAlign: "center",
            justifyContent: "center",
            fontWeight: "500",
          }}
        >
          MENU
        </Text>
      </Pressable>

      {/* React moodel component */}
      <Model isVisible={modelVisible} onBackdropPress={toggleModel}>
        <View
          style={{
            height: 190,
            width: 250,
            backgroundColor: "black",
            position: "absolute",
            bottom: 35,
            right: 10,
            boorderRadius: 9,
          }}
        >
          {menu.map((item, i) => (
            <View key={i}
            style={{padding:10,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
            }}>
              <Text
                style={{ color: "#D0D0D0", fontWeight: "600", fontSize: 19 }}
              >
                {item.name}
              </Text>
              <Text
                style={{ color: "#D0D0D0", fontWeight: "600", fontSize: 19 }}
              >
                {item.items.length}
              </Text>
            </View>
          ))}
        </View>
      </Model>
    </>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
