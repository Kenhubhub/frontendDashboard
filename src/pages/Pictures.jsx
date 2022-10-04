import Plus_button from "./Plus_button.png"
import "../styles/pictures.css"
import { uploadGallery,getPictures } from "../apiFunctions/photoApi"
import { useState, useEffect } from "react"
const Pictures = ({User}) => {
    const [pictures,setPictures] = useState();
    useEffect( ()=>{
        getPictures(User.data._id).then( resp=> setPictures(resp.data))
    },[pictures])
    const setPic = () =>{
            const profilePicture = document.getElementById("picture-upload").files[0];
            const reader = new FileReader();
            reader.readAsDataURL(profilePicture);
            reader.onloadend = async () => {
                const response  = await uploadGallery(reader.result,User.data._id);
                console.log(response);
            };
        
    }
    const triggerUpload = ()=>{
        const profilePicture = document.getElementById("picture-upload");
        profilePicture.click();
    }
    return (  
        <div className="pictures-page">
            <h1>Photos</h1>
            <div className="gallery">
             <div className="upload-img">
            
                <input onChange={setPic} id="picture-upload" name="file" type="file" />
                <img onClick={triggerUpload}src={Plus_button} min-height="238" min-width="421"/>
            </div>
                {!pictures ? <h4>Loading....</h4> :
                    pictures.map(picture=>(
                    <div key={picture._id}className="image-hold"> 
                    
                    <img src={picture.URL} alt="" /> 
                    
                    <button onClick={()=>{deletePicture(picture._id)}}>delete</button> </div> ) )
                    
                }
            </div>
        </div>
    );
}
 
export default Pictures;