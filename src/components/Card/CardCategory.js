function CartCategory(props) {
    return (
        <>
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img class="rounded-t-lg" src={props.imageURL} alt="" />
                </a>
                <div class="p-5">
                    <p class="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">ID: {props.id}</p>
                    <a href="#">
                        <h5 class=" font-normal text-gray-700 dark:text-gray-400 line-clamp-1">Name: {props.name}</h5>
                    </a>
                    <p class=" font-normal text-gray-700 dark:text-gray-400 line-clamp-2">CreationAt: {props.creationAt.substring(0,10) }</p>
                    <p class=" font-normal text-gray-700 dark:text-gray-400 line-clamp-2">UpdatedAt: {props.updatedAt.substring(0,10)}</p>
                </div>
            </div>
        </>
    )
}
export default CartCategory