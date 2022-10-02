import { useState } from "react";
import { Navigate } from "react-router-dom";
import { uploadPhoto } from "../apiFunctions/photoApi";
import { registerUser } from "../apiFunctions/userAuth";
const Register = () => {
    const [profilePicture, setProfilePic] = useState();
    const [error,setError] = useState(false);
    const handleSubmit = (e)=>{
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
                reader.onloadend = () => {
                    uploadPhoto(reader.result).then(response => { registerUser(username,password,email,response.data)});
                };
             
            }else{
                registerUser(username,password,email,"none");
            }
            

        }
     
        
      
       
    }
    return (  
        <>  
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
                    <input onChange={(e)=>{setProfilePic(URL.createObjectURL(e.target.files[0]))}}id="profile-picture" name="file" type="file" placeholder="Add picture" />
                    <button>Register</button>
               </div>
            </form>
            {profilePicture ? <img src={profilePicture}/> : <h4>Picture not selected</h4>}
            <h4>{error}</h4>
        </>
    );
}
 
export default Register;