import Axios from "axios";
const login_URI = "https://backendapidashboard.herokuapp.com/user/login"
const register_URI = "https://backendapidashboard.herokuapp.com/user/register"
const loginUser = async (username,password) => {
    const response = await Axios.post(login_URI,{username,password});
    return response;
    
}
const registerUser = async (username,password,email,profilePicture)=>{
    const registeredResponse =  await Axios.post(register_URI,
    {
        email,
        username,
        password,
        profilePicture
    })
    return registeredResponse;
}
 
export {loginUser,registerUser};