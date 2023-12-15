import React, { useEffect, useState } from 'react'
import './MyWeatherStyle.css'
import axios from "axios";
import { IoSearchOutline } from "react-icons/io5";
import logo1 from '../../images/04d.png'
import logo2 from '../../images/01d.png'
import logo3 from '../../images/09d.png'
import logo4 from '../../images/10d.png'
import logo5 from '../../images/50d.png'
import logo6 from '../../images/13d.png'
import MyLoader from './MyLoader';
import WeatherData from './WeatherData';


function MyWeather() {
    const [data, setData] = useState(null)
    const [error, setError] = useState('')
    const [name, setName] = useState('Moscow')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        handleClick()
    }, [])

    const handleClick = () => {
        if(name !== '') {
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=dea64e4042758374eb0af1bd0c936988&&units=metric`)
          .then(res => {
            let imagePath = []  
              if(res.data.weather[0].main === 'Clouds') {
                imagePath = logo1
              } else if((res.data.weather[0].main === 'Clear')) {
                imagePath = logo2
              } else if((res.data.weather[0].main === 'Rain')) {
                imagePath = logo3
              } else if((res.data.weather[0].main === 'Drizzle')) {
                imagePath = logo4
              }  else if((res.data.weather[0].main === 'Mist')) {
                imagePath = logo5
              } else {
                imagePath = logo6
              }
            setData({ 
                ...data, 
                celcius: res.data.main.temp,
                name: res.data.name,
                humidity: res.data.main.humidity,
                speed: res.data.wind.speed,
                image: imagePath,
              })
              setError('');
              setLoading(false)
          })
          .catch(err => {
            if(err.response.status === 404 ) {
              setError('invalid city name')
            } else {
              setError('')
            }
          })
        }
      }

  return (
    <div className="weather">
        <div className="knowWeather">
          <input onChange = {e => setName(e.target.value)}/>
          <button onClick = {handleClick}><IoSearchOutline /></button>
        </div> 
        {!loading ? 
          <WeatherData
           data = {data}
           error = { error}
          /> : 
          <MyLoader/>
        }
    </div>
  )
}

export default MyWeather