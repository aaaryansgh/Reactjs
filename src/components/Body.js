import ResturantCard from "./ResturantCard";
import resobj from "../utils/Data";
import { useState } from "react";
const Body=()=>{
    //const filterRestro=[];
    const [restro,setRestro]=useState(resobj);
    
    const FilterRestro=()=>{
        const filterRestro=restro.filter((res)=>res.rating?.rating_text>4.4)
          //filterRestro.push(...resobj.filter((res)=>res.rating?.rating_text>4.4))
        console.log(filterRestro);
        setRestro(filterRestro);
    }
    
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={FilterRestro}>Top Rated Restro</button>
            </div>
            <div className="res-container">
                {restro.map((res)=>(
                    <ResturantCard key={res.id} resData={res} />
                ))}
            </div>
        </div>
    )
}
export default Body;
// The Body component is a functional component that renders the main content of a website.