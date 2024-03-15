import React, { useState, setState } from "react";

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const city = "New York";

  useEffect(() => {
    fetch("http://127.0.0.1:5000/weather/${city}")
      .then(response => response.json())
      .then(data => setWeatherData(weatherData(data))
      .catch(error => console.error("Error:", error))
  }, [city])
  
  return (
    <div>
      <h1>Weather Information</h1>
      {weatherData && (
        <div>
          <p>City: {weatherData.city}</p>
          <p>Temperature: {weatherData.temperature}</p>
          <p>Description: {weatherData.description}</p>
    </div>
  )}
  </div>
)}

export default WeatherApp
