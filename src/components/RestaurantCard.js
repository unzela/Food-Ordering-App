import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restroData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = restroData?.info;

    return(
        <div className="w-64 p-2 mx-6 my-5 shadow-lg bg-orange-50">
            <img 
            className="rounded-lg"
            alt="restro-logo" 
            src={IMG_CDN_URL + cloudinaryImageId}/>
            <h3 className="text-xl font-bold">{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>Rs.{costForTwo}</h5>
            <h5>{sla.deliveryTime} mins</h5>
        </div>
    )
}

export const cardWithPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;