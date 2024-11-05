const MenuCard = (props) => {

    return (
        <div className="flex justify-between py-3 px-4 items-center border-b-2 border-gray-100">
            <div className="w-[70%] mb-4">
                <h3 className="text-xl font-bold text-gray-600">{props.name}</h3>
                <p className="text-lg font-medium mb-4">₹ {props.price}</p>
                <p className="text-gray-500 text-lg leading-tight cursor-pointer overflow-hidden overflow-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{props.description}</p>
            </div>
            <div className="mb-4">
                <img className="w-40 h-36 object-cover rounded-xl" src={props.imageUrl} />
            </div>
        </div>
    )
}

export default MenuCard 