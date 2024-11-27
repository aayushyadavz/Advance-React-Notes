import { MENU_IMG_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const MenuCard = ({ itemsData }) => {
  const dispatch = useDispatch();

  const handleClick = (itemsData) => {
    dispatch(addItems(itemsData));
  };

  return (
    <div
      data-testid="foodItems"
      className="flex justify-between py-3 px-4 items-center bg-white border-b-2 border-gray-100"
    >
      <div className="w-8/12 mb-4">
        <h3 className="text-xl font-bold text-gray-600">{itemsData.name}</h3>
        <p className="text-lg font-medium mb-4">
          ₹ {itemsData.price / 100 || itemsData.defaultPrice / 100}
        </p>
        <p
          className="text-gray-500 text-lg leading-tight cursor-pointer overflow-hidden overflow-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {itemsData.description}
        </p>
      </div>
      <div className="mb-3 text-center relative">
        <img
          className="w-40 h-36 object-cover rounded-xl"
          src={MENU_IMG_URL + itemsData.imageId}
        />
        <div className="absolute inset-x-0 bottom-[-14px] pl-1">
          <button
            className="text-green-500 bg-white text-xl font-semibold px-8 py-1 shadow-lg rounded-lg hover:bg-gray-300"
            onClick={() => handleClick(itemsData)}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

// Notes:

// When the Add button is clicked, we call a function (handleClick) with itemsData passed as an argument. Inside handleClick, we call the dispatch function, which takes a reducer function from the slice (addItems) and passes itemsData into it. This ensures that action.payload can perform its task.
