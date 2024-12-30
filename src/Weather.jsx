import axios from "axios";
import React, { useState } from "react";
// import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"09bc62e342071a2abae27a18638bad64"}`
        `https://api.weatherapi.com/v1/current.json?key=d347dfb1a00b4f86add45435242510&q=${city}`
      );

      setWeather(response.data);
      console.log(response);
    } catch (error) {
      console.log("Error Fatching Weather data ", error);
    }
  };
  const handleClick = () => {
    fetchWeather();
  };
  return (
    <> 
    
    <div className="main-dev">
    <h1 className="weather-app">Weather App</h1>
      <input
        type="text"
        className="input-bar"
        placeholder="Enter Your CIty Name"
        onChange={handleCityChange}
        value={city}
      />
      <button className="btn" onClick={handleClick}>
        Get Weather
      </button>

      {weather && (
        <div>
          <h1>Location :{weather.location.name}</h1>
          <p>Region :{weather.location.region}</p>
          <p>Country :{weather.location.country}</p>
          <p>Temp :{weather.current.temp_c}</p>
          <p>Humudity :{weather.current.humidity} </p>
          <p>Localtime :{weather.location.localtime}</p>
          <p>FeelsLike : {weather.current.feelslike_c}</p>

          {/* <div>
            <img
              src={`https:${weather.current.condition.icon}`}
              alt=""/> {weather.current.condition.text}
            </div> */}
          
        </div>
      )}
    </div>
    </>
  );
};

export default Weather;
