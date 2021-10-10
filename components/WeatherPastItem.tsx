import React from "react";
import { View, Text } from "react-native";
import { Color, Font, FontSize } from "../styles";
import { WeatherData } from "../types";
import WeatherIcon from "./WeatherIcon";

type Props = {
  key: string | number;
  weather: WeatherData;
};

const FORMAT_OPTIONS = {
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
};

export default function WeatherPastItem({ weather, key }: Props) {
  const date = new Date(weather.timestamp);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: Color.pink,
        // padding: 10,
        alignItems: "center",
        marginBottom: 25,
      }}
      key={key}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <WeatherIcon
          color={Color.white}
          name={weather.conditionId}
          size="small"
        />
        <Text
          style={{
            marginLeft: 20,
            fontFamily: Font.sourceSans.bold,
            fontSize: FontSize.body,
            color: Color.pink,
          }}
        >
          {date.toLocaleDateString(undefined, { weekday: "short" })}
        </Text>
        <Text
          style={{
            marginLeft: 4,
            fontFamily: Font.sourceSans.bold,
            fontSize: FontSize.body,
            color: Color.white,
          }}
        >
          {date.toLocaleDateString(undefined, FORMAT_OPTIONS)}
        </Text>
      </View>
      <Text
        style={{
          fontFamily: Font.sourceSans.bold,
          fontSize: FontSize.body,
          color: Color.white,
        }}
      >
        {`${weather.temperature} ºC`}
      </Text>
    </View>
  );
}
