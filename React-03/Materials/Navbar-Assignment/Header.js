import React from "react";
import ReactDOM from "react-dom/client"
import icon from "./images/icon.png"
import profile from "./images/profile.png"
import "./header.css"

const Header = () => {
    return (
        <header>
            <nav>
                <img src={icon} alt="logo" className="logo"/>
                <input type="search" placeholder="Search Somthing" aria-label="Search" />
                <img src={profile} alt="profile" className="user-profile"/>
            </nav>
        </header>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header />)