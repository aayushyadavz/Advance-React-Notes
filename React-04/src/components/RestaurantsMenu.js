import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MENU_URL } from "../utils/constants"
import { REST_OF_MENU_URL } from "../utils/constants"
// import MenuCard from "./MenuCard"
// import { MENU_IMG_URL } from "../utils/constants"
import Accordian from "./Accordian"

const RestaurantsMenu = () => {
    const [ resMenu, setResMenu ] = useState(null)
    const { resId } = useParams()
    
    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const response = await fetch( MENU_URL + resId + REST_OF_MENU_URL) // Putting resId between the Api URL
        const data = await response.json()
        console.log(data);
        
        setResMenu(data.data)
    }

    // If resMenu is null then load Shimmer compo.
    if (resMenu === null) {
        return <Shimmer />
    }

    // De-Structuring
    const { 
        name, 
        avgRating, 
        costForTwoMessage, 
        cuisines, areaName, 
        sla:{ minDeliveryTime, maxDeliveryTime } 
    } = resMenu?.cards[2]?.card?.card?.info

    const { cards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR

    return (
        <div className="res-detail-container">
            <div className="res-detail-card">
                <h1>{name}</h1>
                <div className="res-detail">
                    <div>
                        <h3>{avgRating} • {costForTwoMessage}</h3>
                        <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
                        <h4 className="res-location">Outlet <span className="area">{areaName}</span></h4>
                        <h4 className="dilivery-time">{minDeliveryTime}-{maxDeliveryTime} mins</h4>
                    </div>
                </div>

                <p className="menu-logo">- MENU -</p>
                <hr></hr>
                <div className="accordian-container">
                    { cards.map((cardData, index) => ( 
                            cardData.card.card.itemCards && <Accordian 
                                key={index} 
                                accorTitle={cardData.card.card.title}
                                itemCard={cardData.card.card.itemCards}
                            />
                        )) 
                    }
                </div>
            </div>
        </div>
    )
}

export default RestaurantsMenu

// Notes:

// To read the `resId` used in the route path, we can use a hook provided by React Router DOM, extracting `resId` from `useParams`.