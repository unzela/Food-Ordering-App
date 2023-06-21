import RestaurantCard from "./RestaurantCard";
import restroList from "../utils/mockData";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper"; 

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants (){
        try{
            const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); //Optional Chaining
            setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        }
        catch(error){
            console.log(error)
        }
    }

    // if(!allRestaurants) return null; //Early return
    // if(filteredRestaurants?.length === 0 ) return <h1>No restaurant match your filter</h1>

    return (allRestaurants.length ===0)? <Shimmer />: ( //Conditional Rendering
        <div className="body">
            <div className="flex">
                <div className="p-5 my-5 bg-orange-50">
                    <input data-testid="search-input" type="text" className="focus:bg-gray-200 p-2 m-2" placeholder="Search" 
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
                    <button className="filter-btn" 
                        onClick={() => {
                            const filteredList = allRestaurants.filter((res) => res.data.avgRating > 4);
                            setAllRestaurants(filteredList);
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
                            <Link to = {"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
                                <RestaurantCard key={restaurant.data.id} restroData={restaurant}/>
                            </Link>
                        )}
                )}
            </div>
        </div>
    )
}

export default Body;    