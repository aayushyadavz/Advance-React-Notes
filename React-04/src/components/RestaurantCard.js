import { CDN_URL } from "../utils/constants" // named imports

const RestaurantCard = (props) => { // Here, props is an object in itself
    // De-Structuring of Object
    const { resData } = props
    const { 
        name, 
        cloudinaryImageId, 
        cuisines, 
        avgRating, 
        costForTwo, 
        sla: {deliveryTime} 
    } = resData?.info // optional chaining operator

    return (
        <div className="res-card">
            <img 
                className="res-logo" 
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4> 
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard