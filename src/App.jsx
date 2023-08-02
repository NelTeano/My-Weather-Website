
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import Weather from '../components/weatherContainer'
import Board from '../components/weatherBoard'



export default function App() {
  
  const apiKey = 'e3048c143d6e444baad63508233107';
  const PHapi = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Philippines&aqi=no`;
  const LondonAPI = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=London&days=5&aqi=yes&alerts=no`;
  const CanadaAPI =`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Canada&days=5&aqi=yes&alerts=no`
  const weatherBoardAPI = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Batangas&days=10&aqi=yes&alerts=no`;



// REGIONS WEATHER DATA
  const [weatherPH, setWeatherPH] = useState(null);
  const [weatherLondon, setWeatherLondon] = useState(null);
  const [weatherCanada, setWeatherCanada] = useState(null);

// BOARD WEATHER DATA
  const [boardWeather, setBoardWeather] = useState(null);


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

      axios.get(weatherBoardAPI)
      .then(response => {
        setBoardWeather(response.data);
        
      })
      .catch(error => {
        console.error('Error fetching Canada data:', error);
      });

      
  }, []);


  

  if (!weatherPH ) {
    return <div>Loading...</div>;
  }

  const forecastData = {
    forecast: {
      forecastday: [
        { date: boardWeather.forecast.forecastday[0].date,
          icon: boardWeather.forecast.forecastday[0].day.condition.icon,
          condition: boardWeather.forecast.forecastday[0].day.condition.text
        },
        { date: boardWeather.forecast.forecastday[1].date,
          icon: boardWeather.forecast.forecastday[1].day.condition.icon,
          condition: boardWeather.forecast.forecastday[1].day.condition.text
        },
        { date: boardWeather.forecast.forecastday[2].date,
          icon: boardWeather.forecast.forecastday[2].day.condition.icon,
          condition: boardWeather.forecast.forecastday[2].day.condition.text
        },
        { date: boardWeather.forecast.forecastday[3].date,
          icon: boardWeather.forecast.forecastday[3].day.condition.icon,
          condition: boardWeather.forecast.forecastday[3].day.condition.text
        },
        { date: boardWeather.forecast.forecastday[4].date,
          icon: boardWeather.forecast.forecastday[4].day.condition.icon,
          condition: boardWeather.forecast.forecastday[4].day.condition.text
        },
        { date: boardWeather.forecast.forecastday[5].date,
          icon: boardWeather.forecast.forecastday[5].day.condition.icon,
          condition: boardWeather.forecast.forecastday[5].day.condition.text
        },
        { date: boardWeather.forecast.forecastday[6].date,
          icon: boardWeather.forecast.forecastday[6].day.condition.icon,
          condition: boardWeather.forecast.forecastday[6].day.condition.text
        },
      ],
    },
  };
  
  // Function to get the day name from a date string (e.g., "2023-08-02" -> "Monday")
  function getDayName(dateString) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);
    return days[date.getDay()];
  }
  
  // Loop through the forecast data and update the date with the corresponding day name
  var updatedForecastData = forecastData.forecast.forecastday.map((entry) => {
    return {
      ...entry,
      dayName: getDayName(entry.date),
    };
  });
  
  // Display the forecast data with day names
  console.log(updatedForecastData)







  const boardData = {
    location: boardWeather.location.name,
    icon: boardWeather.current.condition.icon,
    celcius: boardWeather.current.temp_c,
    chance: boardWeather.forecast.forecastday[0].day.daily_chance_of_rain,


    // PER HOUR WEATHER: ,
    morning: boardWeather.forecast.forecastday[0].hour[6].time.substr(11,5),
    sunrise: boardWeather.forecast.forecastday[0].hour[9].time.substr(11,5),
    noon: boardWeather.forecast.forecastday[0].hour[12].time.substr(11,5),
    evening: boardWeather.forecast.forecastday[0].hour[16].time.substr(11,5),
    tonight: boardWeather.forecast.forecastday[0].hour[19].time.substr(11,5),

    //PER CELSIUS: ,
    morningCelcius: boardWeather.forecast.forecastday[0].hour[6].temp_c,
    sunriseCelcius: boardWeather.forecast.forecastday[0].hour[9].temp_c,
    noonCelcius: boardWeather.forecast.forecastday[0].hour[12].temp_c,
    eveningCelcius: boardWeather.forecast.forecastday[0].hour[16].temp_c,
    tonightCelcius: boardWeather.forecast.forecastday[0].hour[19].temp_c,

    // PER HOUR ICONS: ,
    morningIcon: boardWeather.forecast.forecastday[0].hour[6].condition.icon ,
    sunriseIcon: boardWeather.forecast.forecastday[0].hour[9].condition.icon,
    noonIcon: boardWeather.forecast.forecastday[0].hour[12].condition.icon,
    eveningIcon: boardWeather.forecast.forecastday[0].hour[16].condition.icon,
    tonightIcon: boardWeather.forecast.forecastday[0].hour[19].condition.icon,


    // AIR CONDITIONS 
    reelFeel: boardWeather.current.feelslike_c,
    uvIndex: boardWeather.current.uv,
    wind: boardWeather.current.wind_kph,

    // PER DAY FORECAST: ,
    day1: updatedForecastData[1].dayName,
    day2: updatedForecastData[2].dayName,
    day3: updatedForecastData[3].dayName,
    day4: updatedForecastData[4].dayName,
    day5: updatedForecastData[5].dayName,
    day6: updatedForecastData[6].dayName,
    
    day1Condition: updatedForecastData[1].condition,
    day2Condition: updatedForecastData[2].condition,
    day3Condition: updatedForecastData[3].condition,
    day4Condition: updatedForecastData[4].condition,
    day5Condition: updatedForecastData[5].condition,
    day6Condition: updatedForecastData[6].condition,

    day1Icon: updatedForecastData[1].icon,
    day2Icon: updatedForecastData[2].icon,
    day3Icon: updatedForecastData[3].icon,
    day4Icon: updatedForecastData[4].icon,
    day5Icon: updatedForecastData[5].icon,
    day6Icon: updatedForecastData[6].icon

  }


  console.log(boardData)

  
  

  

  return (
    <>

    <h1 style={{
      marginTop: '20px'
    }} className='regionsTitle'>COUNTRY & CAPITALS</h1>
      
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
        morning={weatherPH.forecast.forecastday[0].hour[6].time.substr(11,5)}
        sunrise={weatherPH.forecast.forecastday[0].hour[9].time.substr(11,5)}
        noon={weatherPH.forecast.forecastday[0].hour[12].time.substr(11,5)}
        evening={weatherPH.forecast.forecastday[0].hour[16].time.substr(11,5)}
        tonight={weatherPH.forecast.forecastday[0].hour[19].time.substr(11,5)}

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
        morning={weatherLondon.forecast.forecastday[0].hour[6].time.substr(11,5)}
        sunrise={weatherLondon.forecast.forecastday[0].hour[9].time.substr(11,5)}
        noon={weatherLondon.forecast.forecastday[0].hour[12].time.substr(11,5)}
        evening={weatherLondon.forecast.forecastday[0].hour[16].time.substr(11,5)}
        tonight={weatherLondon.forecast.forecastday[0].hour[19].time.substr(11,5)}

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
        morning={weatherCanada.forecast.forecastday[0].hour[6].time.substr(11,5)}
        sunrise={weatherCanada.forecast.forecastday[0].hour[9].time.substr(11,5)}
        noon={weatherCanada.forecast.forecastday[0].hour[12].time.substr(11,5)}
        evening={weatherCanada.forecast.forecastday[0].hour[16].time.substr(11,5)}
        tonight={weatherCanada.forecast.forecastday[0].hour[19].time.substr(11,5)}

        // PER HOUR ICONS
        morningIcon ={weatherCanada.forecast.forecastday[0].hour[6].condition.icon}
        sunriseIcon={weatherCanada.forecast.forecastday[0].hour[9].condition.icon}
        noonIcon={weatherCanada.forecast.forecastday[0].hour[12].condition.icon}
        eveningIcon={weatherCanada.forecast.forecastday[0].hour[16].condition.icon}
        tonightIcon={weatherCanada.forecast.forecastday[0].hour[19].condition.icon}
      ></Weather>
    </div>
    
      
      <div>
        <Board 
    location={boardData.location}
    icon={boardData.icon}
    celcius={boardData.celcius}
    chance={boardData.chance}


    // PER HOUR WEATHER
    morning={boardData.morning}
    sunrise={boardData.sunrise}
    noon={boardData.noon}
    evening={boardData.evening}
    tonight={boardData.tonight}

    //PER CELSIUS
    morningCelcius={boardData.morningCelcius}
    sunriseCelcius={boardData.sunriseCelcius}
    noonCelcius={boardData.noonCelcius}
    eveningCelcius={boardData.eveningCelcius}
    tonightCelcius={boardData.tonightCelcius}

    // PER HOUR ICONS
    morningIcon={boardData.morningIcon}
    sunriseIcon={boardData.sunriseIcon}
    noonIcon={boardData.noonIcon}
    eveningIcon={boardData.eveningIcon}
    tonightIcon={boardData.tonightIcon}

    // AIR CONDITIONS 
    reelFeel={boardData.reelFeel}
    uvIndex={boardData.uvIndex}
    wind={boardData.wind}

    // PER DAY FORECAST
    day1={boardData.day1}
    day2={boardData.day2}
    day3={boardData.day3}
    day4={boardData.day4}
    day5={boardData.day5}
    day6={boardData.day6}
    
    
    day1Icon={boardData.day1Icon}    
    day2Icon={boardData.day2Icon}
    day3Icon={boardData.day3Icon}
    day4Icon={boardData.day4Icon}
    day5Icon={boardData.day5Icon}
    day6Icon={boardData.day6Icon}

    day1Condition={boardData.day1Condition}
    day2Condition={boardData.day2Condition}
    day3Condition={boardData.day3Condition}
    day4Condition={boardData.day4Condition}
    day5Condition={boardData.day5Condition}
    day6Condition={boardData.day6Condition}


        ></Board>
      </div>


    </>
  )
}




