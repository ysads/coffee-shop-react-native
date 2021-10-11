import React from "react";
import WeatherPastItem from "./WeatherPastItem";
import { View, Text, StyleSheet } from "react-native";
import { Color, Font, FontSize, Radius } from "../styles";
import { WeatherData } from "../types";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  currentWeather: WeatherData;
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
  emptyContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  emptyText: {
    color: Color.white,
    fontFamily: Font.sourceSans.regular,
    fontSize: FontSize.body,
    marginTop: 12,
  },
});

export default function WeatherPast({ currentWeather }: Props) {
  const weatherHistory: WeatherData[] = useSelector((state: any) => {
    return state.weather.history.filter(
      (w: WeatherData) => w.timestamp !== currentWeather.timestamp,
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados anteriores</Text>
      {weatherHistory.length ? (
        weatherHistory.map((weather, index) => (
          <WeatherPastItem weather={weather} key={index} />
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="warning-outline" size={54} color={Color.white} />
          <Text style={styles.emptyText}>
            Não há dados históricos para exibir
          </Text>
        </View>
      )}
    </View>
  );
}
