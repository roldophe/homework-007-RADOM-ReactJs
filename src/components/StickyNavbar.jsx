import React from "react";
import {
    Navbar,
    MobileNav,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ProfileMenu } from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuperpowers } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";

export function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const navList = (
        <ul className="container mx-auto  mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? "black hover:text-blue-600 px-3 py-2 text-sm font-medium text-blue-600" : "black hover:text-blue-600 px-3 py-2 text-sm font-medium"}
                aria-current="page"
            >Home
            </NavLink>
            <NavLink
                to="/datatable"
                className={({ isActive }) => isActive ? "black hover:text-blue-600 px-3 py-2 text-sm font-medium text-blue-600" : "black hover:text-blue-600 px-3 py-2 text-sm font-medium"}
                aria-current="page"
            >Data Table
            </NavLink>
            <NavLink
                to="/product"
                className={({ isActive }) => isActive ? "black hover:text-blue-600 px-3 py-2 text-sm font-medium text-blue-600" : "black hover:text-blue-600 px-3 py-2 text-sm font-medium"}
            >Products
            </NavLink>
            <NavLink
                to="/about-us"
                className={({ isActive }) => isActive ? "black hover:text-blue-600 px-3 py-2 text-sm font-medium text-blue-600" : "black hover:text-blue-600 px-3 py-2 text-sm font-medium"}
            >About
            </NavLink>
            <NavLink
                to="/login"
                className={({ isActive }) => isActive ? "black hover:text-blue-600 px-3 py-2 text-sm font-medium text-blue-600" : "black hover:text-blue-600 px-3 py-2 text-sm font-medium"}
            >Account
            </NavLink>
        </ul>
    );
    const { isLogin } = useSelector((state) => state.authReducer);
    return (
        <Navbar className="sticky top-0 z-10 rounded-none bg-gray-900 py-2 lg:py-3">
            <div className="container mx-auto flex items-center justify-between text-white lg:px-4">
                <div className="flex items-center gap-6">
                    <div className="lg:hidden ">
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="current "
                                    className="h-6 w-6 text-white"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}

                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="current"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                    <Link to="/">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="2.3em" className="fill-white hover:fill-blue-600  dark:fill-indigo-200" viewBox="0 0 448 512"><path d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z" /></svg> */}
                        <FontAwesomeIcon icon={faSuperpowers} className='text-white flex mx-auto h-10 w-auto' />
                    </Link>
                </div>
                <div className="flex items-center">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                </div>
                <div className="flex gap-4 items-center">

                    <Button
                        variant="gradient"
                        size="sm"
                        color=""
                        className="hidden lg:inline-block"
                        onClick={() => navigate("/create")}
                    >
                        <span>Insert</span>
                    </Button>
                    <Button
                        variant="gradient"
                        size="sm"
                        color="blue"
                        className="hidden lg:inline-block"
                        onClick={() => isLogin ? dispatch(logout()) : navigate("/login")}
                    >
                        <span>{isLogin ? "Logout" : "LOGIN"}</span>
                    </Button>
                    {<ProfileMenu />}
                </div>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <Button
                    variant="gradient"
                    size="sm" fullWidth
                    color="gray-900"
                    className="container mx-auto mb-2"
                    onClick={() => navigate("/create")}
                >
                    <span>Insert</span>
                </Button>
                <Button
                    variant="gradient"
                    size="sm" fullWidth
                    color="blue"
                    className="container mx-auto mb-2"
                    onClick={() => navigate("/login")}
                >
                    <span>{isLogin ? "Logout" : "LOGIN"}</span>
                </Button>
            </MobileNav>
        </Navbar>
    );
}