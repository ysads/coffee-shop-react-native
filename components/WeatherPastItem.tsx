import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color, Font, FontSize } from "../styles";
import { WeatherData } from "../types";
import WeatherIcon from "./WeatherIcon";

type Props = {
  weather: WeatherData;
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
  const date = new Date(weather.timestamp * 1000);

  const daysOfTheWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const dayOfTheWeek = daysOfTheWeek[date.getDay()];
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const month = months[date.getMonth()];
  const day = ("0" + date.getDate()).substr(-2);
  const hours = ("0" + date.getHours()).substr(-2);
  const minutes = ("0" + date.getMinutes()).substr(-2);
  const seconds = ("0" + date.getSeconds()).substr(-2);
  const formattedDate =
    day + " " + month + ", " + hours + ":" + minutes + ":" + seconds;

  return (
    <View style={style.container}>
      <View style={style.iconContainer}>
        <WeatherIcon
          color={Color.white}
          name={weather.conditionId}
          size="small"
        />
        <Text style={style.weekday}>{dayOfTheWeek}</Text>
        <Text style={style.date}>{formattedDate}</Text>
      </View>
      <Text style={style.temperature}>{`${weather.temperature} ºC`}</Text>
    </View>
  );
}
