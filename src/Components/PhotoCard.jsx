import { useNavigate } from "react-router-dom";
import { getPictures } from "../apiFunctions/photoApi";
import { useState, useEffect } from "react";
import "../styles/photoCard.css"
const PhotoCard = ({User}) => {
    const navigate = useNavigate();
    const [pictures,setPictures] = useState();
    useEffect( ()=>{
        getPictures(User.data._id).then( resp=> setPictures(resp.data))
    },[pictures])
    return (  
        <div onClick={ ()=>{navigate("/pictures") } } className="photo-card card">
            <h1>Photos</h1>
            <div className="small-gallery">
               
                {!pictures ? <h4>Loading....</h4> :
                        pictures.slice(0,4).map(picture=><div key={picture._id}className="image-hold-small"><img height="20" width="20"src={picture.URL} alt="" /></div>)
                    
                }
                
            </div>
        </div>
    );
}
 
export default PhotoCard;