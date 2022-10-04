import  Axios from "axios";
const photoRoute = "https://backendapidashboard.herokuapp.com/images/upload"
const GalleryRoute = "https://backendapidashboard.herokuapp.com/images/uploadGallery"
const getRoute = "https://backendapidashboard.herokuapp.com/images/"
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