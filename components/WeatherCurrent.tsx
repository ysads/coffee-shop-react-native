import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Color, Font, FontSize } from "../styles";
import { WeatherData } from "../types";
import WeatherIcon from "./WeatherIcon";

type Props = {
  weather: WeatherData;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 30,
  },
  icon: {
    marginTop: 10,
  },
  temperature: {
    fontFamily: Font.merriweather.bold,
    fontSize: FontSize.title1,
    color: Color.navyBlue,
  },
  description: {
    fontFamily: Font.sourceSans.regular,
    fontSize: FontSize.title3,
    textAlign: "right",
    color: Color.navyBlue,
  },
});

export default function WeatherCurrent({ weather }: Props) {
  return (
    <View style={styles.container}>
      <WeatherIcon
        style={styles.icon}
        size="large"
        name={weather.conditionId}
        color={Color.darkPink}
      />
      <View>
        <Text style={styles.temperature}>{`${weather.temperature} ºC`}</Text>
        <Text style={styles.description}>{weather.description}</Text>
      </View>
    </View>
  );
}
