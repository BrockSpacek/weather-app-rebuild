
import React, { useEffect, useState } from 'react'
import { getWeatherData } from '@/lib/service';


const MainCard = () => {
        const [temp, setTemp] = useState(0);
        const [feelsLike, setFeelsLike] = useState(0)
        const [icon, setIcon] = useState('');
        const [weatherType, setWeatherType] = useState('');
        

        useEffect(() => {
            const getData = async () => {
                const weatherData = await getWeatherData();
                console.log(weatherData);
               
                setTemp(Math.round(weatherData.main.temp));
                setFeelsLike(Math.round(weatherData.main.feels_like));
                setIcon(`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`)
                setWeatherType(weatherData.weather[0].description);
            }
    
            getData();
        }, []);

  return (
    <div className='bg-[#D1A879] w-full max-w-lg p-4 rounded shadow-lg'>
    <div className='flex justify-evenly items-center'>
      <div className='mr-[10%]'>
        <p className='font-bold text-3xl underline text-center'>Currently</p>
        <p className='text-5xl font-bold text-center mt-8'>{temp}°</p>
        <p className='text-lg mt-8 text-center'>Feels Like: {feelsLike}°</p>
      </div>
      <div className='text-center'>
        <div className='flex justify-center'>
            <img className='w-[140px] h-[125px]' src={icon} alt="Weather Icon" />
        </div>
        <p className='text-2xl font-bold mt-2'>{weatherType}</p>
      </div>
    </div>
  </div>
  )
}

export default MainCard

