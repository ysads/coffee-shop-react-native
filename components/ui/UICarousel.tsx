import React from "react";
import UIButton from "./UIButton";
import { StyleSheet, Text, View } from "react-native";
import { Product } from "../../types";
import { Color, Font, FontSize } from "../../styles";
import { ScreenProps } from "../Router";

interface Props {
  title: string;
  products: Product[];
  navigation: ScreenProps<"ProductList">["navigation"];
}

const styles = StyleSheet.create({
  title: {
    color: Color.navyBlue,
    fontFamily: Font.garamond.bold,
    fontSize: FontSize.title2,
    padding: 20,
  },
});

export default function UICarousel({ title, products, navigation }: Props) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {products.map((product) => (
        <UIButton
          onPress={() => navigation.navigate("ProductDetails", { product })}
        >
          <Text>{product.name}</Text>
        </UIButton>
      ))}
    </View>
  );
}
