import React, { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"

const Body = () => {
    const [ listOfRestaurants, setlistOfRestaurants ] = useState(resList)

    return (
        <div className="body">
            <div className="search">
              <input type="text" className="search-input" placeholder="Search Food or Restaurant" />
              <button>Search</button>
            </div>
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.2
                        )
                        setlistOfRestaurants(filteredList)
                    }}  
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                { listOfRestaurants.map( (restaurant) => (
                    <RestaurantCard resData={restaurant} key={restaurant.info.id} /> 
                  )) 
                }
            </div>
        </div>
    )
}

export default Body

// Notes : 

// How React works behind the scenes:

// React uses something called a "virtual DOM," which is a simple version of the actual DOM.
// The virtual DOM is made up of JavaScript objects that represent the structure of the real DOM.

// When the UI changes (like clicking a filter button), React creates an updated virtual DOM.
// React then compares the previous virtual DOM with the new one to find any differences, this process is called "diffing."

// For example, if you have a list of cards and apply a filter, React checks what has changed between the old list and the filtered list.

// React only updates the parts of the real DOM that need to change, instead of reloading the entire UI. This makes the app faster and more efficient.

// React repeats this process whenever the state variable updates. React keeps an eye on the state variable, and as soon as we call setListOfRestaurants, React identifies the difference and updates the UI.