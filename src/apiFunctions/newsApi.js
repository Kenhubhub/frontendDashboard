import Axios from "axios"
const getNews = async ()=>{
    const news = await Axios.get("http://localhost:5000/news");
    return news;
}
const getMoreNews = async (url) =>{
    console.log(typeof url);
    const news = await Axios.post("http://localhost:5000/news",{url});
    return news;
}
export{getNews,getMoreNews};