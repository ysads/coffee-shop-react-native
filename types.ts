export interface Product {
  id: string;
  price: number;
  name: string;
  description: string;
  images: string[];
  lat: string;
  lon: string;
}

export interface WeatherData {
  temperature: string;
  feelsLike: string;
  humidity: string;
}

export interface Weather {
  current: WeatherData;
  past: WeatherData[];
}
