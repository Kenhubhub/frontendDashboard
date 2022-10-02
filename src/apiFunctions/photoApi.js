import  Axios from "axios";
const photoRoute = "http://localhost:5000/images/upload"
const uploadPhoto = async (FILE)=>{
   const response = await Axios.post(photoRoute, {image: FILE});
   return response;
  
}

export {uploadPhoto}