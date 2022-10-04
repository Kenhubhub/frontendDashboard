import Axios from "axios"
const getWeatherInfo = async (lon,lat) =>{
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=10a4fd005327481f998633d618c8627f`
    const weatherInfo = Axios.get(url);
    
    return weatherInfo;

}

export default getWeatherInfo;