import restroList from "../utils/mockData";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restroData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = restroData?.data;

    return(
        <div className="w-64 p-2 mx-7 my-5 shadow-lg bg-orange-50">
            <img 
            className="rounded-lg"
            alt="restro-logo" 
            src={IMG_CDN_URL + cloudinaryImageId}/>
            <h3 className="text-xl font-bold">{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>Rs.{costForTwo /100} for Two</h5>
            <h5>{deliveryTime} mins</h5>
        </div>
    )
}

export default RestaurantCard;