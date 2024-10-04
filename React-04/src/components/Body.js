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
            <div className="filter-btn">
                <button onClick={() => {
                    const filteredList = listOfRestaurants.filter((restaurant) => (
                        restaurant.info.avgRating > 4.2
                    ))
                    setlistOfRestaurants(filteredList)
                }}>Top Rated Restaurants</button>
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