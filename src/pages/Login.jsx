import { useNavigate, Link} from "react-router-dom";
const Login = () => {
    
    const navigate = useNavigate();
    return (
        <>
            <h1>Dev Challenge</h1>
            <form onSubmit={()=>{}}>
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Password" />
                <button>Login</button>
            </form>
            <p>New to the challenge? <Link to="/register">Sign up</Link></p>
        </>  
        
    );
}
 
export default Login;