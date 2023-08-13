import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

export function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);
    const navigate = useNavigate()
    const navList = (
        <ul className="container mx-auto  mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-gray-900">
            <Typography
                as="li"
                variant="medium"
                color="blue"
                className="p-1 font-normal"
            >
                <a href="/" className="flex items-center">
                    Pages
                </a>
            </Typography>
            <Typography
                as="li"
                variant="medium"
                color="blue"
                className="p-1 font-normal"
            >
                <a href="/" className="flex items-center">
                    Account
                </a>
            </Typography>
            <Typography
                as="li"
                variant="medium"
                color="blue"
                className="p-1 font-normal"
            >
                <a href="/" className="flex items-center">
                    Blocks
                </a>
            </Typography>
            <Typography
                as="li"
                variant="medium"
                color="blue"
                className="p-1 font-normal"
            >
                <a href="/" className="flex items-center">
                    Docs
                </a>
            </Typography>
        </ul>
    );

    return (
        <div className="max-h-[768px] w-[calc(100%+48px)]">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-3">
                <div className="container mx-auto flex items-center justify-between text-blue-900">

                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" height="2.5em" className="fill-blue-600 hover:fill-blue-600  dark:fill-indigo-200" viewBox="0 0 448 512"><path d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z" /></svg>
                    </Link>

                    <div className="flex items-center">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-gray-900 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="current "
                                    className="h-6 w-6 text-blue-600"
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
                                    className="h-6 w-6 text-blue-600"
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
                    <Button
                        variant="gradient"
                        size="md"
                        color="blue"
                        className="hidden lg:inline-block"
                        onClick={() => navigate("/create")}
                    >
                        <span>Insert</span>
                    </Button>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <Button
                        variant="gradient"
                        size="md" fullWidth
                        color="blue"
                        className="container mx-auto mb-2"
                        onClick={() => navigate("/create")}
                    >
                        <span>Insert</span>
                    </Button>
                </MobileNav>
            </Navbar>
            <div className="mx-auto max-w-screen-md py-12">
                <Card className="mb-12 overflow-hidden">
                    <img
                        alt="nature"
                        className="h-[32rem] w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
                    />
                </Card>
                <Typography variant="h2" color="blue-gray" className="mb-2">
                    What is Material Tailwind
                </Typography>
                <Typography color="gray" className="font-normal">
                    Can you help me out? you will get a lot of free exposure doing this
                    can my website be in english?. There is too much white space do less
                    with more, so that will be a conversation piece can you rework to make
                    the pizza look more delicious other agencies charge much lesser can
                    you make the blue bluer?. I think we need to start from scratch can my
                    website be in english?, yet make it sexy i&apos;ll pay you in a week
                    we don&apos;t need to pay upfront i hope you understand can you make
                    it stand out more?. Make the font bigger can you help me out? you will
                    get a lot of free exposure doing this that&apos;s going to be a chunk
                    of change other agencies charge much lesser. Are you busy this
                    weekend? I have a new project with a tight deadline that&apos;s going
                    to be a chunk of change. There are more projects lined up charge extra
                    the next time.
                </Typography>
            </div>
        </div>
    );
}