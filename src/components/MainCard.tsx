
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
               
                setTemp(weatherData.main.temp);
                setFeelsLike(weatherData.main.feels_like);
                setIcon(`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`)
                setWeatherType(weatherData.weather[0].description)
            }
    
            getData();
        }, []);

  return (
    <div className='bg-[#D1A879] w-[40%] flex justify-around'>
        <div>
            <p className='underline text-4xl'>Currently</p>
            <p className='text-5xl mt-4 text-center'>{temp}°</p>
            <p className='text-2xl mt-8'>Feels Like: {feelsLike}°</p>
        </div>
        <div>
            <div className='flex justify-center'>
                <img className='w-[140px] h-[125px]' src={icon} alt="Weather Icon" />
            </div>
            <p className='text-3xl text-center'> {weatherType} </p>
        </div>
    </div>
  )
}

export default MainCard