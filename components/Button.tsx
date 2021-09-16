import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { Color, Radius, Shadow } from "../styles";

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Radius.small,
    color: Color.white,
    ...Shadow.elevation3,
  },
  green: {
    backgroundColor: Color.darkGreen,
  },
  pink: {
    backgroundColor: Color.darkPink,
  },
  large: {
    padding: 16,
  },
  small: {
    padding: 8,
  },
});

interface Props {
  children: any;
  style: any;
  variant: "green" | "pink";
  size: "large" | "small";
  onPress: () => void;
}

const Button = ({ children, size, style, variant, onPress }: Props) => {
  const buttonStyles = [styles.button, styles[variant], styles[size], style];

  return (
    <TouchableHighlight onPress={onPress} underlayColor="white">
      <View style={buttonStyles}>{children}</View>
    </TouchableHighlight>
  );
};

Button.defaultProps = {
  variant: "green",
  size: "small",
  style: {},
};

export default Button;
