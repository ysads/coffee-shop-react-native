export interface GoogleUser {
  email: string;
  name: string;
  picture: string;
}

export interface Product {
  id: string;
  price: number;
  name: string;
  description: string;
  images: string[];
  lat: string;
  lon: string;
  region: string;
}

export type WeatherCondition =
  | "01"
  | "02"
  | "03"
  | "04"
  | "09"
  | "10"
  | "11"
  | "13"
  | "50";

export interface WeatherData {
  temperature: string;
  feelsLike: string;
  humidity: string;
  description: string;
  timestamp: number;
  conditionId: WeatherCondition;
}

export interface Weather {
  current: WeatherData;
  past: WeatherData[];
}
