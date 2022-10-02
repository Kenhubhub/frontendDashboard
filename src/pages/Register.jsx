import photoApi from "../apiFunctions/photoApi" 
import { useState } from "react";
const Register = () => {
    const [profilePicture, setProfilePic] = useState()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const profilePicture = document.getElementById("profile-picture").files[0];
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const password2 = e.target.password2.value;
        console.log(username,email,password,password2,profilePicture)
       
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
                    <input onChange={(e)=>{setProfilePic(URL.createObjectURL(e.target.files[0]))}}id="profile-picture" name="file" type="file" placeholder="Add picture" required/>
                    <button>Register</button>
               </div>
            </form>
            {profilePicture ? <img src={profilePicture}/> : <h4>Picture not selected</h4>}
        </>
    );
}
 
export default Register;