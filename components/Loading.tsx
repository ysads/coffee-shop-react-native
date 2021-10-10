import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Color, Font, FontSize } from "../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    color: Color.darkPink,
    fontFamily: Font.sourceSans.bold,
    fontSize: FontSize.body,
    marginTop: 20,
  },
});

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" animating={true} color={Color.pink} />
      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
}
