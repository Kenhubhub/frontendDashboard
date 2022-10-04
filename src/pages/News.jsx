import { useEffect, useState} from "react";
import {getNews,getMoreNews} from "../apiFunctions/newsApi";
import "../styles/News.css"
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
                <div className="center">
                    <img src={image} alt="" />

                </div>
                <h2 className="center">{title}</h2>
                <div className="center">

                <div>

                    <p >{description}</p>
                    {!para? <p className="center">loading...</p> :
                    
                    para.map(p => <p >{p}</p>)
                    }

                </div>

                </div>
                
             </div>
        </div>
    );
}
 
export default News;