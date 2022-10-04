import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadPhoto } from "../apiFunctions/photoApi";
import { registerUser } from "../apiFunctions/userAuth";
import "../styles/register.css"
const Register = () => {
    const navigate = useNavigate();
    const [profilePicture, setProfilePic] = useState();
    const [error,setError] = useState(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const password2 = e.target.password2.value;
        
        if(password !== password2){
            setError("Passwords do not match");
            setTimeout(()=>{setError("")},5000);
        }else{
            if(profilePicture){
                const profilePicture = document.getElementById("profile-picture").files[0];
                const reader = new FileReader();
                reader.readAsDataURL(profilePicture);
                reader.onloadend = async () => {
                    const response  = await uploadPhoto(reader.result);
                    const registerResponse = await registerUser(username,password,email,response.data);
                    setError("Success!");
                    
                    navigate("/")
                };
             
            }else{
                const registerResponse = await registerUser(username,password,email,"none");
                setError("Success!");
                navigate("/")
            }
            

        }}
    const triggerUpload = ()=>{
        const profilePicture = document.getElementById("profile-picture");
        profilePicture.click();
    }
    return (  
        <div className="register-page">  
            <h1>Dev Challenge</h1>
            <form onSubmit={ (e)=> handleSubmit(e)}>
                <div className="top">
                   <input name="username" type="text" placeholder="Username" required/>
                    <input name="email" type="text" placeholder="Email" required />
               </div>
               <div className="middle">
                <input name="password" type="text" placeholder="Password" required/>
                <input name="password2" type="text" placeholder="Confirm password" required/>
               </div>
               <div className="bottom">
                    <div className="file-upload" onClick={triggerUpload}>
                        <input onChange={(e)=>{setProfilePic(URL.createObjectURL(e.target.files[0]))}}id="profile-picture" name="file" type="file" placeholder="Add picture" />
                        {profilePicture ? <img src={profilePicture} min-height="238" min-width="421"/> : <h4>Add Picture</h4>}       
                    </div>
               </div>
                <div className="button-container">
                    <button>Register</button>

                </div>
            </form>
            
            <h4>{error}</h4>
        </div>
    );
}
 
export default Register;