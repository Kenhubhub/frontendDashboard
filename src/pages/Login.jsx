import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { loginUser } from "../apiFunctions/userAuth";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
const Login = ({setLoggedIn}) => {
    
    const navigate = useNavigate()
    const authenticate = async (e) =>{
        e.preventDefault();
        const user = await loginUser(e.target.username.value,e.target.password.value)
        if(user){
            console.log("yes",user);
            setLoggedIn(true);
            navigate("/dashboard")
        }else{
           
           
        }
    }
    
    return (
        <>
            <h1>Dev Challenge</h1>
            <form onSubmit={(e)=>{ authenticate(e)}}>
                <input name="username" type="text" placeholder="Username"/>
                <input name="password" type="text" placeholder="Password" />
                <button>Login</button>
            </form>
            <p>New to the challenge? <Link to="/register">Sign up</Link></p>
            
        </>  
        
    );
}
 
export default Login;