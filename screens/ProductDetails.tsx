import React from "react";
import Button from "../components/Button";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { ScreenProps } from "../components/Router";
import { Color, Font, FontSize, Radius } from "../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

type Props = ScreenProps<"ProductDetails">;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 400,
  },
  sheet: {
    backgroundColor: Color.white,
    borderTopRightRadius: Radius.large,
    flex: 1,
    padding: 20,
    paddingTop: 40,
    marginTop: -30,
  },
  scrollable: {
    flex: 1,
    marginBottom: 20,
  },
  title: {
    color: Color.navyBlue,
    fontSize: FontSize.title2,
    fontFamily: Font.merriweather.bold,
  },
  price: {
    color: Color.darkGreen,
    fontFamily: Font.merriweather.black,
    fontSize: FontSize.title2,
    marginTop: 12,
  },
  description: {
    color: Color.gray,
    fontSize: FontSize.body,
    marginTop: 12,
    lineHeight: 22,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    color: Color.white,
    fontSize: FontSize.body,
    fontFamily: Font.sourceSans.bold,
    marginLeft: 10,
  },
});

export default function ProductDetails({ navigation, route }: Props) {
  const { product } = route.params;
  const formattedPrice = `Preço: ${product.price}€`;

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: product.images[0],
        }}
      />
      <View style={styles.sheet}>
        <ScrollView style={styles.scrollable}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{formattedPrice}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </ScrollView>
        <View style={styles.actions}>
          <Button
            variant="pink"
            size="large"
            onPress={() => navigation.navigate("Weather")}
          >
            <Ionicons name="rainy-outline" color={Color.white} size={24} />
            <Text style={styles.buttonText}>Ver tempo</Text>
          </Button>
          <Button
            size="large"
            onPress={() => console.log(`comprou ${product.name}`)}
          >
            <Ionicons name="cart-outline" color={Color.white} size={24} />
            <Text style={styles.buttonText}>Comprar</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
