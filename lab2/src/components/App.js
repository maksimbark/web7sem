import React from 'react';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'
import LargeCityInfo from "./LargeCityInfo";
import FavoriteCityPack from './FavoriteCityPack'
import configureStore from '../store/configureStore';


const store = configureStore();

const favCity =
    [
        {
            'city': 'moscow',
            'state': {
                "coord": {
                    "lon": 37.62,
                    "lat": 55.75
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "base": "stations",
                "main": {
                    "temp": 27.37,
                    "pressure": 1017,
                    "humidity": 86,
                    "temp_min": 276.48,
                    "temp_max": 278.15
                },
                "visibility": 10000,
                "wind": {
                    "speed": 2,
                    "deg": 240
                },
                "clouds": {
                    "all": 0
                },
                "dt": 1569349865,
                "sys": {
                    "type": 1,
                    "id": 9029,
                    "message": 0.0065,
                    "country": "RU",
                    "sunrise": 1569295059,
                    "sunset": 1569338749
                },
                "timezone": 10800,
                "id": 524901,
                "name": "Moscow",
                "cod": 200
            }
        },
        {
            'city': 'kiev',
            'state': {
                "coord": {
                    "lon": 37.62,
                    "lat": 55.75
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "base": "stations",
                "main": {
                    "temp": 277.37,
                    "pressure": 1017,
                    "humidity": 86,
                    "temp_min": 276.48,
                    "temp_max": 278.15
                },
                "visibility": 10000,
                "wind": {
                    "speed": 2,
                    "deg": 240
                },
                "clouds": {
                    "all": 0
                },
                "dt": 1569349865,
                "sys": {
                    "type": 1,
                    "id": 9029,
                    "message": 0.0065,
                    "country": "RU",
                    "sunrise": 1569295059,
                    "sunset": 1569338749
                },
                "timezone": 10800,
                "id": 524901,
                "name": "Moscow",
                "cod": 200
            }
        },
        {
            'city': 'piter',
            'state': {
                "coord": {
                    "lon": 37.62,
                    "lat": 55.75
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "base": "stations",
                "main": {
                    "temp": 277.37,
                    "pressure": 1017,
                    "humidity": 86,
                    "temp_min": 276.48,
                    "temp_max": 278.15
                },
                "visibility": 10000,
                "wind": {
                    "speed": 2,
                    "deg": 240
                },
                "clouds": {
                    "all": 0
                },
                "dt": 1569349865,
                "sys": {
                    "type": 1,
                    "id": 9029,
                    "message": 0.0065,
                    "country": "RU",
                    "sunrise": 1569295059,
                    "sunset": 1569338749
                },
                "timezone": 10800,
                "id": 524901,
                "name": "Moscow",
                "cod": 200
            }
        },
        {
            'city': 'catcity',
            'state': {
                "coord": {
                    "lon": 37.62,
                    "lat": 55.75
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "base": "stations",
                "main": {
                    "temp": 277.37,
                    "pressure": 1017,
                    "humidity": 86,
                    "temp_min": 276.48,
                    "temp_max": 278.15
                },
                "visibility": 10000,
                "wind": {
                    "speed": 2,
                    "deg": 240
                },
                "clouds": {
                    "all": 0
                },
                "dt": 1569349865,
                "sys": {
                    "type": 1,
                    "id": 9029,
                    "message": 0.0065,
                    "country": "RU",
                    "sunrise": 1569295059,
                    "sunset": 1569338749
                },
                "timezone": 10800,
                "id": 524901,
                "name": "Moscow",
                "cod": 200
            }
        },
    ];


function App() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-2">Погода для тебя</h1>
            </div>
            <LargeCityInfo/>
            <Provider store={store}>
                <FavoriteCityPack/>
            </Provider>
        </div>
    )
}


export default App