import React from "react";
import UIButton from "../components/ui/UIButton";
import { View, Text } from "react-native";
import { ScreenProps } from "../components/Router";

type Props = ScreenProps<"ProductDetails">;

export default function ProductDetails({ navigation, route }: Props) {
  const { product } = route.params;

  return (
    <View>
      <Text>{product.name}</Text>
      <UIButton onPress={() => navigation.navigate("Weather")}>
        <Text>go to weather</Text>
      </UIButton>
    </View>
  );
}
