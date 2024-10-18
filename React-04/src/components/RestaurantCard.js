import { CDN_URL } from "../utils/constants" // named imports

const RestaurantCard = (props) => { // Here, props is an object in itself
    // De-Structuring of Object
    const { resData } = props
    const { 
        name, 
        cloudinaryImageId, 
        cuisines, 
        avgRating, 
        sla: {deliveryTime} 
    } = resData?.info // optional chaining operator

    return (
        <div className="res-card">
            <img 
                className="res-logo" 
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId }
            />
            <div className="res-info">
                <h3 className="res-name">{name}</h3>
                <h4 className="res-rating">{avgRating} Stars <span>• {deliveryTime} mins</span></h4>
                <h4 className="cuisines">{cuisines.join(", ")}</h4> 
            </div>
        </div>
    )
}

export default RestaurantCard