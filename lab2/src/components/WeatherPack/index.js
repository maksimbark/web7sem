import React from 'react'
import WeatherEntity from '../WeatherEntity'
import './style.css'


export default function WeatherPack({serverInfo}) {


    const data = [
        {
            type: 'Температура',
            value: serverInfo.main.temp + ' ˚C'
        },
        {
            type: 'Скорость ветра',
            value: serverInfo.wind.speed + ' м/с'
        },
        {
            type: 'Состояние неба',
            value: serverInfo.weather[0].description
        },
        {
            type: 'Давление',
            value: serverInfo.main.pressure + ' КПа'
        },
        {
            type: 'Влажность',
            value: serverInfo.main.humidity + ' %'
        }
    ];

    const weatherData = data.map(data =>
        <li key={data.type}><WeatherEntity data={data}/></li>
    );

    return (
        <ul className="weather-list__li">
            {weatherData}
        </ul>
    );

}
