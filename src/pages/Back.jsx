import { useNavigate } from "react-router-dom";
const Back = () => {
    const navigate = useNavigate();
    return ( 
        <div className="backbutton">
            <button onClick={()=>navigate("/dashboard")}>Back</button>
        </div>
     );
}
 
export default Back;