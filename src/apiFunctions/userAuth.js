import Axios from "axios";
const login_URI = "http://localhost:5000/user/login"
const register_URI = "http://localhost:5000/user/register"
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