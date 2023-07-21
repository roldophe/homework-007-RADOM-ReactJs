function CartCategory(props) {
    return (
        <>
            <div class="max-w-sm bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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