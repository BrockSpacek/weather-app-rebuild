import React, { useState } from 'react'
import Sun from '@/assets/Sun 02.png'

const OtherWeatherCard = () => {
    const [day, setDay] = useState('This Day');
    const [temp, setTemp] = useState("50°");
    const [low, setLow] = useState("40°");
    const [high, setHigh] = useState("60°");
    const [icon, setIcon] = useState('')


  return (
    <div className='bg-[#D1A879] w-[15%]'>
        <p className='text-xl text-center'>{day}</p>
        <p className='text-center'> Average </p>
        <p className='text-center'>{temp}</p>
        <div>
            <img src='' alt="Weather icon" />
        </div>
        <p className='text-center'> High/Low</p>
        <p className='text-center'>{low}/{high}</p>

    </div>
  )
}

export default OtherWeatherCard