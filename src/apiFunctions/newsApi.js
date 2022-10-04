import Axios from "axios"
const getNews = async ()=>{
    const news = await Axios.get("https://backendapidashboard.herokuapp.com/news");
    return news;
}
const getMoreNews = async (url) =>{
    console.log(typeof url);
    const news = await Axios.post("https://backendapidashboard.herokuapp.com/news",{url});
    return news;
}
export{getNews,getMoreNews};