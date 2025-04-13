import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=()=>{
    //const filterRestro=[];
    const[restro,setRestro]=useState([]);
    const[filterRestro,setFilterRestro]=useState([]);
    const[searchText,setSearchtext]=useState("");
    useEffect(()=>{
        fetchData();
        
    },[])

    const fetchData=async ()=>{
        const data=await fetch("https://www.zomato.com/webroutes/getPage?page_url=/mumbai/insta-worthy&location=&isMobile=0");
        const json=await data.json();
        setRestro(json.page_data.sections.SECTION_ENTITIES_DATA);
        setFilterRestro(json.page_data.sections.SECTION_ENTITIES_DATA)
    }
    
    const FilterRestro=()=>{
        const filterRestro=restro.filter((res)=>res.rating?.rating_text>4.4)
          //filterRestro.push(...resobj.filter((res)=>res.rating?.rating_text>4.4))
        console.log(filterRestro);
        setFilterRestro(filterRestro);
    }

    const searchFilter=()=>{
        const searchedrestro=restro.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilterRestro(searchedrestro);

    }
    const handleSearchChange=(evt)=>{
        setSearchtext(evt.target.value);
        const searchedrestro=restro.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilterRestro(searchedrestro);
    }
    
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return <h1>Looks like you're Offline. Please check your connection</h1>
    }
    
    return restro.length===0? (
      <Shimmer />
      ):(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={FilterRestro}>Top Rated Restro</button>
                <div className="search-container">
                    <input type="text" className="search-box" onChange={handleSearchChange} value={searchText} />
                    <button className="search-btn" onClick={searchFilter}>Search</button>
                </div>
            </div>
            <div className="res-container">
                {filterRestro.map((res)=>(
                    <Link className="link" to={res.url} key={res.id}><ResturantCard  resData={res} /></Link>
                ))}
            </div>
        </div>
    )
}
export default Body;
// The Body component is a functional component that renders the main content of a website.