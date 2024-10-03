import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"

const Body = () => {
    return (
        <div className="body">
            <div className="search">
              <input type="text" class="search-input" placeholder="Search Food or Restaurant" />
              <button>Search</button>
            </div>
            <div className="res-container">
                { resList.map( (restaurant) => (
                    <RestaurantCard resData={restaurant} key={restaurant.info} /> 
                  )) 
                }
            </div>
        </div>
    )
}

export default Body