import { useParams } from "react-router-dom"
import Accordian from "./Accordian"
import useRestaurantsMenu from "../utils/coustomHooks/useRestaurantsMenu"
import {ShimmerForMenu} from "./Shimmer"
import { useState } from "react"

const RestaurantsMenu = () => {
    const { resId } = useParams()
    const resMenu = useRestaurantsMenu(resId)
    const [showIndex, setShowIndex] = useState(0)

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

    const categories = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( 
        category => category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
    )
    
    return (
        <div className="flex justify-center w-full pt-16">
            <div className="w-3/5 mb-8">
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
                <div className="bg-gray-200">
                    { categories.map((category, index) => ( 
                            // Controlled Component
                            <Accordian 
                                key={index} 
                                data={category.card.card}
                                isOpen={index === showIndex}
                                setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
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

// ---------------------------------------------------------------------------------------------------------------

// Lifting the State Up

// All the item category accordions are managing their own states with useState declared in Accordion.js. To implement a functionality where clicking on one accordion collapses the others, we just need to lift the state up to the RestaurantsMenu component so that it can control its child components.

// Controlled and Uncontrolled Components

// If the Accordion is managing its own state, it is an uncontrolled component. However, if we take away this control and delegate it to the parent RestaurantMenu component, it becomes a controlled component because its state is managed by RestaurantMenu.