import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    const params = useParams();
    const {resId} = params;
    
    const [res, setRes] = useState([{name:"abc"},{name:"xyz"}]);

    //const [restaurant, setRestaurant] = useState(null);
    const restaurant = useRestaurant(resId);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {a
        dispatch(addItem(item));   //{payload: "Grapes"}
    }

    return (!restaurant)? <Shimmer /> : (
        <div className="flex">
            <div>
                <h1>Restaurant ID: {resId}</h1>
                <h2>{restaurant?.name}</h2>
                <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <h3>{restaurant?.areaName}</h3>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.avgRating} stars</h3>
                <h3>{restaurant?.costForTwoMsg}</h3>
            </div>

            <div className="p-5">
                <h1>Menu</h1>
                <ul data-testid="menu">
                    {res.map((item) => (
                        <li key={item.name}>{item.name} - 
                            <button data-testid="addBtn" onClick={() => addFoodItem(item)} className="p-1 bg-orange-100">Add</button>
                        </li>)
                    )}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;