// Coustom Hook
import { useState, useEffect } from "react"
import { MENU_URL } from "../constants"
import { REST_OF_MENU_URL } from "../constants"

const useRestaurantsMenu = (resId) => {
    const [ resMenu, setResMenu ] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const response = await fetch( MENU_URL + resId + REST_OF_MENU_URL) // Putting resId between the Api URL
        const data = await response.json()
        setResMenu(data.data)
    }

    return resMenu
}

export default useRestaurantsMenu

// Notes:

// Abstracted or extracted the data-fetching logic into this component so that the RestaurantsMenu component doesn't need to handle data fetching or manage its own state.