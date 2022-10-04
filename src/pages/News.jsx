import { useEffect, useState} from "react";
import {getNews,getMoreNews} from "../apiFunctions/newsApi";
const News = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState()
    const [image , setImage] = useState();
    const [para, setPara] = useState();
    useEffect(()=>{
        getNews().then(resp => new window.DOMParser().parseFromString(resp.data, "text/xml"))
        .then(data => {
            const News = data.querySelector("item");
            console.log(News.children[4].textContent)
            getMoreNews(News.children[3].textContent).then( resp =>{
                console.log(resp.data)
                setImage(resp.data.images[0]);
                setPara(resp.data.para)
            })
            setTitle(News.children[0].textContent)
            setDescription(News.children[1].textContent)
        })
       
    },[])
    return ( 
        <div className="news-page">
             <h1>News</h1>
             <div className="news-container">
                <img src={image} alt="" />
                <h2>{title}</h2>
                <p>{description}</p>
                {!para? <p>loading...</p> :
                
                para.map(p => <p>{p}</p>)
                }
                
             </div>
        </div>
    );
}
 
export default News;