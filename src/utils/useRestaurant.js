import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "./constants";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    } , []);

    async function getRestaurantInfo () {
        const data = await fetch (FETCH_MENU_URL + resId);
        const json = await data.json();
        const itemCard =json.data.cards[0].card.card.info;
        const menuItemsList = json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        
        //const menuItemsList = json.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
        setRestaurant(itemCard);
        console.log(menuItemsList);
    }

    return restaurant;
}

export default useRestaurant;