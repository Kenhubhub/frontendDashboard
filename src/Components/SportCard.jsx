
import { useNavigate } from "react-router-dom";
import "../styles/weathercard.css"
const SportsCard = () => {
    const navigate = useNavigate();
   
    return (  
        <div className="sports-card card" onClick={()=>navigate("/sports")}>
            <h1>Sports</h1>
            {!localStorage.getItem("team")? <h3 className="no-data-message">No team searched</h3>:
                <div>
                <h3 className="no-data-message">{localStorage.getItem("team")}</h3>
                <p className="no-data-message">Click to search more teams</p>
                </div>
            }
        </div>
    );
}
 
export default SportsCard;