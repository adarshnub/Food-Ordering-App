import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=1024x1024&w=is&k=20&c=samPmisz6bQ-oS6PxnbAZZOgK1aFTIPKbiK8s4PsRxU=",
    "https://media.istockphoto.com/id/1364975868/photo/assorted-indian-ethnic-food-buffet-on-rustic-concrete-table-from-above.jpg?s=612x612&w=0&k=20&c=9n1SqbZ2cgqnUUfBg_OT7qIRtkNoOR69uiAhXgCUa5E=",
    "https://media.istockphoto.com/id/1170686222/photo/set-of-georgian-food-kebab-of-chicken-and-pork.jpg?s=612x612&w=0&k=20&c=HWomN53TTF3ChjZQ2iX367e7e_-nytxINwa552cEziM=",
  ];
  return (
    <View>
      {/* first image slider  */}
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
