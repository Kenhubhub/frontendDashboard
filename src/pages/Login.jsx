
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { loginUser } from "../apiFunctions/userAuth";
import "../styles/login.css"
const Login = ({setLoggedIn,setUser}) => {    
    const navigate = useNavigate()
    const [errorMessage,setError] = useState()
    const authenticate = async (e) =>{
        e.preventDefault();
        const user = await loginUser(e.target.username.value,e.target.password.value)
       
        if(user.data){
            setLoggedIn(true);
            setUser(user);
            navigate("/dashboard")
        }else{
            setError("Invalid Account");
            setTimeout(()=>{setError("")},5000);
        }
    }
    
    return (
        <div className="login-page">
            <h1>Dev Challenge</h1>
            <form onSubmit={(e)=>{ authenticate(e)}}>
            <div className="container">
                <div className="middle">
                    <input name="username" type="text" placeholder="Username"/>
                    <input name="password" type="text" placeholder="Password" />
                </div>
                <div className="button-layout">
                    <button>Login</button>
                </div>
            </div>
               
            
            </form>
            <h4>{errorMessage}</h4>
            <div className="bottom">
                <p className="bottom-text">New to the challenge? <Link to="/register">Sign up</Link></p>
            </div>
            
        </div>  
        
    );
}
 
export default Login;