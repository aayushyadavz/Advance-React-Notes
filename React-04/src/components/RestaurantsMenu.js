import { useParams } from "react-router-dom"
import Accordian from "./Accordian"
import useRestaurantsMenu from "../utils/coustomHooks/useRestaurantsMenu"
import {ShimmerForMenu} from "./Shimmer"

const RestaurantsMenu = () => {
    const { resId } = useParams()
    const resMenu = useRestaurantsMenu(resId)

    // If resMenu is null then load Shimmer compo.
    if (resMenu === null) {
        return (
            <div className="flex justify-center w-full pt-16">
                <div className="w-[63%]">
                    {Array(10).fill("").map((_, index) => (
                        <ShimmerForMenu key={index} />
                    ))}
                </div>
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
        <div className="flex justify-center w-full pt-16">
            <div className="w-[63%] mb-8">
                <h1 className="text-3xl font-bold pl-4">{name}</h1>
                <div className="p-4 rounded-br-3xl rounded-bl-3xl mt-4 mb-6" style={{background: "linear-gradient(rgb(255, 255, 255) -6.71%, rgb(235, 235, 242) 56.19%, rgb(223, 223, 231) 106.56%)"}}>
                    <div className="bg-white px-4 py-5 rounded-2xl font-bold">
                        <h3 className="text-xl">{avgRating} • {costForTwoMessage}</h3>
                        <h4 className="text-orange-500 text-lg underline cursor-pointer">{cuisines.join(", ")}</h4>
                        <h4 className="mb-1">Outlet <span className="pl-2 text-base font-normal">{areaName}</span></h4>
                        <h4 className="mb-1">{minDeliveryTime}-{maxDeliveryTime} mins</h4>
                    </div>
                </div>

                <p className="text-center tracking-[3px] mb-3 font-medium text-gray-500">- MENU -</p>
                <hr></hr>
                <div>
                    { cards.map((cardData, index) => ( 
                            cardData.card.card.itemCards && 
                            <Accordian 
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