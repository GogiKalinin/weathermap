import React, { useEffect, useState } from 'react';
import './App.css';
import { MainPage } from './Components/pages/MainPage';


export const App = () => {
  const [city, setCity] = useState('moscow')
  const [weatherMode, setWeatherMode] = useState('current')
  const [stateData, setStateData] = useState([])

  console.log(weatherMode)
  console.log(city)

  function init() {
    console.log(city)
    if (weatherMode === 'current') {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d982b206b7125a363d94918d08ebf560`)
    .then((resp) => {return resp.json()})
    .then((data) => {
      console.log('data', data)
      console.log('city', data.name)
      setStateData(data)
      console.log(stateData)
  })
    // .catch(() => {
    //     init()
    //   })
    }
    if (weatherMode === 'days') {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d982b206b7125a363d94918d08ebf560`)
    .then((resp) => {return resp.json()})
    .then((data) => {
      console.log('data', data)
      console.log('city', data.name)
      console.log('days data')
      setStateData(data)
      console.log(stateData)
    })    
  }
  }
    
    setInterval(() => {
      init()
    }, 1000000) //Обновляет инфу каждые 1000секунд

    useEffect(() => {   
      init()
    }, [city, weatherMode]);    
    console.log(weatherMode)
  console.log(stateData)

    return (
      <div className="App">
        <MainPage data={stateData} setCity={setCity} weatherMode={weatherMode} setWeatherMode={setWeatherMode}/>
      </div>
    );
}

export default App;
