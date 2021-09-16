import React from "react";
import Button from "./Button";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Color, Font, FontSize, Radius, Shadow } from "../styles";
import { Product } from "../types";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  touchable: {
    borderRadius: Radius.small,
    backgroundColor: Color.white,
  },
  container: {
    padding: 8,
    borderRadius: Radius.small,
    backgroundColor: Color.white,
    ...Shadow.elevation3,
  },
  image: {
    width: "100%",
    height: 200,
  },
  infoContainer: {
    margin: 8,
  },
  title: {
    color: Color.navyBlue,
    fontFamily: Font.merriweather.bold,
    fontSize: FontSize.title3,
    marginTop: 8,
  },
  description: {
    color: Color.gray,
    fontSize: FontSize.body,
    marginTop: 8,
  },
  priceContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  price: {
    color: Color.darkGreen,
    fontFamily: Font.merriweather.black,
    fontSize: FontSize.body,
  },
});

interface Props {
  product: Product;
  onPress: () => void;
}

export default function Carouselproduct({ product, onPress }: Props) {
  const formattedPrice = `Preço: ${product.price}€`;

  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.touchable}
      activeOpacity={0.95}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: product.images[0],
          }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {product.description}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{formattedPrice}</Text>
            <Button variant="green" onPress={() => console.log("hey")}>
              <Ionicons name="cart-outline" color={Color.white} size={24} />
            </Button>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}
