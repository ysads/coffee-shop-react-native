import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Color, Font, FontSize, Radius, Shadow } from "../styles";
import { Product } from "../types";

const styles = StyleSheet.create({
  touchable: {
    borderRadius: Radius.small,
  },
  container: {
    padding: 8,
    borderRadius: Radius.small,
    backgroundColor: Color.white,
    ...Shadow.elevation3,
  },
  image: {
    width: "100%",
    height: 150,
  },
  infoContainer: {
    margin: 8,
  },
  title: {
    color: Color.navyBlue,
    fontFamily: Font.merriweather.bold,
    fontSize: FontSize.body,
    marginTop: 8,
  },
  price: {
    color: Color.darkGreen,
    fontFamily: Font.merriweather.black,
    fontSize: FontSize.body,
    marginTop: 8,
  },
});

interface Props {
  product: Product;
  onPress: () => void;
}

export default function Carouselproduct({ product, onPress }: Props) {
  const formattedPrice = `${product.price}€`;

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
          <Text style={styles.price}>{formattedPrice}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
