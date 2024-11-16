
const CartItems = ({itemsData}) => {
    return (
        <div className="flex justify-between px-3 pt-3 text-lg">
            <h4 className="font-medium">{itemsData.name}</h4>
            <p className="text-gray-600">₹{itemsData.defaultPrice / 100 || itemsData.price / 100}</p>
        </div>
    )
}

export default CartItems