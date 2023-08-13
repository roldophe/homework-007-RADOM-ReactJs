function CardProducts(props) {
    return (
        // <h1>Hello Card From First of React</h1>
        <>
            <div class="w-56 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img class="rounded-t-lg" src={props.imageURL} alt="" />
                </a>
                <div class="p-5">
                    <p class="font-normal text-gray-700 dark:text-indigo-200 line-clamp-2">ID: {props.pro_id}</p>
                    <a href="#">
                        <h5 class=" font-normal text-gray-700 dark:text-indigo-200 line-clamp-1">Title: {props.pro_title}</h5>
                    </a>
                    <p class=" font-normal text-gray-700 dark:text-indigo-200 line-clamp-2">Price: {props.pro_price}$</p>
                    <p class=" font-normal text-gray-700 dark:text-indigo-200 line-clamp-2">Description: {props.desc}</p>
                </div>
            </div>
        </>
    )
}
export default CardProducts