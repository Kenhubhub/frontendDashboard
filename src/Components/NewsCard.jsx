import { useEffect, useState} from "react";
import {getNews} from "../apiFunctions/newsApi";
import { useNavigate } from "react-router-dom";
import "../styles/NewsCard.css"

const NewsCard = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState()
    useEffect(()=>{
        getNews().then(resp => new window.DOMParser().parseFromString(resp.data, "text/xml"))
        .then(data => {
            const News = data.querySelector("item");
            console.log(News.children[3].textContent)
            setTitle(News.children[0].textContent)
            setDescription(News.children[1].textContent)
        })
       
    },[])
    return (  
        <div className="news-card card" onClick = {()=>{navigate("/news")}}>
        <h1>News</h1>
        <div className="news-preview">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
    );
}
 
export default NewsCard;