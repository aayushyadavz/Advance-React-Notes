import { LOGO_URL } from "../utils/constants"; // named imports
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/coustomHooks/useOnlineStatus";
// import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // const { loggedInUser } = useContext(UserContext) // Accessing UserConext using a Hook (useContext)

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);

  return (
    <div className="flex items-center justify-between px-5 shadow-lg fixed top-0 left-0 w-full bg-white z-50">
      <div>
        <Link to="/">
          <img className="w-24" src={LOGO_URL} />
        </Link>
      </div>
      <div>
        <ul className="flex font-semibold text-lg hover:cursor-pointer text-gray-600">
          <li className="px-3 hover:text-orange-500">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-3 hover:text-orange-500">
            <Link to="/" className="rout-link">
              Home
            </Link>
          </li>
          <li className="px-3 hover:text-orange-500">
            <Link to="/about" className="rout-link">
              About Us
            </Link>
          </li>
          <li className="px-3 hover:text-orange-500">
            <Link to="/contact" className="rout-link">
              Contact Us
            </Link>
          </li>
          <li className="px-3 hover:text-orange-500">
            <Link to="/grocery" className="rout-link">
              Grocery
            </Link>
          </li>
          <li className="px-3 hover:text-orange-500">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <li className="px-3 hover:text-orange-500">
            <button
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          {/* <li className="px-3 hover:text-orange-500">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;

// Notes:

// When the button is clicked, React updates the value of the state variable `btnName` using `setBtnName`. This makes React create a new virtual DOM with the updated state and re-renders the button name accordingly (either "Login" or "Logout").

// -------------------------------------------------------------------------------------------------------------

/* 
- If there is no dependency array, useEffect will be called on every render.
- If there is an empty dependency array ([]), useEffect will be called only on the initial render (just once).
- If there is something inside the dependency array (e.g., [btnName]), it will be called every time btnName updates. 
*/

// Whenever we click on Home, About Us, or Contact Us, it simply changes the component without rendering the whole page.
