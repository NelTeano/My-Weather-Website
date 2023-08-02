import '../components/styles/weatherBoard.css'


export default function weatherBoard({
    location,
    icon,
    celcius,
    chance,


    // PER HOUR WEATHER
    morning,
    sunrise,
    noon,
    evening,
    tonight,

    //PER CELSIUS
    morningCelcius,
    sunriseCelcius,
    noonCelcius,
    eveningCelcius,
    tonightCelcius,

    // PER HOUR ICONS
    morningIcon,
    sunriseIcon,
    noonIcon,
    eveningIcon,
    tonightIcon,

    // AIR CONDITIONS 
    reelFeel,
    uvIndex,
    wind, 

    // PER DAY FORECAST
    day1,
    day2,
    day3,
    day4,
    day5,
    day6,
    
    day1Condition,
    day2Condition,
    day3Condition,
    day4Condition,
    day5Condition,
    day6Condition,

    day1Icon,
    day2Icon,
    day3Icon,
    day4Icon,
    day5Icon,
    day6Icon

    

}) 





{
    return (
        <div className='board-container'>
            <div className='weatherBoard'>
                <div className='locationBoard'>
                    <div>
                        <h2 
                            style={{
                                    marginTop: '40px',
                                    fontSize: '40px'
                            }}>
                        {location}</h2>
                        <p>Chance of Rain {chance}%</p>
                        <h1 
                            style={{
                                marginTop: '40px',
                                fontSize: '70px'
                            }}>
                        {celcius}°</h1>
                    </div>
                    <div>
                        <img src={icon}></img>
                    </div>
                </div>
                <div className='forecastBoard'>
                    <h3>TODAY'S FORECAST</h3>
                    <div className='forecastTime'>
                        <div >
                            <h3>{morning}</h3>
                            <img src={morningIcon}></img>
                            <h1>{morningCelcius}°</h1>
                        </div>
                        <div>
                            <h3>{sunrise}</h3>
                            <img src={sunriseIcon}></img>
                            <h1>{sunriseCelcius}°</h1>
                        </div>
                        <div>
                            <h3>{noon}</h3>
                            <img src={noonIcon}></img>
                            <h1>{noonCelcius}°</h1>
                        </div>
                        <div>
                            <h3>{evening}</h3>
                            <img src={eveningIcon}></img>
                            <h1>{eveningCelcius}°</h1>
                        </div>
                        <div>
                            <h3>{tonight}</h3>
                            <img src={tonightIcon}></img>
                            <h1>{tonightCelcius}°</h1>
                        </div>
                    </div>
                </div>
                <div className='airconditionBoard'>
                        <h3>AIR CONDITIONS</h3>
                    <div className='airCondition'>
                        <div className='conditionDetails'>
                            <div>
                                <h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" width='50' height="16" fill="currentColor" className="bi bi-thermometer-half" viewBox="0 0 16 16">
                                        <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z"/>
                                        <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
                                    </svg>
                                    Reel Feel
                                </h2>
                                <h1>{reelFeel}°</h1>
                            </div>
                            <div style={{marginLeft: '38%'}}>
                                <h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" width='50' height="16" fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
                                        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                    Wind
                                </h2>
                                <h1>{wind} km/h</h1>
                            </div>
                        </div>
                        <div className='conditionDetails'>
                            <div>
                                <h2>
                                    <svg  xmlns="http://www.w3.org/2000/svg" width='50' height="16" fill="currentColor" className="bi bi-droplet-half" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                                        <path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
                                    </svg>
                                    Chance of Rain
                                </h2>
                                <h1>{chance}%</h1>
                            </div>
                            <div style={{marginLeft: '30%'}}>
                                <h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" width='50' height="16" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                                        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8    0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                                    </svg>
                                    UV Index
                                </h2>
                                <h1>{uvIndex}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='perDaysBoard'>
                    <div className='daysForecast'>
                        <h2>7-DAY FORECAST</h2>
                        <div className='daysForecastBox'>
                            <p>Today</p>
                            <div style={{marginLeft: '30%'}}>
                                <img src={icon}></img>
                                <h3>Morning</h3>
                            </div>
                        </div>
                        <div className='daysForecastBox'>
                            <p>{day1}</p>
                            <div style={{marginLeft: '30%'}}>
                                <img src={day1Icon}></img>
                                <h3>{day1Condition}</h3>
                            </div>
                        </div>
                        <div className='daysForecastBox'>
                            <p>{day2}</p>
                            <div style={{marginLeft: '30%'}}>
                                <img src={day2Icon}></img>
                                <h3>{day2Condition}</h3>
                            </div>
                        </div>
                        <div className='daysForecastBox'>
                            <p>{day3}</p>
                            <div style={{marginLeft: '30%'}}>
                                <img src={day3Icon}></img>
                                <h3>{day3Condition}</h3>
                            </div>
                        </div>
                        <div className='daysForecastBox'>
                            <p>{day4}</p>
                            <div style={{marginLeft: '30%'}}>
                                <img src={day4Icon}></img>
                                <h3>{day4Condition}</h3>
                            </div>
                        </div>
                        <div className='daysForecastBox'>
                            <p>{day5}</p>
                            <div style={{marginLeft: '30%'}}>
                                <img src={day5Icon}></img>
                                <h3>{day5Condition}</h3>
                            </div>
                        </div>
                        <div style={{border: 'none'}} className='daysForecastBox'>
                            <p>{day6}</p>
                            <div style={{marginLeft: '30%'}}>
                                <img src={day6Icon}></img>
                                <h3>{day6Condition}</h3>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
