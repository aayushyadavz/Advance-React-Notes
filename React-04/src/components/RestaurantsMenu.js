import {ShimmerForMenu} from "./Shimmer"
import { useParams } from "react-router-dom"
import Accordian from "./Accordian"
import useRestaurantsMenu from "../utils/coustomHooks/useRestaurantsMenu"

const RestaurantsMenu = () => {
    const { resId } = useParams()
    const resMenu = useRestaurantsMenu(resId)

    // If resMenu is null then load Shimmer compo.
    if (resMenu === null) {
        return (
            <div className="shim-menu-container">
                {Array(10).fill("").map((_, index) => <ShimmerForMenu key={index}/>)}
            </div>
        )
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

// ---------------------------------------------------------------------------------------------------------------

// Single Responsibility Principle

// If we write our code in a modular fashion, following the Single Responsibility Principle, it becomes reusable, maintainable, and testable.

// Here, the single responsibility of this component is to display the data, not to fetch it as well.