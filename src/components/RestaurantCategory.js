import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    const handleClick = () => {
        setShowIndex();
    }

    return(
        <div>
            {/*Accordian header*/}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg">
                <div onClick={handleClick} className="flex justify-between cursor-pointer">
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
            {/*Accordian Body */}
            {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;