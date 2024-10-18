import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MENU_URL } from "../utils/constants"
import { REST_OF_MENU_URL } from "../utils/constants"
import MenuCard from "./MenuCard"
import { MENU_IMG_URL } from "../utils/constants"

const RestaurantsMenu = () => {
    const [ resMenu, setResMenu ] = useState(null)
    const { resId } = useParams()
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }
    
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

    const { 
        itemCards,
        title
    } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

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
                    <div className="accordian-title-container" onClick={toggleAccordion}>
                        <h3 className="accordian-title">{title}</h3>
                        <div className="accordian-icon">
                            {isOpen ? (
                                <i className="fa-solid fa-angle-up"></i>
                            ) : (
                                <i className="fa-solid fa-angle-down"></i>
                            )}
                        </div>
                    </div>

                    {/* Only render content if the accordion is open */}
                    {isOpen && (   
                        <div>
                            {itemCards.map((item, index) => (
                                <MenuCard 
                                    key={index} 
                                    name={item.card.info.name} 
                                    price={item.card.info.price / 100 || item.card.info.defaultPrice / 100} 
                                    description={item.card.info.description} imageUrl={MENU_IMG_URL + item.card.info.imageId}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RestaurantsMenu

// Notes:

// To read the `resId` used in the route path, we can use a hook provided by React Router DOM, extracting `resId` from `useParams`.