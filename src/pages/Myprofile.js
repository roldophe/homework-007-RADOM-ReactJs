import { faAndroid, faBootstrap, faJava } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProfile } from '../redux/actions/profileAction';
import secureLocalStorage from 'react-secure-storage';

const Myprofile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLogin, auth, } = useSelector((state) => state.authReducer);
    const { profile } = useSelector((state) => state.profile)

    useEffect(() => {
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
    }, [])
    return (
        <main class="container mx-auto bg-gray-100 my-10">{
            isLogin ?
                <div class="shadow-md shadow-gray-700 rounded-lg">
                    {/* <!-- top content --> */}
                    <div class="flex rounded-t-lg bg-top-color bg-gray-900 sm:px-2 w-full">
                        <div class="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
                            <img src={profile.avatar} />
                        </div>

                        <div class="w-2/3 sm:text-center pl-5 mt-10 text-start">
                            <p class="font-poppins font-bold text-heading sm:text-4xl text-2xl text-white">
                                {profile && profile.name}
                            </p>
                            <p class="text-heading text-gray-300">{profile && profile.role}</p>
                        </div>

                    </div>

                    {/* <!-- main content --> */}
                    <div class="p-5">

                        <div class="flex flex-col sm:flex-row sm:mt-10">

                            <div class="flex flex-col sm:w-1/3">
                                {/* <!-- My contact --> */}
                                <div class="py-3 sm:order-none order-3">
                                    <h2 class="text-lg font-poppins font-bold text-top-color text-blue-700">My Contact</h2>
                                    <div class="border-2 w-20 border-top-color my-3"></div>

                                    <div>
                                        <div class="flex items-center my-1">
                                            <a class="w-6 text-gray-700 hover:text-orange-600"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-4">
                                                <path fill="currentColor"
                                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                                </path>
                                            </svg>
                                            </a>
                                            <div class="ml-2 truncate">{profile && profile.email}</div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <a class="w-6 text-gray-700 hover:text-orange-600"
                                                aria-label="Visit TrendyMinds YouTube" href="" target="_blank"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-4">
                                                    <path fill="currentColor"
                                                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                                    </path>
                                                </svg>
                                            </a>
                                            <div>9145258775</div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <a class="w-6 text-gray-700 hover:text-orange-600"
                                                aria-label="Visit TrendyMinds Facebook" href="" target="_blank"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-4">
                                                    <path fill="currentColor"
                                                        d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                                    </path>
                                                </svg>
                                            </a>
                                            <div>sale galli latur</div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <a class="w-6 text-gray-700 hover:text-orange-600"
                                                aria-label="Visit TrendyMinds Twitter" href="" target="_blank"><svg class="h-4"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                                    </path>
                                                </svg>
                                            </a>
                                            <div>amitpachange21</div>
                                        </div>

                                    </div>
                                </div>
                                {/* <!-- Skills --> */}
                                <div class="py-3 sm:order-none order-2">
                                    <h2 class="text-lg font-poppins font-bold text-top-color text-blue-700">Skills</h2>
                                    <div class="border-2 w-20 border-top-color my-3"></div>

                                    <div>
                                        <div class="flex items-center my-1">
                                            <a class="w-6 text-gray-700 hover:text-orange-600">
                                                <FontAwesomeIcon icon={faBootstrap} />
                                            </a>
                                            <div class="ml-2">BootStrap CSS</div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <a class="w-6 text-gray-700 hover:text-orange-600"
                                                aria-label="Visit TrendyMinds YouTube"
                                                href="" target="_blank"
                                            >
                                                <FontAwesomeIcon icon={faJava} />
                                            </a>
                                            <div class="ml-2">Java</div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <a class="w-6 text-gray-700 hover:text-orange-600"
                                                aria-label="Visit TrendyMinds Facebook" href="" target="_blank">
                                                <FontAwesomeIcon icon={faAndroid} />
                                            </a>
                                            <div class="ml-2">Andoid</div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <a class="w-6 text-gray-700 hover:text-orange-600"
                                                aria-label="Visit TrendyMinds Twitter" href="" target="_blank">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                                                        stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                                    <path d="M13.9868 5L12.9934 8.70743M11.8432 13L10.0132 19.8297" stroke="#1C274C"
                                                        stroke-width="1.5" stroke-linecap="round" />
                                                    <path
                                                        d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                                                        stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                                </svg>
                                            </a>
                                            <div class="ml-2">Html, Css, JS</div>
                                        </div>

                                    </div>
                                </div>
                                {/*  <!-- Education Background --> */}
                                <div class="py-3 sm:order-none order-1">
                                    <h2 class="text-lg font-poppins font-bold text-top-color">Education Background</h2>
                                    <div class="border-2 w-20 border-top-color my-3"></div>

                                    <div class="flex flex-col space-y-1">

                                        <div class="flex flex-col">
                                            <p class="font-semibold text-xs text-gray-700">2021</p>
                                            <p class="text-sm font-medium">
                                                <span class="text-green-700">B.E. (INFORMATION TECHNOLOGY)</span>, PIMPRI CHINCHWAD
                                                COLLEGE OF ENGINEERING, PUNE.
                                            </p>
                                            <p class="font-bold text-xs text-gray-700 mb-2">Percentage: 76.61</p>
                                        </div>
                                        <div class="flex flex-col">
                                            <p class="font-semibold text-xs text-gray-700">2017</p>
                                            <p class="text-sm font-medium"><span class="text-green-700">HSC</span>, RAJARSHI SHAHU
                                                COLLEGE, LATUR.</p>
                                            <p class="font-bold text-xs text-gray-700 mb-2">Percentage: 80.77</p>
                                        </div>
                                        <div class="flex flex-col">
                                            <p class="font-semibold text-xs text-gray-700">2015</p>
                                            <p class="text-sm font-medium"><span class="text-green-700">SSC</span>, DNYANESHWAR HIGH
                                                SCHOOL, LATUR.</p>
                                            <p class="font-bold text-xs text-gray-700 mb-2">Percentage: 93.80</p>
                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div class="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">

                                {/* <!-- About me --> */}
                                <div class="py-3">
                                    <h2 class="text-lg font-poppins font-bold text-top-color text-blue-700">About Me</h2>
                                    <div class="border-2 w-20 border-top-color my-3"></div>
                                    <p>To get a career opportunity which would help me to utilize my academic background to assist
                                        me to gain experience, employ my excellent skills, and enable me to make positive
                                        contribution.</p>
                                </div>

                                {/* <!-- Professional Experience --> */}
                                <div class="py-3">
                                    <h2 class="text-lg font-poppins font-bold text-top-color text-blue-700">Professional Experience</h2>
                                    <div class="border-2 w-20 border-top-color my-3"></div>

                                    <div class="flex flex-col">

                                        <div class="flex flex-col">
                                            <p class="text-lg font-bold text-gray-700">Netcracker Technology | Software Engineer</p>
                                            <p class="font-semibold text-sm text-gray-700">2021 - Present</p>
                                            <p class="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</p>
                                            <ul class="text-sm list-disc pl-4 space-y-1">
                                                <li>Working on customer facing product</li>
                                                <li>Deliverying highly efficient solutions</li>
                                                <li>Solving critical bugs</li>
                                            </ul>
                                        </div>

                                        <div class="flex flex-col mt-8">
                                            <p class="text-lg font-bold text-gray-700">TailwindFlex.com | Lead</p>
                                            <p class="font-semibold text-sm text-gray-700">2020-2021</p>
                                            <p class="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</p>
                                            <ul class="text-sm list-disc pl-4 space-y-1">
                                                <li>Developed usable components</li>
                                                <li>Solving complex problems</li>
                                                <li>Solving critical bugs</li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>

                                {/* <!-- Projects --> */}
                                <div class="py-3">
                                    <h2 class="text-lg font-poppins font-bold text-top-color">Projects</h2>
                                    <div class="border-2 w-20 border-top-color my-3"></div>

                                    <div class="flex flex-col">

                                        <div class="flex flex-col">
                                            <p class="text-lg font-semibold text-gray-700">Used Books mobile app</p>
                                            <p class="font-normal text-sm text-gray-700 mb-1 pl-2">A platform to sell as well as to
                                                buy used books only for PCCoE College due to this reuse of books will be there
                                                beneficial for environment also indirectly helps increase communication between
                                                juniors and seniors.</p>
                                        </div>
                                        <div class="flex flex-col">
                                            <p class="text-lg font-semibold text-gray-700">Parking Automation System</p>
                                            <p class="font-normal text-sm text-gray-700 mb-1 pl-2">it's a web application which
                                                helps you to book your slot for your car just like booking a movie ticket from home.
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div> :
                <div class="flex flex-col h-screen bg-center bg-cover bg-no-repeat bg-gray-100">
                    <div
                        class="grid place-items-center w-4/5 mx-auto p-10 my-20 sm:my-auto bg-white-600 border-4 border-indigo-600 bg-opacity-70 rounded-xl shadow-2xl space-y-5 text-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="h-24 w-24 text-indigo-600" viewBox="0 0 16 16">
                            <path
                                d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z">
                            </path>
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"></path>
                        </svg>
                        <h1 class="text-4xl font-bold uppercase text-indigo-600 transition duration-500">Coming Soon</h1>
                        <h2 class="text-xl text-gray-700 transition duration-500">
                            We are almost there to introduce our new website to the world, in the meantime, you can follow us on social
                            networks to get the latest updates.
                        </h2>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <a href="https://www.facebook.com/" title="Quicktoolz On Facebook"
                                class="md:w-32 tracking-wide font-bold rounded border-2 border-indigo-500 hover:text-white hover:border-blue-600 hover:bg-blue-600 shadow-md py-2 px-6 inline-flex items-center transition duration-500">
                                <span class="mx-auto">Facebook</span>
                            </a>
                            <a href="https://twitter.com" title="Quicktoolz On Twitter"
                                class="md:w-32 tracking-wide font-bold rounded border-2 border-indigo-500 hover:text-white hover:border-blue-500 hover:bg-blue-500 shadow-md py-2 px-6 inline-flex items-center transition duration-500">
                                <span class="mx-auto">Twitter</span>
                            </a>
                            <a href="https://pinterest.com/" title="Quicktoolz On Pinterest"
                                class="md:w-32 tracking-wide font-bold rounded border-2 border-indigo-500 hover:text-white hover:border-red-600 hover:bg-red-600 shadow-md py-2 px-6 inline-flex items-center transition duration-500">
                                <span class="mx-auto">Pintrest</span>
                            </a>
                            <a href="https://www.reddit.com/" title="Quicktoolz On Facebook"
                                class="md:w-32 tracking-wide font-bold rounded border-2 border-indigo-500 hover:text-white hover:border-yellow-600 hover:bg-yellow-600 shadow-md py-2 px-6 inline-flex items-center transition duration-500">
                                <span class="mx-auto">Reddit</span>
                            </a>
                        </div>
                    </div>
                </div>

        }
        </main>

    );
}

export default Myprofile;
