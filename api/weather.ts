import { Weather } from "../types";

export const parseWeather = (response: any): Weather => {
  const current = {
    temperature: response.current.temp,
    humidity: response.current.humidity,
    feelsLike: response.current.feels_like,
  };
  const past = response.daily.map((data: any) => ({
    temperature: data.temp.day,
    humidity: data.humidity,
    feelsLike: data.feels_like.day,
  }));

  return {
    current,
    past,
  };
};
