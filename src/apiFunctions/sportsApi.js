import  Axios from "axios";
const sportsURI = "https://backendapidashboard.herokuapp.com/sports"
const getCSV = async(url) =>{
    const csv = await Axios.get(sportsURI);
    return csv;
}

export {getCSV}