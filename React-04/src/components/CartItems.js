import { useDispatch } from "react-redux";
import { MENU_IMG_URL } from "../utils/constants";
import { removeItems } from "../utils/cartSlice";

const CartItems = ({ itemsData }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeItems(id));
  };

  return (
    <div className="flex justify-between items-center gap-2 border-b-[1px] border-gray-300">
      <div className="flex justify-between px-3 items-center text-lg w-full">
        <img
          className="w-14 h-12 object-cover rounded-lg my-1"
          src={MENU_IMG_URL + itemsData.imageId}
        />
        <h4 className="font-medium">{itemsData.name}</h4>
        <p className="text-gray-600">
          ₹{itemsData.defaultPrice / 100 || itemsData.price / 100}
        </p>
      </div>
      <div className="px-3 cursor-pointer border-l-[1px] border-gray-300">
        <button onClick={() => handleClick(itemsData.id)}>
          <i class="fa-solid fa-circle-minus text-red-500"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItems;
