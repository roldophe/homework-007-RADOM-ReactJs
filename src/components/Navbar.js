import { Link, useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate()
    return (
        <header class="bg-white dark:bg-gray-900">
            <div class="container mx-auto pl-3" >
                <div class="relative flex h-16 items-center justify-between dark:text-white">
                    <div class="flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 items-center">
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" height="2.5em" className="fill-black-300 dark:fill-white" viewBox="0 0 448 512"><path d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z" /></svg>
                            </Link>
                        </div>
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "black hover:bg-blue-700 hover:text-white" --> */}
                                <Link to="/datatable" class="black hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</Link>
                                <a href="/" class="black hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                                <a href="/" class="black hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                                <Link to="/about-us" class="black hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</Link>
                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            class="black hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={() => navigate("/create")}
                        >
                            Insert
                        </button>
                        <button
                            type="button"
                            class="black hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            <div class="sm:hidden flex justify-center" >
                <div class="space-y-1 px-2 pb-3 pt-2 dark:text-white ">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "black hover:bg-blue-700 hover:text-white" --> */}
                    <Link to="/datatable" class="black hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</Link>
                    <a href="/" class="black hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                    <a href="/" class="black hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                    <Link to="/about-us" class="black hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</Link>
                </div>
            </div>
        </header>
    )
}
export default Navbar