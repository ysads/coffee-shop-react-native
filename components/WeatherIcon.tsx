import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { WeatherCondition } from "../types";
import { StyleProp, TextStyle } from "react-native";

type Props = {
  color: string;
  name: WeatherCondition;
  size: "large" | "small";
  style?: StyleProp<TextStyle>;
};

type IconName =
  | "cloudy-outline"
  | "partly-sunny-outline"
  | "rainy-outline"
  | "snow-outline"
  | "sunny-outline"
  | "thunderstorm-outline";

const ICON_MAP: Record<WeatherCondition, IconName> = {
  "09": "rainy-outline",
  "10": "partly-sunny-outline",
  "11": "thunderstorm-outline",
  "13": "snow-outline",
  "50": "rainy-outline",
  "01": "sunny-outline",
  "02": "partly-sunny-outline",
  "03": "cloudy-outline",
  "04": "cloudy-outline",
};

export default function WeatherIcon({ color, name, size, style }: Props) {
  const iconName = ICON_MAP[name];
  const iconSize = size === "large" ? 64 : 32;

  return (
    <Ionicons name={iconName} size={iconSize} color={color} style={style} />
  );
}
