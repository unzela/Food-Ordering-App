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
        setRestaurant(json.data);
        //console.log(json?.data?.cards[3].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards);    
    }

    return restaurant;
}

export default useRestaurant;