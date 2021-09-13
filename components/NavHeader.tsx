import React from "react";
import { View } from "react-native";
import { Color } from "../styles";
import { Ionicons } from "@expo/vector-icons";

export default function NavHeader() {
  return (
    <View
      style={{
        backgroundColor: Color.darkGreen,
        paddingHorizontal: 20,
        paddingTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Ionicons name="arrow-back-outline" color={Color.white} size={24} />
      <Ionicons name="cart-outline" color={Color.white} size={24} />
    </View>
  );
}
