import { GoogleUser, WeatherData } from "../types";

export const signin = (googleUser: GoogleUser) => {
  return {
    type: "SIGNIN",
    googleUser,
  };
};

export const addWeatherData = (weather: WeatherData, region: string) => ({
  type: "ADD_WEATHER_DATA",
  payload: {
    weather,
    region,
  },
});

export const addRegion = (region: string) => ({
  type: "ADD_REGION",
  payload: region,
});
