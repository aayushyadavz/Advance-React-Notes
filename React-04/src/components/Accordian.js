import { useState } from "react";
import MenuCard from "./MenuCard"
import { MENU_IMG_URL } from "../utils/constants"

const Accordian = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div className="flex justify-between items-center cursor-pointer pt-5 px-4" onClick={toggleAccordion}>
                <h3 className="text-2xl font-bold">{props.accorTitle}</h3>
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
                    {props.itemCard.map((item, index) => (
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
    )
}

export default Accordian