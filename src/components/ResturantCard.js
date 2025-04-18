
import { Link } from "react-router";

const ResturantCard=(props)=>{
    const {resData}=props;
    const {name,imageUrl,subtitleData,rating,proOfferText,id}=resData;
    return (
        <div className="m-4 p-1 w-[300px] h-[420px] bg-black text-white rounded-lg">
            <img className="card-img h-[170px] w-[300px] rounded-lg" src={imageUrl} />
            <div className="flex flex-col justify-between items-center h-[220px] p-2">
                <h3 className="font-bold text-xl py-3">{name}</h3>
                <h4>{subtitleData.locality.text}</h4> 
                <p>{subtitleData.cuisines.slice(0,3).map(cuisine => cuisine.name).join(", ")}</p>
                <p>Rating: {rating?.rating_text || "N/A"}⭐</p>
                <Link to={`/resturant/${name}/${id}`}>
                    <button className="card-btn bg-white hover:bg-amber-600 text-black py-1 px-2 rounded-lg mt-4 cursor-pointer">Book now!</button>
                </Link>
            </div>
        </div>
    )
}

//Higher order component
export const withProOffer=(restrocard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-white text-black p-1.5 mt-2 rounded-lg">Flat 10% off</label>
                <ResturantCard {...props}/>
            </div>
            
        )
    }
}


export default ResturantCard;
// The ResturantCard component is a functional component that renders a card for a restaurant.
