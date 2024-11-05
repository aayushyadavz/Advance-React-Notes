import React from "react"
import RestaurantCard, { withPriceLabel } from "./RestaurantCard"
import {Shimmer} from "./Shimmer"
import { Link } from "react-router-dom"
import useRestaurantsData from "../utils/coustomHooks/useRestaurantsData"
import useOnlineStatus from "../utils/coustomHooks/useOnlineStatus"

const Body = () => {
    const { 
        filteredRestaurants,
        clearInputSearch,
        searchText,
        setSearchText,
        filterTopRated,
        filterRestaurants,
        isFiltered
    } = useRestaurantsData()

    const onlineStatus = useOnlineStatus()
    const RestaurantCardPriceLabel = withPriceLabel(RestaurantCard)

    if (onlineStatus === false) {
        return (
            <h1>You are out of internet connection! Please turn on you network to see content of this site.</h1>
        )
    }

    return (
        <div className="flex justify-center w-full">
            <div className="w-[70%] mb">
                <div className="flex my-11 mx-14">
                    <div className="flex flex-1 border-solid border-2 border-gray-300 rounded-lg overflow-hidden">
                        <input 
                            type="text" 
                            className="w-full py-2 px-4 focus:outline-none text-lg font-semibold" 
                            placeholder="Search for restaurants and food" 
                            value={searchText} 
                            onChange={(e) => { 
                                setSearchText(e.target.value) 
                            }} 
                        />
                        { searchText && (<button className="bg-white text-gray-500 text-3xl pr-2 pb-1 font-semibold" onClick={clearInputSearch}>&times;</button>) }
                    </div>
                    <button 
                        onClick={filterRestaurants}
                    ><i className="fa-solid fa-magnifying-glass text-xl text-gray-500 ml-3 pt-1"></i></button>
                </div>
                <h1 className="text-3xl font-bold">Restaurants with online food delivery near you</h1>
                <div className="mt-5 mb-8 font-medium text-sm">
                    <button
                        className={`border border-gray-400 p-2 rounded-full shadow-md ${isFiltered ? 'bg-gray-200' : 'bg-transparent'}`}
                        onClick={filterTopRated}  
                    >Top Rated Restaurants</button>
                </div>
                { filteredRestaurants.length === 0 ? (
                        <div className="flex flex-wrap justify-between">
                            {Array(12).fill("").map((_, index) => <Shimmer key={index} />)} 
                        </div>
                    ) : <div className="flex flex-wrap justify-between">
                        { filteredRestaurants.map( (restaurant) => (                       
                                <Link 
                                    to={"/menu/"+ restaurant.info.id} 
                                    key={restaurant.info.id}
                                    >
                                    { restaurant.info.aggregatedDiscountInfoV3 ? 
                                        <RestaurantCardPriceLabel resData={restaurant} /> : 
                                        <RestaurantCard resData={restaurant} /> 
                                    }
                                </Link>                        
                            )) 
                        }
                    </div> 
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

// -------------------------------------------------------------------------------------------------------

// Higher Order Function 

// withPriceLabel is a Higher-Order Component. We have passed the RestaurantCard component into it, and it will return a new component with a label inside. Therefore, the RestaurantCardPriceLabel component includes a label.
