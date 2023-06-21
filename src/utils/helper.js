export const filterData = (searchText, allRestaurants) => {
    return allRestaurants.filter((restro) => 
        restro?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
}