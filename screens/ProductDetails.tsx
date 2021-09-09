import React from "react";
import UIButton from "../components/ui/UIButton";
import { View, Text } from "react-native";
import { ScreenProps } from "../components/Router";

type Props = ScreenProps<"ProductDetails">;

export default function ProductDetails({ navigation }: Props) {
  return (
    <View>
      <UIButton onPress={() => navigation.navigate("Weather")}>
        <Text>go to weather</Text>
      </UIButton>
    </View>
  );
}
