import React, { useState } from 'react'
import Sun from '@/assets/Sun 02.png'

const OtherWeatherCard = () => {
    const [day, setDay] = useState('This Day');
    const [temp, setTemp] = useState("50°");
    const [low, setLow] = useState("40°");
    const [high, setHigh] = useState("60°");
    const [icon, setIcon] = useState('');


  return (
    <div className='bg-[#D1A879] w-[15%]'>
        <p className='text-xl text-center underline mt-3'>{day}</p>
        <p className='text-center mt-2'> Average </p>
        <p className='text-center mt-2 text-4xl'>{temp}</p>
        <div className='mt-2 flex justify-center'>
            <img className='h-12 w-12' src={icon} alt="Weather icon" />
        </div>
        <p className='text-center mt-2'> High/Low</p>
        <p className='text-center text-3xl'>{low}/{high}</p>

    </div>
  )
}

export default OtherWeatherCard