 import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const handleSearch = () => {
        const filteredRes = listOfRestaurants.filter((res) =>
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filteredRes);
    };

    console.log(listOfRestaurants);

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        
        const json = await data.json();
        //Optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you are offline! Please connect to the internet.</h1>

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="bg-white">
            <div className="filter flex">
                <div className ="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value = {searchText} onChange={(e) => setSearchText(e.target.value)
                    } />
                    <button className= "px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={handleSearch}>Search
                    </button>
                </div>
                <div className ="m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );                    
                    setFilteredRestaurants(filteredList);
                }} 
                >Top Rated Restaurants</button>

                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant) => 
                    <Link 
                    key= {restaurant.info.id}
                    to={"/restaurants/" + restaurant.info.id}>
                        {restaurant.info.veg ? (
                            <RestaurantCardPromoted resData={restaurant} />
                        ) : (
                            <>
                            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Non-Veg 🍗</label>
                            <RestaurantCard resData={restaurant}/>
                            </>
                        )
                        }                    
                    </Link>)
                }
                
            </div>
        </div>
    )
} 

export default Body;