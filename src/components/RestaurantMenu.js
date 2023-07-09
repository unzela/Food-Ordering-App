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

    const restaurant = useRestaurant(resId);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));   //dispatch(ation name(payload))
    }

    if (restaurant == null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, cloudinaryImageId, areaName, avgRating, city } = restaurant?.cards[0]?.card?.card?.info;
    const itemCards = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards;
    console.log(itemCards);

    return (
        <div className="flex flex-col m-10 text-center">
            <div className="flex justify-center">
                <img className="w-56 rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
                <div className="px-20">
                    <h2 className="font-bold text-md">{name}</h2>
                    <h1>Restaurant ID: {resId}</h1>
                    <h2>{cuisines.join(", ")}</h2>
                    <h3>{areaName}</h3>
                    <h3>{city}</h3>
                    <h3>{avgRating} stars</h3>
                    <h3>{costForTwoMessage}</h3>   
                </div>
            </div>

            <div className="">
                <h1 className="text-xl font-bold py-10">Menu Items</h1>
                <ul className="flex flex-wrap" data-testid="menu">
                    {itemCards?.map((item) => (
                    <li key={item.card.info.id} className="m-10 text-center shadow-md w-80 ml-auto mr-auto">

                        <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                        className="h-40 m-auto" />

                        <p className="font-semibold">{item.card.info.name} -{" Rs."}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                        </p>

                        <p>{item.card.info.description}</p> 
                        
                        <button data-testid="addBtn" onClick={() => addFoodItem(item.card.info)} className="p-1 m-2 bg-orange-100 rounded-lg">Add</button>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;