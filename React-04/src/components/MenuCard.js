import { MENU_IMG_URL } from "../utils/constants"

const MenuCard = ({itemsData}) => {

    return (
        <div className="flex justify-between py-3 px-4 items-center bg-white border-b-2 border-gray-100">
            <div className="w-8/12 mb-4">
                <h3 className="text-xl font-bold text-gray-600">{itemsData.name}</h3>
                <p className="text-lg font-medium mb-4">₹ {itemsData.price / 100 || itemsData.defaultPrice / 100}</p>
                <p className="text-gray-500 text-lg leading-tight cursor-pointer overflow-hidden overflow-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{itemsData.description}</p>
            </div>
            <div className="mb-3 text-center relative">
                <img className="w-40 h-36 object-cover rounded-xl" src={MENU_IMG_URL + itemsData.imageId} />
                <div className="absolute inset-x-0 bottom-[-14px] pl-1">
                    <button className="text-green-500 bg-white text-xl font-semibold px-8 py-1 shadow-lg rounded-lg">ADD</button>
                </div>
            </div>
        </div>
    )
}

export default MenuCard 