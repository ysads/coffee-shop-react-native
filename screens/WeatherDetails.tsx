import React, { useEffect, useState } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { fetchWeatherData } from "../api";
import { ScreenProps } from "../components/Router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, Font, FontSize } from "../styles";
import { Weather } from "../types";
import Loading from "../components/Loading";
import WeatherCurrent from "../components/WeatherCurrent";
import WeatherPast from "../components/WeatherPast";
import { useDispatch, useSelector } from "react-redux";
import { addWeatherData, resetWeatherData, setRegion } from "../actions";

type Props = ScreenProps<"WeatherDetails">;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flex: 1,
  },
  title: {
    color: Color.navyBlue,
    fontSize: FontSize.title1,
    fontFamily: Font.merriweather.bold,
    marginTop: 50,
    marginBottom: 30,
    marginHorizontal: 20,
  },
});

export default function WeatherDetails({ route }: Props) {
  const { product } = route.params;
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({} as Weather);
  const dispatch = useDispatch();
  const currentRegion = useSelector((state: any) => state.weather.region);

  const fetchData = async () => {
    const response = await fetchWeatherData({
      lat: product.lat,
      lon: product.lon,
      units: "metric",
    });
    setWeather(response);
    setLoading(false);
    dispatch(addWeatherData(response.current));
  };

  useEffect(() => {
    if (product.region !== currentRegion) {
      dispatch(resetWeatherData());
      dispatch(setRegion(product.region));
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <Text style={styles.title}>{product.region}</Text>
          <WeatherCurrent weather={weather.current} />
          <WeatherPast currentWeather={weather.current} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
