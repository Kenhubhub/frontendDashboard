import { useState,useEffect } from "react";
import getWeatherInfo from "../apiFunctions/weatherApi";
import Clouds_icon from "./Clouds_icon.png"
import Rain_icon from "./Rain_icon.png"
import Sun_icon from "./Sun_icon.png"
import "../styles/weathercard.css"
const WeatherCard = () => {
    
    const [info, setInfo] = useState();
    const [icon, setIcon] = useState(Clouds_icon);
    const [location, setLocation] = useState();
    const [temp , setTemp] = useState();
    useEffect( ()=>{
        
        navigator.geolocation.getCurrentPosition( (position)=>{
            getWeatherInfo(position.coords.longitude,position.coords.latitude).then(
                resp=>{setInfo(resp);}
            )
        } )
        
        if(info){
            switch(info.data.weather[0].main){
                case "Rain":
                    setIcon(Rain_icon);
                    break;
                case "Sun":
                    setIcon(Sun_icon);
                default:
                    setIcon(Clouds_icon);
                    break;
            }
            
            setLocation(info.data.name);
            setTemp(info.data.main.temp)
        }
        
    },[info,icon,temp,location])
    return ( 
        <div className="weather-card card">
            <h1>Weather</h1>
            {!info? <p className="no-data-message">API calls limit exceeded to weatherAPI...</p> : 
            <div className="weather-info">
                <div className="weather-top">
                    <img src={icon} alt="" />
                    <h3>{temp} degrees</h3>
                </div>
                <div className="weather-bottom">
                    <h2>{location}</h2>
                </div>
            </div>
                
            
            
            }
            
        </div>
     );
}
 
export default WeatherCard;