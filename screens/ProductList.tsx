import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ScreenProps } from "../components/Router";
import { Color, Font, FontSize, Radius } from "../styles";
import { fetchProducts } from "../api";
import { Product } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";
import NavHeader from "../components/NavHeader";
import ProductCarousel from "../components/ProductCarousel";
import { useSelector } from "react-redux";

type Props = ScreenProps<"ProductList">;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.darkGreen,
    flex: 1,
  },
  title: {
    fontFamily: Font.merriweather.black,
    color: Color.white,
    fontSize: FontSize.title1,
    padding: 20,
  },
  sheet: {
    backgroundColor: Color.white,
    borderTopRightRadius: Radius.large,
    flex: 1,
  },
});

export default function ProductList({ navigation }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const googleUser = useSelector((state: any) => state.googleUser);

  useEffect(() => {
    setProducts(fetchProducts({ limit: 15 }));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <NavHeader />
        <Text>Você logou como {googleUser.name}</Text>
        <Text style={styles.title}>Produtos</Text>
        <View style={styles.sheet}>
          <ProductCarousel
            title="Best-sellers"
            products={products.slice(0, 5)}
            size="large"
            navigation={navigation}
          />
          <ProductCarousel
            title="Novos"
            products={products.slice(5, 10)}
            size="small"
            navigation={navigation}
          />
          <ProductCarousel
            title="Bem avaliados"
            products={products.slice(10, 15)}
            size="small"
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
