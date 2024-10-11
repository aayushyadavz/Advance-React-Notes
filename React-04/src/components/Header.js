import { LOGO_URL } from "../utils/constants" // named imports
import { useState } from "react"

const Header = () => {
    const [ btnName, setBtnName ] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src={LOGO_URL} 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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