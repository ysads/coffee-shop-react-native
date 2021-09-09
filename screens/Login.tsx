import React from "react";
import UIButton from "../components/ui/UIButton";
import { View, Text } from "react-native";
import { ScreenProps } from "../components/Router";

type Props = ScreenProps<"Login">;

export default function Login({ navigation }: Props) {
  return (
    <View>
      <UIButton onPress={() => navigation.navigate("ProductList")}>
        <Text>go to product list</Text>
      </UIButton>
    </View>
  );
}
