import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WeatherCard from "../Components/WeatherCard";
import SportsCard from "../Components/SportCard";
import ClothesCard from "../Components/ClothesCard";
import PhotoCard from "../Components/PhotoCard";
import TaskCard from "../Components/TaskCard";
import NewsCard from "../Components/NewsCard";
import "../styles/dashboard.css"

const Dashboard = ({loggedIn, User}) => {
    const navigate = useNavigate();
    
    useEffect( ()=>{
        !loggedIn ? navigate("/") : console.log("Dashboard initialised");
        
    },[])
  
    return (
        <div className="dashboard-page">  
            <div className="dashboard-header">
                {User.data.profilePicture === "none"? 
                <h4>No profile selected</h4>: 
                <div className="image-holder">
                    <img  src={User.data.profilePicture}alt="" />
                </div>
                }
                <div className="header">
                    <h1>Good Day {User.data.username}</h1>
                </div>
            </div>
            <div className="dashboard">
              <WeatherCard/>
              <NewsCard />
              <SportsCard />
              <PhotoCard />
              <TaskCard />
              <ClothesCard />
            </div>
        </div>
    )
}
 
export default Dashboard;