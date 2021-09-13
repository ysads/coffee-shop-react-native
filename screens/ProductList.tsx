import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ScreenProps } from "../components/Router";
import { Color, Font, FontSize, Radius } from "../styles";
import { fetchProducts } from "../api";
import { Product } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";
import NavHeader from "../components/NavHeader";
import UICarousel from "../components/ui/UICarousel";

type Props = ScreenProps<"ProductList">;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.darkGreen,
    flex: 1,
  },
  title: {
    fontFamily: Font.garamond.bold,
    color: Color.white,
    fontSize: FontSize.title1,
    padding: 20,
  },
  sheet: {
    backgroundColor: Color.white,
    flex: 1,
    borderTopRightRadius: Radius.large,
  },
});

export default function ProductList({ navigation }: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(fetchProducts({ limit: 15 }));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavHeader />
      <ScrollView>
        <Text style={styles.title}>Produtos</Text>
        <View style={styles.sheet}>
          <UICarousel
            title="Best-sellers"
            products={products.slice(0, 5)}
            navigation={navigation}
          />
          <UICarousel
            title="Novos"
            products={products.slice(5, 10)}
            navigation={navigation}
          />
          <UICarousel
            title="Bem avaliados"
            products={products.slice(10, 15)}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
