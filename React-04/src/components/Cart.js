import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex justify-center pt-10 min-h-screen bg-gray-200">
      <div className="w-3/5 mb-8 shadow-xl bg-white">
        {items.length === 0 ? (
          <h1 className="text-xl font-medium text-center mt-5">
            Your cart is empty, Add some food!
          </h1>
        ) : (
          <div>
            <h1 className="text-center font-bold mt-5 mb-9 text-2xl">
              Cart (Added items)
            </h1>
            <div className="text-center px-28">
              {items.map((item) => (
                <CartItems itemsData={item} />
              ))}
              <div className="mt-9 mb-4">
                <button
                  className="w-3/12 bg-orange-500 py-1 rounded-lg font-semibold text-white"
                  onClick={() => handleClick()}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
