import { GoogleUser, Product, Weather } from "../types";
import { getFakeProduct } from "./product";
import { parseWeather } from "./weather";
import { parseGoogleUser } from "./google";

interface ApiProductParams {
  limit: number;
}

interface ApiWeatherParams {
  lat: string;
  lon: string;
  units?: "metric" | "imperial";
}

export const fetchProducts = ({ limit }: ApiProductParams): Product[] => {
  return Array(limit).fill("").map(getFakeProduct);
};

export const fetchWeatherData = async ({
  lat,
  lon,
  units,
}: ApiWeatherParams): Promise<Weather> => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&lang=pt_br&exclude=minutely,hourly&appid=a63084d95f8b87d4922784d2399479ec`,
  )
    .then((res) => res.json())
    .then((data) => parseWeather(data));
};

export const fetchGoogleUser = async (
  token: string | undefined,
): Promise<GoogleUser> => {
  return fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`,
  )
    .then((res) => res.json())
    .then((data) => parseGoogleUser(data));
};
