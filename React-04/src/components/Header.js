import { LOGO_URL } from "../utils/constants" // named imports
import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [ btnName, setBtnName ] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/"><img 
                    className="logo" 
                    src={LOGO_URL} 
                /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/" className="rout-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="rout-link">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="rout-link">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="btn-name" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login") 
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header

// Notes:

// When the button is clicked, React updates the value of the state variable `btnName` using `setBtnName`. This makes React create a new virtual DOM with the updated state and re-renders the button name accordingly (either "Login" or "Logout").

// -------------------------------------------------------------------------------------------------------------

/* 
- If there is no dependency array, useEffect will be called on every render.
- If there is an empty dependency array ([]), useEffect will be called only on the initial render (just once).
- If there is something inside the dependency array (e.g., [btnName]), it will be called every time btnName updates. 
*/

// Whenever we click on Home, About Us, or Contact Us, it simply changes the component without rendering the whole page.