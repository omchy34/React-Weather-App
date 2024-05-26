import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function HanddleChange(e) {
    setInput(e.target.value);
  }

  function HanddleClick() {
    let fetchData = fetch(
      `http://api.weatherapi.com/v1/current.json?key=01d326756aea402aa4c122534241004&q=${input}&aqi=no`
    );
    fetchData
      .then((reponse) => {
        return reponse.json();
      })
      .then((value) => {
        // console.log([value]);
        const {current , location } = value;
        let DATA = {
          city: location.name,
          temp: current.temp_c,
          wind: current.wind_kph,
          humidity: current.humidity,
        };
        setWeatherData(DATA);
      })
      .catch(function (error) {
        console.log(`city is not avaible else err fetching data ${error}`);
      });
  }

  console.log(weatherData);
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="search">
            <input
              type="text"
              id="input"
              value={input}
              onChange={HanddleChange}
            />
            <button>
              <i
                className="fa-solid fa-magnifying-glass"
                id="search-btn"
                onClick={HanddleClick}
              ></i>
            </button>
          </div>

          <div className="weather-data">
            <img src="png.png" alt="no img found" />
            <p id="temp">{weatherData ? `${weatherData.temp}°C` : "00°C"}</p>
            <p id="city-name">{weatherData ? weatherData.city : "City Name"}</p>
          </div>
          <div className="weather-extrnl">
            <i className="fa-solid fa-wind" id="om"></i>
            <p id="wind">{weatherData ? `${weatherData.wind} KM/H` : "00KM/H"}</p>
            <img src="humidity.png" alt="no images found" />
            <p id="humidity">{weatherData ? `${weatherData.humidity}%` : "00%"}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
