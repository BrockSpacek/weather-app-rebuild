import React, { useEffect, useState } from "react";
import { getFiveDayWeather } from "@/lib/service";

const OtherWeatherCard = () => {
  const [day, setDay] = useState("This Day");
  const [temp, setTemp] = useState(0);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(0);
  const [icon, setIcon] = useState("");

  useEffect(() => {
              const getData = async () => {
                  const weatherData = await getFiveDayWeather();
                  console.log(weatherData);

                  setTemp(Math.round(weatherData.list[0].main.temp));
                  setLow(Math.round(weatherData.list[0].main.temp_min));
                  setHigh(Math.round(weatherData.list[0].main.temp_max));
                  setIcon(`http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`);
                
                 
            
              }
      
              getData();
          }, []);

  return (
    <div className="bg-[#D1A879] w-full md:w-40 p-3 rounded text-center">
      <p className="font-bold text-lg">{day}</p>
      <p className="text-sm mt-1">Average</p>
      <p className="text-4xl font-bold ml-2 mt-3">{temp}°</p>

      <div className="mt-2 flex justify-center">
        <img className='h-12 w-12' src={icon} alt="Weather icon" />
      </div>

      <p className="text-sm mt-2">High/Low</p>
      <p className="text-xl font-bold">
        {low}°F/{high}°F
      </p>
    </div>
  );
};

export default OtherWeatherCard;
