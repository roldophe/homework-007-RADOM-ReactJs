import React, { useEffect } from "react";
import {
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/profileAction";
import secureLocalStorage from "react-secure-storage";
import { logout } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";


export function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLogin, auth, } = useSelector((state) => state.authReducer);
    const { profile } = useSelector((state) => state.profile)
    /* useEffect(() => {
        dispatch(fetchProfile(secureLocalStorage.getItem('auth')));
    }, [isLogin, auth, dispatch]); */
    useEffect(() => {
        console.log("login: ", isLogin)
        const fetchUserProfile = async () => {
            try {
                const response = await dispatch(fetchProfile(secureLocalStorage.getItem("auth")));
                // Handle successful response
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    // Handle 401 Unauthorized error
                    // For example, redirect to the login page or display an error message
                    console.log("User is not authorized. Redirecting to login page...");
                } else {
                    // Handle other errors
                    console.log("An error occurred while fetching the profile:", error.message);
                }
            }
        };

        if (isLogin && auth) {
            fetchUserProfile();
        }
    }, [isLogin, auth, dispatch]);
    // profile menu component
    const profileMenuItems = [
        {
            label: "My Profile",
            icon: UserCircleIcon,
        },
        {
            label: "Edit Profile",
            icon: Cog6ToothIcon,
        },
        {
            label: "Inbox",
            icon: InboxArrowDownIcon,
        },
        {
            label: "Help",
            icon: LifebuoyIcon,
        },
        {
            label: isLogin ? "Sign Out" : "Sign In",
            icon: PowerIcon,
        },
    ];
    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5"
                        src={isLogin ? profile?.avatar || "https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3-800x800.png" :
                            "https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3-800x800.png"}
                    /* This way, if profile?.avatar is undefined or null, it will fall back to the placeholder image URL. */
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    const isFirstItem = key === 0;
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                : ""
                                }`}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                                onClick={() => {
                                    if (isLastItem) {
                                        isLogin ? dispatch(logout()) : navigate("/login");
                                    } else if (isFirstItem) {
                                        isLogin ? navigate("/my_profile") : navigate("/login");
                                    } else {
                                        navigate("/");
                                    }
                                }}

                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}
