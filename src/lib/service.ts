import { WeatherInterface } from "@/interface/interface";
import { FiveDayInterface } from "@/interface/interface";

const APIKEY = "11721070119f7bbc9e555611b3693910";

export const getWeather = async (lat: number, lon: number) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=imperial`);
    const data: WeatherInterface = await response.json();
    return data;
};

export const getFiveDayWeatherByGeo = async (lat: number, lon: number) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=imperial`);
    const data: FiveDayInterface = await response.json();
    return data;
  };

export const getWeatherData = async (city: string) => {
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=imperial`);
    const data: WeatherInterface = await response.json();
    return data;
  };
  
  export const getFiveDayWeather = async (city: string) => {
  
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=imperial`);
    const data: FiveDayInterface = await response.json();
    return data;
  };
  


