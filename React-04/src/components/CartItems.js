import { MENU_IMG_URL } from "../utils/constants"

const CartItems = ({itemsData}) => {
    console.log(itemsData);
    
    return (
        <div className="flex justify-between px-3 items-center text-lg border-b-[1px] border-gray-300">
            <img className="w-14 h-12 object-cover rounded-lg my-1" src={MENU_IMG_URL + itemsData.imageId} />
            <h4 className="font-medium">{itemsData.name}</h4>
            <p className="text-gray-600">₹{itemsData.defaultPrice / 100 || itemsData.price / 100}</p>
        </div>
    )
}

export default CartItems