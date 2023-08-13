import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header className="bg-gray-900 dark:bg-gray-900 text-white dark:text-indigo-200">
            <nav class="container mx-auto flex flex-wrap items-center justify-between px-5 py-3">

                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" height="2.5em" className="fill-white hover:fill-indigo-200  dark:fill-indigo-200" viewBox="0 0 448 512"><path d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z" /></svg>
                </Link>
                <div class="flex md:hidden">
                    <div class="flex md:hidden text-white">
                        <button id="hamburger" onClick={toggleMenu}>
                            <img className={`toggle ${menuOpen ? "hidden" : ""}`} src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                            <img className={`toggle ${menuOpen ? "" : "hidden"}`} src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
                        </button>
                    </div>
                </div>
                <div className={`toggle ${menuOpen ? "" : "hidden"} w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none`}>
                    <div class="flex space-x-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "black hover:text-blue-900 rounded-md px-3 py-2 text-sm font-medium text-blue-900" : "black hover:text-blue-900 rounded-md px-3 py-2 text-sm font-medium"}
                            aria-current="page"
                        >Home
                        </NavLink>
                        <NavLink
                            to="/datatable"
                            className={({ isActive }) => isActive ? "black hover:text-blue-900 rounded-md px-3 py-2 text-sm font-medium text-blue-900" : "black hover:text-blue-900 rounded-md px-3 py-2 text-sm font-medium"}
                            aria-current="page"
                        >Data Table
                        </NavLink>
                        <NavLink
                            to="/product"
                            className={({ isActive }) => isActive ? "black hover:text-blue-900 rounded-md px-3 py-2 text-sm font-medium text-blue-900" : "black hover:text-blue-900 rounded-md px-3 py-2 text-sm font-medium"}
                        >Products
                        </NavLink>
                        <NavLink
                            to="/about-us"
                            className={({ isActive }) => isActive ? "black hover:text-blue-900 rounded-md px-3 py-2 text-sm font-medium text-blue-900" : "black hover:text-blue-900 rounded-md px-3 py-2 text-sm font-medium"}
                        >About
                        </NavLink>
                        <NavLink
                            to="/create"
                            className={({ isActive }) => isActive ? "flex md:hidden black  hover:text-blue-900 rounded-md px-3 py-2 text-sm font-medium text-blue-900" : " flex md:hidden black  hover:text-blue-900 rounded-md px-3 py-2 text-sm font-medium"}
                        >Insert
                        </NavLink>
                    </div>
                </div>
                <button href="#"
                    className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right focus:ring-4 bg-blue-500 hover:bg-blue-500 text-white hover:text-blue-900 md:rounded-lg"
                    onClick={() => navigate("/create")}
                >Insert
                </button>
            </nav>
        </header>
    )
}