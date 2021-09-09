import React from "react";
import UIButton from "../components/ui/UIButton";
import { View, Text } from "react-native";
import { ScreenProps } from "../components/Router";

type Props = ScreenProps<"ProductList">;

export default function ProductList({ navigation }: Props) {
  return (
    <View>
      <UIButton onPress={() => navigation.navigate("ProductDetails")}>
        <Text>go to product details</Text>
      </UIButton>
    </View>
  );
}
