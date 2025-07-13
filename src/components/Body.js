import RestaurantCard, { cardWithPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper"; 
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_API } from "../mocks/swiggyApi";

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = cardWithPromotedLabel(RestaurantCard);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants (){
        try{
            const json = SWIGGY_API;
            setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //Optional Chaining
            setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch(error){
            console.log(error)
        }
    }

      const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>Looks like you're offline!! Please check your internet connection;</h1>
        );

    // if(!allRestaurants) return null; //Early return
    // if(filteredRestaurants?.length === 0 ) return <h1>No restaurant match your filter</h1>

    return (allRestaurants.length ===0)? <Shimmer />: ( //Conditional Rendering
        <div className="body">
            <div className="flex justify-center">
                <div className="p-5 my-5 bg-orange-50 w-full flex justify-center">
                    <input data-testid="search-input" type="text" className="focus:bg-gray-200 p-2 m-2 border border-black rounded-lg w-72" placeholder="Search" 
                        value={searchText} onChange={
                            (e) => {setSearchText(e.target.value)}} 
                    >
                    </input>
                    <button data-testid="search-btn" className="p-2 m-2 bg-orange-300 hover:bg-orange-400 text-white rounded-md" onClick={() => {
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}>Search</button>
                </div>

                <div className="filter p-10">
                    <button className="bg-orange-50 rounded-lg p-2 border border-gray-300" 
                        onClick={() => {
                            const filteredList = filteredRestaurants.filter((res) => res.info.avgRating > 4.2);
                            setFilteredRestaurants(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>          
            </div>

            <div className="flex flex-wrap" data-testid="restro-list">
                {
                    filteredRestaurants.map((restaurant) => {
                        return (
                            <Link to = {"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
                                { restaurant.info.isOpen ? <RestaurantCardPromoted  restroData={restaurant} /> : 
                                  <RestaurantCard key={restaurant.info.id} restroData={restaurant} />}
                            </Link>
                        )}
                )}
            </div>
        </div>
    )
}

export default Body;    