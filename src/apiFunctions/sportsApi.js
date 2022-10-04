import  Axios from "axios";
const sportsURI = "http://localhost:5000/sports"
const getCSV = async(url) =>{
    const csv = await Axios.get(sportsURI);
    return csv;
}

export {getCSV}