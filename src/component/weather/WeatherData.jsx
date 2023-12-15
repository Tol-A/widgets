import { WiHumidity } from "react-icons/wi";
import { BsWind } from "react-icons/bs";
function WeatherData({data, error}) {

  return (
    <>
        <div className="weatherData">
                <p>{error}</p>
                <img src = {data.image}  alt = ''/>
                <h1>{Math.round(data.celcius)}°C</h1>
                <h2>{data.name}</h2>
              </div>
            <div className="weatherDetails">
                <b>humidity: {Math.round(data.humidity)}<WiHumidity/></b>
                <b>gust: {Math.round(data.speed)} m/s <BsWind /> </b>
         </div>
    </>
  )
}

export default WeatherData