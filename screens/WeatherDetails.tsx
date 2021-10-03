import React, { useCallback, useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { fetchWeatherData } from "../api";
import { ScreenProps } from "../components/Router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, Font, FontSize } from "../styles";
import { Weather } from "../types";

type Props = ScreenProps<"WeatherDetails">;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    flex: 1,
  },
  title: {
    color: Color.navyBlue,
    fontSize: FontSize.title2,
    fontFamily: Font.merriweather.bold,
  },
  text: {
    fontSize: 20,
  },
});

export default function WeatherDetails({ route }: Props) {
  const { product } = route.params;
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({} as Weather);

  const fetchData = async () => {
    const response = await fetchWeatherData({
      lat: product.lat,
      lon: product.lon,
      units: "metric",
    });
    setWeather(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Text>carregando</Text>
      ) : (
        <ScrollView>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.title}>{weather.current.temperature}</Text>
          <Text style={styles.title}>{weather.current.humidity}</Text>
          {/* <Text style={styles.title}>{weather?.current?.feelsLike || "gay"}</Text> */}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
