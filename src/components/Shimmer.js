const Shimmer = () => {
    return(
        <div className="flex flex-wrap pt-4 " data-testid="shimmer">
        {
            Array(15).fill("").map((e, index) => (<div key={index} className="w-56 h-64 p-2 m-2 shadow-lg bg-gray-100"></div>))
        }
    </div>
    )
}

export default Shimmer;