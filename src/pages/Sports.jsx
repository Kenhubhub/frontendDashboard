import { getCSV } from "../apiFunctions/sportsApi";
import { useEffect, useState} from "react";
import "../styles/Sports.css"
import Back from "./Back";
const Sports = () => {
    const[data,setData] = useState();
    const [beatenTeams, setBeaten] = useState()
    useEffect(()=>{
       getCSV().then(resp=>{
        setData(resp.data);
       })
       
    },[])
    const getVictories = (e) =>{
        e.preventDefault();
        localStorage.setItem("team",e.target.team.value);
        const team = e.target.team.value;
        const beaten = new Set();

        if(data){
            data.forEach( d => {
                // save away or home team
                // check win by full time
                if(team === d.HomeTeam && d.HTR === "H"){
                    beaten.add(d.AwayTeam);
                   
                }else if(team === d.AwayTeam && d.HTR === "A"){
                    beaten.add(d.HomeTeam);
                    
                }
               
            })
            setBeaten(Array.from(beaten.values()))
        }
    }
    return ( 
        <div className="sports-page">
            <Back />
            <h1>Sports Challenge</h1>
            <div className="sports-container">
                
                <form onSubmit={e=>{ getVictories(e)}}>
                    <input name="team" type="text" placeholder="Enter Winning Team"/>
                    <button type="submit">Submit</button>
                </form>
                {!beatenTeams? <h4>Not Available</h4> : 
                    beatenTeams.map(beat =>(
                        <p className="teams-item">{beat}</p>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Sports;