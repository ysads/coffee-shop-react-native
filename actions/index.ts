import { GoogleUser, WeatherData } from "../types";

export const signin = (googleUser: GoogleUser) => {
  return {
    type: "SIGNIN",
    googleUser,
  };
};

export const addWeatherData = (weather: WeatherData) => ({
  type: "ADD_WEATHER_DATA",
  weather,
});

export const resetWeatherData = () => ({
  type: "RESET_WEATHER_DATA",
});

export const setRegion = (region: string) => ({
  type: "SET_REGION",
  region,
});
