import React from "react";
import Button from "../components/Button";
import { View, Text } from "react-native";
import { ScreenProps } from "../components/Router";

type Props = ScreenProps<"Login">;

export default function Login({ navigation }: Props) {
  return (
    <View>
      <Button onPress={() => navigation.navigate("ProductList")}>
        <Text>go to product list</Text>
      </Button>
    </View>
  );
}
