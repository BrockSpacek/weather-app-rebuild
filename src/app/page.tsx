"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import BgImage from "@/assets/Weather Sprint One Piece Background.jpg";
import OtherWeatherCard from "@/components/OtherWeatherCard";
import MainCard from "@/components/MainCard";


export default function Home() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("March 18th, 2025");
  const [time, setTime] = useState("12:00pm");

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

      <div className="relative  w-full h-full min-h-screen p-6 ">
        <div className="flex justify-center items-center">
          <p className="mr-[4%] text-3xl"> {date} </p>
          <p className="ml-[4%] text-3xl"> {time} </p>
        </div>
        <div className="flex justify-center">
          <div className="w-[33%] mt-3">
            <Input
              id="location"
              placeholder="Location"
              onChange={(event) => setLocation(event.target.value)}
              className="bg-[#C38945] placeholder-black"
            />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <OtherWeatherCard />
          <OtherWeatherCard />
          <OtherWeatherCard />
          <OtherWeatherCard />
          <OtherWeatherCard />
        </div>
      </div>
    </main>
  );
}
