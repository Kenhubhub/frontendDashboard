import { Link} from "react-router-dom";
import { loginUser } from "../apiFunctions/userAuth";
const Login = () => {
    
    
    return (
        <>
            <h1>Dev Challenge</h1>
            <form onSubmit={(e)=>{ e.preventDefault(); loginUser(e.target.username.value,e.target.password.value)}}>
                <input name="username" type="text" placeholder="Username"/>
                <input name="password" type="text" placeholder="Password" />
                <button>Login</button>
            </form>
            <p>New to the challenge? <Link to="/register">Sign up</Link></p>
            
        </>  
        
    );
}
 
export default Login;