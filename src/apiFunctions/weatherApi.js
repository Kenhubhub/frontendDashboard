import Axios from "axios"
const getWeatherInfo = async (lon,lat) =>{
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d0a10211ea3d36b0a6423a104782130e`
    const weatherInfo = Axios.get(url);
    return weatherInfo;

}

export default getWeatherInfo;