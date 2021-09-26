import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { Color, Radius, Shadow } from "../styles";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: Radius.small,
    color: Color.white,
    paddingTop: 78,
    padding: 8,
    ...Shadow.elevation3,
  },
  green: {
    backgroundColor: Color.darkGreen,
  },
  pink: {
    backgroundColor: Color.darkPink,
  },
});

interface Props {
  children: any;
  variant: "green" | "pink";
  onPress: () => void;
}

const Button = ({ children, variant, onPress }: Props) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="white">
      <View style={[styles.button, styles[variant]]}>{children}</View>
    </TouchableHighlight>
  );
};

Button.defaultProps = {
  variant: "green",
};

export default Button;
