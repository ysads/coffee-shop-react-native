import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default function Weather() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Não tem pra onde ir 😔</Text>
    </View>
  );
}
