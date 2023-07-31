
import '../components/styles/weatherContainer.css'



export default function Weathercontainer({
    // LOCATION INFORMATION
    country,
    region, 
    icon, 
    altText, 
    locationTemp, 
    condition, 

    // PER HOUR WEATHER
    morning,
    sunrise,
    noon,
    evening,
    tonight,

    // PER HOUR ICONS
    morningIcon,
    sunriseIcon,
    noonIcon,
    eveningIcon,
    tonightIcon

    }) {
    

    const info = {
        country: country,
        region: region,
        Weathericon: icon,
        alt: altText,
        temp: locationTemp,
        Weathercondition: condition
    }
    const hour = {
        morning: morning,
        sunrise: sunrise,
        afternoon: noon,
        evening: evening,
        tonight: tonight
    }

    const hourIcons = {
        morning: morningIcon,
        sunrise: sunriseIcon,
        afternoon: noonIcon,
        evening: eveningIcon,
        tonight: tonightIcon
    }
    

    
    
    
    return (
        <>
            <div className="container">
                <div className='box'>
                    <div>
                        <h1>{info.country}</h1>
                        <h2>{info.region}</h2>
                    </div>
                    <div>
                        <img src={info.Weathericon} alt={info.alt}></img>
                    </div>
                    <div>
                        <h1>{info.temp}°C</h1>
                        <h2>{info.Weathercondition}</h2>
                    </div>
                    <div className='forecast'>
                            <div>
                                <h3>{hour.morning}</h3>
                                <img src={hourIcons.morning} ></img>
                            </div>
                            <div>
                                <h3>{hour.sunrise}</h3>
                                <img src={hourIcons.sunrise} ></img>
                            </div>
                            <div>
                                <h3>{hour.afternoon}</h3>
                                <img src={hourIcons.afternoon} ></img>
                            </div>
                            <div>
                                <h3>{hour.evening}</h3>
                                <img src={hourIcons.evening} ></img>
                            </div>
                            <div>
                                <h3>{hour.tonight}</h3>
                                <img src={hourIcons.tonight} ></img>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
