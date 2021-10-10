import React from "react";
import WeatherPastItem from "./WeatherPastItem";
import { View, Text, StyleSheet } from "react-native";
import { Color, Font, FontSize, Radius } from "../styles";
import { Weather } from "../types";

type Props = {
  weather: Weather;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.darkPink,
    borderRadius: Radius.large,
    marginHorizontal: 20,
    marginTop: 40,
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontFamily: Font.merriweather.bold,
    fontSize: FontSize.title2,
    marginBottom: 40,
    color: Color.white,
  },
});

export default function WeatherPast({ weather }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados anteriores</Text>
      {weather.past.map((weather, index) => (
        <WeatherPastItem weather={weather} key={index} />
      ))}
    </View>
  );
}
