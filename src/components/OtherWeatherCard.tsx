import React from "react";

interface OtherWeatherCardProps {
  day: string;
  temp: number;
  icon: string;
}

const OtherWeatherCard: React.FC<OtherWeatherCardProps> = ({ day, temp, icon }) => {
  return (
    <div className="bg-[#D1A879] opacity-85 w-full md:w-40 p-3 rounded text-center">
      <p className="font-bold text-2xl">{day}</p>
      <p className="text-sm mt-3">Average</p>
      <p className="text-6xl font-bold ml-2 mt-3">{temp}°</p>

      <div className="mt-4 flex justify-center">
        <img className="h-12 w-12" src={icon} alt="Weather icon" />
      </div>
    </div>
  );
};

export default OtherWeatherCard;
