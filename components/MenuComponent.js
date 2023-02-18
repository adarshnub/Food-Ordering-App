import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartReducer";

const MenuComponent = ({ food }) => {
  const dispatch = useDispatch();
  const [addItems, setAddItems] = useState(0); //for quantity
  const [selected, setSelected] = useState(false); //for button pressed or not

  return (
    <View>
      <Pressable
        style={{
          margin: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          borderColor: "#E8E8E8",
          borderWidth: 5,
          backgroundColor: "#E8E8E8",
          borderRadius: 6,
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>{food.name}</Text>
          <Text style={{ fontSize: 18 }}>₹{food.price}</Text>
          <Text>
            {[0, 0, 0, 0, 0].map((en, i) => (
              <FontAwesome
                key={`${food.id}-${i}`}
                style={{ paddingHorizontal: 3, marginTop: 20 }}
                name={i < Math.floor(food.rating) ? "star" : "star-o"}
                size={17}
                color="#FFD700"
              />
            ))}
          </Text>
          <Text style={{ width: 180, fontSize: 16 }}>
            {food.description.length > 30
              ? food.description.substr(0, 35) + "..."
              : food.description}
          </Text>
        </View>

        <Pressable>
          <Image
            style={{ width: 120, height: 120, borderRadius: 8 }}
            source={{ uri: food.image }}
          />
          {selected ? (
            <Pressable
              style={{
                position: "absolute",
                top: 90,
                left: 15,
                flexDirection: "row",
                paddingHorizontal: 10,
                paddingVertical: 10,
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 5,
              }}
            >
              <Pressable
                onPress={() => {
                  if (addItems === 1) {
                    dispatch(removeFromCart(food));
                    setAddItems(0);
                    setSelected(false);
                  } else {
                    dispatch(decrementQuantity(food));
                    setAddItems((c) => c - 1);
                  }
                }}
              >
                <Text
                  style={{ fontSize: 25, color: "green", paddingHorizontal: 6 }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={{ fontSize: 20, color: "green", paddingHorizontal: 6 }}
                >
                  {addItems}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setAddItems((c) => c + 1);
                  dispatch(incrementQuantity(food));
                }}
              >
                <Text
                  style={{ fontSize: 20, color: "green", paddingHorizontal: 6 }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setSelected(true);
                if (addItems == 0) {
                  setAddItems((c) => c + 1);
                }
                dispatch(addToCart(food));
              }}
              style={{
                position: "absolute",
                top: 90,
                left: 20,
                flexDirection: "row",
                paddingHorizontal: 25,
                paddingVertical: 10,
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 5,
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "600", color: "#018749" }}
              >
                ADD
              </Text>
            </Pressable>
          )}
        </Pressable>
      </Pressable>
    </View>
  );
};

export default MenuComponent;

const styles = StyleSheet.create({});
