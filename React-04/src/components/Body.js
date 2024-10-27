import React from "react"
import RestaurantCard from "./RestaurantCard"
import { Shimmer } from "./Shimmer"
import { Link } from "react-router-dom"
import useRestaurantsData from "../utils/useRestaurantsData"

const Body = () => {
    const { 
        filteredRestaurants,
        clearInputSearch,
        searchText,
        setSearchText,
        filterTopRated,
        filterRestaurants
    } = useRestaurantsData()

    return (
        <div className="body">
            <div className="search">
                <div className="search-input-container">
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search for restaurants and food" 
                        value={searchText} 
                        onChange={(e) => { 
                            setSearchText(e.target.value) 
                        }} 
                    />
                    { searchText && (<button className="clear-icon" onClick={clearInputSearch}>&times;</button>) }
                </div>
              <button 
                onClick={filterRestaurants}
              ><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <h1 className="res-top-heading">Restaurants with online food delivery near you</h1>
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={filterTopRated}  
                >Top Rated Restaurants</button>
            </div>
            { filteredRestaurants.length === 0 ? (
                    <div className="shim-container">
                        {Array(10).fill("").map((_, index) => <Shimmer key={index} />)} 
                    </div>
                ) : <div className="res-container">{ filteredRestaurants.map( (restaurant) => (                       
                        <Link 
                            className="res-card-link"
                            to={"/menu/"+ restaurant.info.id} 
                            key={restaurant.info.id}
                            ><RestaurantCard resData={restaurant}/>
                        </Link>                        
                    )) }
                </div> 
            }
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

// The idea of a shimmer UI is to show something to the user very quickly as soon as our app loads. First, render the shimmer UI, then make an API call, and afterward, render it with the actual data.

// -------------------------------------------------------------------------------------------------------
// Search Functionality:

// Initially, the searchText state is empty by default and bound to the input box.
// When the user types something into the input box, the onChange event handler updates the searchText state with the current input value, so the state always reflects what's being typed.

// After clicking the Search button, we use the filter method on listOfRestaurants (which holds the original full list of restaurants).
// The filter method checks each restaurant's name against the searchText, and we update the copy variable, filteredRestaurants, with the filtered results (restaurants that match the search query).

// By doing this, we ensure that the original listOfRestaurants remains unchanged, so if we perform another search, we can filter from the complete original list again without losing any data.

// --------------------------------------------------------------------------------------------------------
// listOfRestaurants vs filteredRestaurants:

// At first, when the page loads, useEffect triggers the fetchData function, which fetches the full list of restaurants from the API and stores it in both listOfRestaurants and filteredRestaurants.

// We're rendering filteredRestaurants using map, and initially, filteredRestaurants holds the full list of restaurants (since it's a copy of listOfRestaurants after fetching the data).

// When the user searches for something, we update filteredRestaurants with only the matching items, and because we're rendering filteredRestaurants, the display shows only the filtered results.

// Even after filtering, listOfRestaurants still holds the full list, so if we search again, we can always filter from the complete data set.

// After refreshing the page, the API fetches the full data again, and both listOfRestaurants and filteredRestaurants are re-populated, so the full list is shown by default.

// -------------------------------------------------------------------------------------------------------

// To make the cards clickable, we used the Link component provided by React Router DOM, which redirects to the specified path. The restaurant's ID is linked to the path dynamically.