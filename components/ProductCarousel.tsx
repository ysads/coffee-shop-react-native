import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";
import CarouselItemLarge from "./CarouselItemLarge";
import CarouselItemSmall from "./CarouselItemSmall";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Product } from "../types";
import { Color, Font, FontSize } from "../styles";
import { ScreenProps } from "./Router";

const { width: screenWidth } = Dimensions.get("window");

interface Props {
  title: string;
  size: "large" | "small";
  products: Product[];
  navigation: ScreenProps<"ProductList">["navigation"];
}

const styles = StyleSheet.create({
  title: {
    color: Color.navyBlue,
    fontFamily: Font.merriweather.bold,
    fontSize: FontSize.title2,
    padding: 20,
  },
});

export default function UICarousel({
  title,
  size,
  products,
  navigation,
}: Props) {
  const CarouselItem = size === "small" ? CarouselItemSmall : CarouselItemLarge;
  const itemWidth = size === "small" ? screenWidth * 0.5 : screenWidth * 0.66;

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <CarouselItem
        product={item}
        onPress={() => navigation.navigate("ProductDetails", { product: item })}
      />
    );
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Carousel
        layout={"default"}
        data={products}
        sliderWidth={screenWidth}
        itemWidth={itemWidth}
        contentContainerCustomStyle={{ paddingBottom: 20 }}
        renderItem={renderItem}
      />
    </View>
  );
}
