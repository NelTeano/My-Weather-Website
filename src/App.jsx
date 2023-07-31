
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import Weather from '../components/weatherContainer'



export default function App() {
  
  const apiKey = 'e3048c143d6e444baad63508233107';
  const PHapi = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Asia&days=1&aqi=no&alerts=no`;
  const LondonAPI = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=London&days=5&aqi=yes&alerts=no`;
  const CanadaAPI =`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Canada&days=5&aqi=yes&alerts=no`
  




  const [weatherPH, setWeatherPH] = useState(null);
  const [weatherLondon, setWeatherLondon] = useState(null);
  const [weatherCanada, setWeatherCanada] = useState(null);


  useEffect(()  => {
    // FETCHING PHILIPPINES WEATHER
    axios.get(PHapi)
      .then(response => {
        
        setWeatherPH(response.data);
      })
      .catch(error => {
        console.error('Error fetching Philippines data:', error);
      });

    // FETCHING LONDON WEATHER
    axios.get(LondonAPI)
      .then(response => {
        setWeatherLondon(response.data);
      })
      .catch(error => {
        console.error('Error fetching London data:', error);
      });

    // FETCHING CANADA WEATHER
    axios.get(CanadaAPI)
      .then(response => {
        setWeatherCanada(response.data);
      })
      .catch(error => {
        console.error('Error fetching Canada data:', error);
      });

  }, []);


  



  if (!weatherPH ) {
    return <div>Loading...</div>;
  }



  

  return (
    <>

    <h1 className='regionsTitle'>REGIONS</h1>
    <div className='regions'>
      <Weather 
        // LOCATION INFORMATION
          country={weatherPH.location.country}
          region={weatherPH.location.region}
          icon={weatherPH.current.condition.icon}
          locationTemp={weatherPH.current.temp_c}
          condition={weatherPH.current.condition.text}
          altText={weatherPH.current.condition.text}
        // PER HOUR WEATHER
        morning={weatherPH.forecast.forecastday[0].hour[6].time}
        sunrise={weatherPH.forecast.forecastday[0].hour[9].time}
        noon={weatherPH.forecast.forecastday[0].hour[12].time}
        evening={weatherPH.forecast.forecastday[0].hour[16].time}
        tonight={weatherPH.forecast.forecastday[0].hour[19].time}

        // PER HOUR ICONS
        morningIcon ={weatherPH.forecast.forecastday[0].hour[6].condition.icon}
        sunriseIcon={weatherPH.forecast.forecastday[0].hour[9].condition.icon}
        noonIcon={weatherPH.forecast.forecastday[0].hour[12].condition.icon}
        eveningIcon={weatherPH.forecast.forecastday[0].hour[16].condition.icon}
        tonightIcon={weatherPH.forecast.forecastday[0].hour[19].condition.icon}
      ></Weather>
      
      <Weather 
        // LOCATION INFORMATION
          country={weatherLondon.location.country}
          region={weatherLondon.location.region}
          icon={weatherLondon.current.condition.icon}
          locationTemp={weatherLondon.current.temp_c}
          condition={weatherLondon.current.condition.text}
          altText={weatherLondon.current.condition.text}
        // PER HOUR WEATHER
        morning={weatherLondon.forecast.forecastday[0].hour[6].time}
        sunrise={weatherLondon.forecast.forecastday[0].hour[9].time}
        noon={weatherLondon.forecast.forecastday[0].hour[12].time}
        evening={weatherLondon.forecast.forecastday[0].hour[16].time}
        tonight={weatherLondon.forecast.forecastday[0].hour[19].time}

        // PER HOUR ICONS
        morningIcon ={weatherLondon.forecast.forecastday[0].hour[6].condition.icon}
        sunriseIcon={weatherLondon.forecast.forecastday[0].hour[9].condition.icon}
        noonIcon={weatherLondon.forecast.forecastday[0].hour[12].condition.icon}
        eveningIcon={weatherLondon.forecast.forecastday[0].hour[16].condition.icon}
        tonightIcon={weatherLondon.forecast.forecastday[0].hour[19].condition.icon}
      ></Weather>

      <Weather 
        // LOCATION INFORMATION
          country={weatherCanada.location.country}
          region={weatherCanada.location.region}
          icon={weatherCanada.current.condition.icon}
          locationTemp={weatherCanada.current.temp_c}
          condition={weatherCanada.current.condition.text}
          altText={weatherCanada.current.condition.text}
        // PER HOUR WEATHER
        morning={weatherCanada.forecast.forecastday[0].hour[6].time}
        sunrise={weatherCanada.forecast.forecastday[0].hour[9].time}
        noon={weatherCanada.forecast.forecastday[0].hour[12].time}
        evening={weatherCanada.forecast.forecastday[0].hour[16].time}
        tonight={weatherCanada.forecast.forecastday[0].hour[19].time}

        // PER HOUR ICONS
        morningIcon ={weatherCanada.forecast.forecastday[0].hour[6].condition.icon}
        sunriseIcon={weatherCanada.forecast.forecastday[0].hour[9].condition.icon}
        noonIcon={weatherCanada.forecast.forecastday[0].hour[12].condition.icon}
        eveningIcon={weatherCanada.forecast.forecastday[0].hour[16].condition.icon}
        tonightIcon={weatherCanada.forecast.forecastday[0].hour[19].condition.icon}
      ></Weather>
  </div>
      
      


    </>
  )
}
