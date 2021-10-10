import { Weather } from "../types";

export const parseWeather = (response: any): Weather => {
  const toTemp = (val: number) => val.toFixed(0);
  const toId = (val: string) => val.replace(/[dn]/, "");

  const current = {
    temperature: toTemp(response.current.temp),
    humidity: response.current.humidity,
    feelsLike: response.current.feels_like,
    description: response.current.weather[0].description,
    conditionId: toId(response.current.weather[0].icon),
    timestamp: response.current.dt,
  };
  const past = response.daily.map((data: any) => ({
    temperature: toTemp(data.temp.day),
    humidity: data.humidity,
    feelsLike: data.feels_like.day,
    description: data.weather[0].description,
    conditionId: toId(data.weather[0].icon),
    timestamp: data.dt,
  }));

  return {
    current,
    past,
  };
};
