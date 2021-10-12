import React, { useEffect, useState } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { fetchWeatherData } from "../api";
import { ScreenProps } from "../components/Router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, Font, FontSize } from "../styles";
import { Weather, WeatherData } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { addWeatherData, addRegion, loadPrevWeatherData } from "../actions";
import Loading from "../components/Loading";
import WeatherCurrent from "../components/WeatherCurrent";
import WeatherPast from "../components/WeatherPast";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { upsert } from "../support/collections";

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
  const dbKey = `weather_${product.region.replace(" ", "_").toLowerCase()}`;

  const allWeatherHistory = useSelector((state: any) => {
    return state.weather.history[product.region];
  });
  const dispatch = useDispatch();

  const persistData = async (value: WeatherData) => {
    if (!value) return;
    await AsyncStorage.setItem(dbKey, JSON.stringify(value));
  };

  const getPersistedData = async () => {
    const value = await AsyncStorage.getItem(dbKey);
    return value ? JSON.parse(value) : [];
  };

  const fetchData = async () => {
    await AsyncStorage.removeItem(dbKey);
    const weatherHistory = await getPersistedData();
    const response = await fetchWeatherData({
      lat: product.lat,
      lon: product.lon,
      units: "metric",
    });

    setWeather(response);

    dispatch(loadPrevWeatherData(weatherHistory, product.region));
    dispatch(addWeatherData(response.current, product.region));

    setLoading(false);
  };

  useEffect(() => {
    persistData(allWeatherHistory);
  }, [allWeatherHistory]);

  useEffect(() => {
    dispatch(addRegion(product.region));
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
          <WeatherPast
            currentWeather={weather.current}
            region={product.region}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
