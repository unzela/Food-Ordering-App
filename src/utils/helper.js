export const filterData = (searchText, allRestaurants) => {
    return allRestaurants.filter((restro) => 
        restro?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
}