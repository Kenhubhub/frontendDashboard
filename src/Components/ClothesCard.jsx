import { getClothes } from "../apiFunctions/clothesApi";
import { PieChart } from 'react-minimal-pie-chart';
import { useState,useEffect } from "react";

const ClothesCard = () => {
    const [data,setData] = useState()
    useEffect(()=>{
   
        const clothing = {
            "hoodie": 0,
            "jacket": 0,
            "jumper": 0,
           "raincoat": 0,
            "blazer": 0
        }
        getClothes().then(resp =>{
           resp.data.slice(0,100).forEach( d =>{
                clothing[d.clothe]++;
                console.log("here be",clothing["hoodie"])
           })
           console.log("totals",clothing)
           setData(clothing);
        })
    },[])
    return (
        <div className="Clothes-card card">
            <h1>Clothes</h1>
            {!data? <h4>loading...</h4>:
            
            
                <PieChart
                data={[
                    { title: 'hoodie', value: data.hoodie, color: '#E38627' },
                    { title: 'jacket', value: data.jacket, color: '#C13C37' },
                    { title: 'jumper', value: data.jumper, color: '#6A2135' },
                    { title: 'raincoat', value: data.raincoat, color: 'blue' },
                    { title: 'blazer', value: data.blazer, color: 'green' },
                ]}
                radius={30}
                
                />
            
            }
        </div>
    )
}
 
export default ClothesCard;