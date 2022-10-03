import  Axios from "axios";
const photoRoute = "http://localhost:5000/images/upload"
const GalleryRoute = "http://localhost:5000/images/uploadGallery"
const getRoute = "http://localhost:5000/images/"
const uploadPhoto = async (FILE)=>{
   const response = await Axios.post(photoRoute, {image: FILE});
   return response;
  
}
const uploadGallery = async (FILE,id)=>{
   console.log("here we be")
   const response = await Axios.post(GalleryRoute, {image: FILE,id});
   return response;
}

const getPictures = async(id) =>{
   const URI = getRoute + id;
   const images = await Axios.get(URI);
   return images
}

export {uploadPhoto,uploadGallery, getPictures}