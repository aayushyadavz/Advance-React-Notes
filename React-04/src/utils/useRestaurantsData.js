// Coustom hook
import { useState, useEffect } from "react"

const useRestaurantsData = () => {
    const [ listOfRestaurants, setlistOfRestaurants ] = useState([])
    const [ filteredRestaurants, setFilteredRestaurants ] = useState([])
    const [ searchText, setSearchText ] = useState("")

    // data fetching
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const data = await response.json()
        setlistOfRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // cross button clear input
    const clearInputSearch = () => {
        setSearchText("")
        setFilteredRestaurants(listOfRestaurants)
    }

    // filter button top rated restaurants
    const filterTopRated = () => {
        const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.5                                       
        )
        setFilteredRestaurants(filteredList)
    }

    // filter restaurants search
    const filterRestaurants = () => {
        const filteredRestaurants = listOfRestaurants.filter((res) => (
            res.info.name.toLowerCase().includes(searchText.toLowerCase()) || res.info.cuisines.some(cuisines => cuisines.toLowerCase().includes(searchText.toLowerCase()))
        ))
        setFilteredRestaurants(filteredRestaurants)
    }

    return {
        filteredRestaurants,
        clearInputSearch,
        searchText,
        setSearchText,
        filterTopRated,
        filterRestaurants
    }
}

export default useRestaurantsData