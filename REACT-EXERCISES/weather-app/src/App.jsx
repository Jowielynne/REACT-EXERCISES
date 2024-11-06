import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const apiKey = "22cb5ca1d24119f664a19624bf75938a";
  const [city, setCity] = useState();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  const [weather, setWeather] = useState();

  const getWeatherHandler = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data)
        console.log(data)
      })
      .catch((error) => {
        console.log("Error: " + error)
      })
  };

  const submitForm = (e) => {
    e.preventDefault()
    getWeatherHandler()
  }

  return (
    <section className="container">
      <form onSubmit={submitForm}>
        <input type="text" placeholder="Zoek een stad" onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Zoeken</button>
      </form>
      <div className='image'>
        <h1>{city}</h1>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="Weather Icon"
        />
      </div>
      <p>Temperatuur: {weather && Math.floor(weather.main.temp)} °C</p>
      <p>Gevoelstemperatuur: {weather && weather.main.feels_like} °C</p>
      <p>Luchtvochtigheid: {weather && weather.main.humidity}%</p>
      <p>Wind snelheid: {weather && weather.wind.speed} m/s</p>

    </section>
  )
}

export default App
