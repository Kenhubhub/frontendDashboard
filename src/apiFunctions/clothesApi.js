import Axios from "axios"
const clothesApi = "http://localhost:5000/clothes"
const getClothes = async() =>{
    const data = await Axios.get(clothesApi);
    return data;
}

export {getClothes}