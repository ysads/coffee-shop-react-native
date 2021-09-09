import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#fa8a82",
    padding: 20,
  },
});

interface Props {
  children: any;
  onPress: () => void;
}

export default function UIButton({ children, onPress }: Props) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="white">
      <View style={styles.button}>{children}</View>
    </TouchableHighlight>
  );
}
