const ResturantCard=(props)=>{
    const {resData}=props;
    const {name,imageUrl,subtitleData,rating}=resData;
    return (
        <div className="res-card">
            <img className="card-img" src={imageUrl} />
            <h3>Resturant: {name}</h3>
            <h4>Location: {subtitleData.locality.text}</h4> 
            <p>Cuisines: {subtitleData.cuisines.map(cuisine => cuisine.name).join(",")}</p>
            <p>Rating: {rating?.rating_text || "N/A"}⭐</p>
            <button className="card-btn">Book now!</button>
        </div>
    )
}
export default ResturantCard;
// The ResturantCard component is a functional component that renders a card for a restaurant.
