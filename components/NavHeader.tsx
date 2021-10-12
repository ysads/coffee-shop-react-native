import React from "react";
import { Image, Text, View } from "react-native";
import { Color } from "../styles";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  username: string;
  picture: string;
}

export default function NavHeader({ username, picture }: Props) {
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image source={{ uri: picture }} style={{ width: 24, height: 24 }} />
        <Text
          style={{
            color: "white",
            fontSize: 10,
            paddingLeft: 10,
            textAlignVertical: "center",
          }}
        >
          {username}
        </Text>
      </View>
      <Ionicons name="cart-outline" color={Color.white} size={24} />
    </View>
  );
}
