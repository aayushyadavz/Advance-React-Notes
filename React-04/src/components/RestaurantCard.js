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
        <div className="w-52 p-1 mb-2">
            <img 
                className="h-36 w-full object-cover rounded-3xl shadow-md" 
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId }
            />
            <div className="p-3">
                <h3 className="text-xl font-bold overflow-ellipsis overflow-hidden whitespace-nowrap w-full">{name}</h3>
                <h4 className="text-lg font-medium">{avgRating} Stars <span className="font-semibold">• {deliveryTime} mins</span></h4>
                <h4 className="text-lg leading-tight text-gray-500">{cuisines.join(", ")}</h4> 
            </div>
        </div>
    )
}

export default RestaurantCard