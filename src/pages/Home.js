import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Lottie from "lottie-react"
import animationData from "../assets/animation_lky90qnr.json"
import TextAnimation from '../components/Animation/TextAnimation';

export default function Home() {
    const prodRef = useRef(null);
    const [reverseCount, setReverseCount] = useState(0);
    const maxReverseCount = 1; // Set the maximum number of reverse repetitions

    const handleAnimationComplete = () => {
        if (reverseCount < maxReverseCount) {
            prodRef.current?.setDirection(-1);
            prodRef.current?.play();
            setReverseCount(reverseCount + 1);
        } else {
            prodRef.current?.setDirection(1); // Set the direction to forward
            prodRef.current?.play();
            setReverseCount(0); // Reset the reverse count
        }
    };

    useEffect(() => {
        prodRef.current?.play();
    }, []);
    return (
        <main className='container mx-auto px-5'>
            {/* <!--   ✅ jumbotron - Starts Here 👇 --> */}
            <div class="sm:flex items-center max-w-screen-xl mt-10">
                <div class="sm:w-1/2">
                    <div class="text">
                        <h2 class="my-4 font-bold text-3xl  sm:text-4xl "><TextAnimation /> <span class="text-indigo-600">Our Company</span>
                        </h2>
                        <p class="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                            doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                            voluptatum.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <Link to="/" class="text-indigo-700 border-2 border-indigo-600 py-3 px-6 inline-flex items-center">
                            View More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                viewBox="0 0 24 24" class="w-6 h-6 ml-2">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div class="sm:w-1/2 p-10">
                    <Lottie
                        onComplete={handleAnimationComplete}
                        lottieRef={prodRef}
                        loop={false}
                        animationData={animationData}
                    />
                </div>
            </div>
            {/* <!--   🛑 jumbotron - Ends Here  --> */}
            <div class="text-center mt-20">
                <h1 class="font-bold text-xl text-blue-600 sm:text-2xl mb-4">BY POPULAR PRODUCTS</h1>
                {/*   <h1 class="text-xl">SHOP WOMEN'S BEST SELLERS</h1> */}
            </div>
            <section id="Projects"
                class="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 px-5">

                {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
                <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div class="flex items-center">
                                <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <del>
                                    <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                </del>
                                <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 1 - Ends Here  --> */}

                {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
                <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div class="flex items-center">
                                <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <del>
                                    <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                </del>
                                <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 2- Ends Here  --> */}

                {/* <!--   ✅ Product card 3 - Starts Here 👇 --> */}
                <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div class="flex items-center">
                                <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <del>
                                    <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                </del>
                                <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 3 - Ends Here  --> */}

                {/* <!--   ✅ Product card 4 - Starts Here 👇 --> */}
                <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div class="flex items-center">
                                <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <del>
                                    <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                </del>
                                <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 4 - Ends Here  --> */}

                {/* <!--   ✅ Product card 5 - Starts Here 👇 --> */}
                <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div class="flex items-center">
                                <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <del>
                                    <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                </del>
                                <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 5 - Ends Here  --> */}

                {/* <!--   ✅ Product card 6 - Starts Here 👇 --> */}
                <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div class="flex items-center">
                                <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <del>
                                    <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                </del>
                                <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 6 - Ends Here  --> */}
                {/* <!--   ✅ Product card 7 - Starts Here 👇 --> */}
                <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="https://cdn.pixabay.com/photo/2021/09/15/12/49/can-6626782_1280.jpg"
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div class="flex items-center">
                                <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <del>
                                    <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                </del>
                                <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 7 - Ends Here  --> */}
                {/* <!--   ✅ Product card 8 - Starts Here 👇 --> */}
                <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="https://cdn.pixabay.com/photo/2018/04/08/14/46/red-bull-3301415_1280.jpg"
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div class="flex items-center">
                                <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <del>
                                    <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                </del>
                                <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 8 - Ends Here  --> */}

            </section>
            {/* OUR LINES */}
            <div class="bg-white py-16">
                <h1 class="text-center font-bold text-md text-blue-600 sm:text-xl text-black">TRENDING</h1>
                <div class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mb-5">
                    {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
                    <div class="bg-neutral-50 rounded-lg shadow-lg p-8">
                        <div class="relative overflow-hidden">
                            <img class="object-cover w-full h-full" src="https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_640.jpg" alt="Product" />
                            <div class="absolute inset-0 bg-black opacity-40"></div>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <button class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
                        <p class="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                            ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                        <div class="flex items-center justify-between mt-4">
                            <span class="text-gray-900 font-bold text-lg">$29.99</span>
                            <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                        </div>
                    </div>
                    {/* <!--   🛑 Product card 1 - Ends Here  --> */}
                    {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
                    <div class="bg-neutral-50 rounded-lg shadow-lg p-8">
                        <div class="relative overflow-hidden">
                            <img class="object-cover w-full h-full" src="https://cdn.pixabay.com/photo/2016/10/31/18/25/yogurt-1786329_1280.jpg" alt="Product" />
                            <div class="absolute inset-0 bg-black opacity-40"></div>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <button class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
                        <p class="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                            ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                        <div class="flex items-center justify-between mt-4">
                            <span class="text-gray-900 font-bold text-lg">$29.99</span>
                            <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                        </div>
                    </div>
                    {/* <!--   🛑 Product card 2 - Ends Here  --> */}
                    {/* <!--   ✅ Product card 3 - Starts Here 👇 --> */}
                    <div class="bg-neutral-50 rounded-lg shadow-lg p-8">
                        <div class="relative overflow-hidden">
                            <img class="object-cover w-full h-full" src="https://cdn.pixabay.com/photo/2018/04/09/18/20/strawberry-3304967_1280.jpg" alt="Product" />
                            <div class="absolute inset-0 bg-black opacity-40"></div>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <button class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
                        <p class="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                            ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                        <div class="flex items-center justify-between mt-4">
                            <span class="text-gray-900 font-bold text-lg">$29.99</span>
                            <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                        </div>
                    </div>
                    {/* <!--   🛑 Product card 3 - Ends Here  --> */}
                </div>
            </div>
            {/* <div class="bg-white">
                <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
                        <p class="mt-4 text-gray-500">The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.</p>

                        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            <div class="border-t border-gray-200 pt-4">
                                <dt class="font-medium text-gray-900">Origin</dt>
                                <dd class="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
                            </div>
                            <div class="border-t border-gray-200 pt-4">
                                <dt class="font-medium text-gray-900">Material</dt>
                                <dd class="mt-2 text-sm text-gray-500">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
                            </div>
                            <div class="border-t border-gray-200 pt-4">
                                <dt class="font-medium text-gray-900">Dimensions</dt>
                                <dd class="mt-2 text-sm text-gray-500">6.25&quot; x 3.55&quot; x 1.15&quot;</dd>
                            </div>
                            <div class="border-t border-gray-200 pt-4">
                                <dt class="font-medium text-gray-900">Finish</dt>
                                <dd class="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
                            </div>
                            <div class="border-t border-gray-200 pt-4">
                                <dt class="font-medium text-gray-900">Includes</dt>
                                <dd class="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
                            </div>
                            <div class="border-t border-gray-200 pt-4">
                                <dt class="font-medium text-gray-900">Considerations</dt>
                                <dd class="mt-2 text-sm text-gray-500">Made from natural materials. Grain and color vary with each item.</dd>
                            </div>
                        </dl>
                    </div>
                    <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100" />
                        <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100" />
                        <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100" />
                        <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100" />
                    </div>
                </div>
            </div> */}
        </main >

    )
}
