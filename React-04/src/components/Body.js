import React, { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"

const Body = () => {
    const [ listOfRestaurants, setlistOfRestaurants ] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.0739138&lng=83.18594949999999&carousel=true&third_party_vendor=1")

        const json = await data.json()

        console.log(json);
        setlistOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.
            restaurants)
    }

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

// -------------------------------------------------------------------------------------------------------

// useEffect() - is a regular JavaScript function that takes two arguments: a callback function and a dependency array. The callback function inside useEffect is called after the component renders.

// Here, Once we have rendered the body component, we will use useEffect.