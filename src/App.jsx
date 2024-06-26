import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function HanddleChange(e) {
    setInput(e.target.value);
  }

  function HanddleClick() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=01d326756aea402aa4c122534241004&q=${input}&aqi=no`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((value) => {
        const { current, location } = value;
        let DATA = {
          city: location.name,
          temp: current.temp_c,
          wind: current.wind_kph,
          humidity: current.humidity,
        };
        setWeatherData(DATA);
      })
      .catch((error) => {
        console.log(`City is not available or error fetching data: ${error}`);
      });
  }

  return (
    <div className="main">
      <div className="container">
        <div className="search">
          <input type="text" value={input} onChange={HanddleChange} />
          <button onClick={HanddleClick}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="weather-data">
          <img src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_49-256.png" alt="Weather icon" />
          <p>{weatherData ? `${weatherData.temp}°C` : "00°C"}</p>
          <p>{weatherData ? weatherData.city : "City Name"}</p>
        </div>
        <div className="weather-extrnl">
          <i className="fa-solid fa-wind"></i>
          <p>{weatherData ? `${weatherData.wind} KM/H` : "00KM/H"}</p>
          <img src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_12-256.png" alt="Humidity" />
          <p>{weatherData ? `${weatherData.humidity}%` : "00%"}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
