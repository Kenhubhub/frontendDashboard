import Axios from "axios"
const clothesApi = "https://backendapidashboard.herokuapp.com/clothes"
const getClothes = async() =>{
    const data = await Axios.get(clothesApi);
    return data;
}

export {getClothes}