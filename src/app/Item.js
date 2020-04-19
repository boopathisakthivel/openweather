import React, { useState, useEffect } from "react";

const WEATHER_API= "https://api.openweathermap.org/data/2.5/weather?appid=13fdb39fa4267ca2300edbfdd1e93501&id=";
const WEATHER_KELVIN = 273.15;
const WEATHER_FREQUENCY = 5000;

const getCelsius = (temp) => {
    return (temp ? (temp - WEATHER_KELVIN).toFixed() : 0);
}

const ItemDetails = ({city = {}}) => {
    const [weather, setWeather] = useState({});

    const checkWeather = () => {
        fetch(`${WEATHER_API}${city.id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setWeather(data);
        })
        .catch((ex) => {
            console.error(ex);
        });
    };

    useEffect(() => {
        checkWeather();
        const timer = setInterval(() => {
            checkWeather();
        }, WEATHER_FREQUENCY);
        return () => { 
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="item-container">
            <div className="item-wrapper no-space-wrapper">
                <h2>{city.name}</h2>
                <h3>{(weather.weather && weather.weather[0]) ? weather.weather[0].main : ''}</h3>
            </div>
            <div className="item-wrapper full-column-size">
                <h3>{getCelsius(weather.main && weather.main.temp)}°</h3>
            </div>
            <div className="item-wrapper full-column-size">
                <div className="status" />
            </div>
            <div className="item-wrapper">
                <div>H {getCelsius(weather.main && weather.main.temp_min)}°</div>
                <div>L {getCelsius(weather.main && weather.main.temp_min)}°</div>
            </div>
        </div>
    );
};

export default ItemDetails;
