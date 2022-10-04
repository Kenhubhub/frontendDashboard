import { getCSV } from "../apiFunctions/sportsApi";
import { useNavigate } from "react-router-dom";
const SportsCard = () => {
    const navigate = useNavigate();
   
    return (  
        <div className="sports-card card" onClick={()=>navigate("/sports")}>
            <h1>Sports</h1>
            <h3>{localStorage.getItem("team")}</h3>
        </div>
    );
}
 
export default SportsCard;