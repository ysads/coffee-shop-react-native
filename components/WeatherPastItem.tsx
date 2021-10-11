import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color, Font, FontSize } from "../styles";
import { WeatherData } from "../types";
import WeatherIcon from "./WeatherIcon";

type Props = {
  weather: WeatherData;
};

const FORMAT_OPTIONS = {
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  weekday: {
    marginLeft: 20,
    fontFamily: Font.sourceSans.bold,
    fontSize: FontSize.body,
    color: Color.pink,
  },
  date: {
    marginLeft: 4,
    fontFamily: Font.sourceSans.bold,
    fontSize: FontSize.body,
    color: Color.white,
  },
  temperature: {
    fontFamily: Font.sourceSans.bold,
    fontSize: FontSize.body,
    color: Color.white,
  },
});

export default function WeatherPastItem({ weather }: Props) {
  const date = new Date(weather.timestamp);

  return (
    <View style={style.container}>
      <View style={style.iconContainer}>
        <WeatherIcon
          color={Color.white}
          name={weather.conditionId}
          size="small"
        />
        <Text style={style.weekday}>
          {date.toLocaleDateString(undefined, { weekday: "short" })}
        </Text>
        <Text style={style.date}>
          {date.toLocaleDateString(undefined, FORMAT_OPTIONS)}
        </Text>
      </View>
      <Text style={style.temperature}>{`${weather.temperature} ºC`}</Text>
    </View>
  );
}
