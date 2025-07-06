import { useParams } from "react-router";
import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(0);
    const params = useParams();
    const {resId} = params;
    const restaurant = useRestaurantMenu(resId);

    if (restaurant == null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, cloudinaryImageId, areaName, avgRating, city } = restaurant?.cards[2]?.card?.card?.info;
    const categories = restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

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
                { /*Accordian */}
                {categories.map((category, index) => (
                    //Controlled Component
                    <RestaurantCategory key={category?.card?.card.title}
                    data={category.card.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu;