"use client";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import Image from "next/image";
import BgImage from "@/assets/Weather Sprint One Piece Background.jpg";
import OtherWeatherCard from "@/components/OtherWeatherCard";
import MainCard from "@/components/MainCard";
import {
  getWeatherData,
  getFiveDayWeather,
  getWeather,
  getFiveDayWeatherByGeo,
} from "@/lib/service";
import { FileVideo } from "lucide-react";

export default function Home() {
  const [location, setLocation] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const fetchWeatherData = async () => {
    if (!location) return;

    try {
      const currentWeatherData = await getWeatherData(location);
      console.log(currentWeatherData);
      setCurrentWeather(currentWeatherData);

      const fiveDayWeatherData = await getFiveDayWeather(location);
      console.log(fiveDayWeatherData);
      const filteredData = fiveDayWeatherData.list.filter(
        (_, index) => index % 8 === 0
      );
      setForecast(filteredData.slice(0, 5));

      setError(null);
    } catch (err) {
      setError("City not found or error fetching data");
      console.log("City not found or error fetching data");
    }
  };

  const fetchWeatherByGeoLocation = async (
    latitude: number,
    longitude: number
  ) => {
    try {
      const currentWeatherData = await getWeather(latitude, longitude);
      setCurrentWeather(currentWeatherData);

      const fiveDayWeatherData = await getFiveDayWeatherByGeo(
        latitude,
        longitude
      );
      const filteredData = fiveDayWeatherData.list.filter(
        (_, index) => index % 8 === 0
      );
      setForecast(filteredData.slice(0, 5));

      setError(null);
    } catch (err) {
      setError("Error fetching data based on geolocation");
      console.log("Error fetching data based on geolocation");
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLat(latitude);
          setLon(longitude);
          fetchWeatherByGeoLocation(latitude, longitude);
        },
        (error) => {
          setError("Unable to retrieve location");
          console.error(error);
        }
      );
    } else {
      setError("Geolocation is not working");
    }
  }, []);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });

      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
  }, []);

  return (
    <main className="min-h-screen w-full relative">
      <div className="fixed inset-0">
        <Image
          src={BgImage}
          alt="Weather Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative w-full h-full min-h-screen p-6">
        <div className="flex justify-center items-center">
          <p className="mr-[4%] text-3xl">{currentDate}</p>
          <p className="ml-[4%] text-3xl">{currentTime}</p>
        </div>

        <div className="flex justify-center">
          <div className="lg:w-[33%] md:w-[50%] w-[60%] mt-3">
            <Input
              id="location"
              placeholder="Enter City"
              value={location}
              onChange={handleLocationChange}
              className="bg-[#C38945] placeholder-black"
            />
          </div>
          <button
            onClick={fetchWeatherData}
            className="ml-4 bg-[#C38945] text-black py-1 h-9 px-4 rounded hover:bg-orange-400 mt-[14px]"
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {currentWeather && (
          <div className="flex justify-center mt-[140px]">
            <MainCard
              temp={Math.round(currentWeather.main.temp)}
              feelsLike={Math.round(currentWeather.main.feels_like)}
              icon={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              weatherType={currentWeather.weather[0].description}
            />
          </div>
        )}

        
          <div className="flex justify-center mt-20 gap-6">
          
            {forecast.map((day, index) => (
              <OtherWeatherCard
                key={index}
                day={new Date(day.dt * 1000).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
                temp={Math.round(day.main.temp)}
                icon={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              />
            ))}
            
          </div>
      
      </div>
    </main>
  );
}
