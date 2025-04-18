import ResturantCard,{withProOffer} from "./ResturantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
//import UserContext from "../utils/UserContext";
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
    const Prooffercard=withProOffer(ResturantCard);
    //const data=useContext(UserContext);

    return filterRestro.length===0? (
      <Shimmer />
      ):(
        <div className="body">
            <div className="filter flex justify-between items-center p-2 m-2 mx-35">
                <button className="filter-btn bg-black p-2 rounded-lg cursor-pointer text-white hover:text-amber-600" onClick={FilterRestro}>Top Rated Restro</button>
                <div className="search-container flex gap-2 ">
                   
                    <input type="text" className="search-box border border-solid border-black rounded-xl" onChange={handleSearchChange} value={searchText} />
                    <button className="search-btn px-3 py-1 bg-black text-white hover:text-amber-600 cursor-pointer rounded-xl" onClick={searchFilter}>Search</button>
                </div>
            </div>
            <div className="res-container flex flex-wrap justify-center">
                {filterRestro.map((res)=>(
                    <div key={res.id}>
                        {res.proOfferText ? <Prooffercard resData={res} /> : <ResturantCard resData={res} />}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Body;
// The Body component is a functional component that renders the main content of a website.