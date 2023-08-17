import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/actions/productActions'
import developer from '../assets/animation_lleki1x9.json'
import { useLottie } from 'lottie-react'
import { Link, useNavigate } from 'react-router-dom'
import TextAnimation from '../components/Animation/TextAnimation'
import { Button } from '@material-tailwind/react'

export default function About() {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.prodReducer)
    const navigate = useNavigate()
    const options = {
        animationData: developer,
        loop: true
    };
    const { View } = useLottie(options);

    useEffect(() => {
        // subscribe to store
        dispatch(fetchAllProducts())
    }, [])
    return (
        <main className='container mx-auto'>
            <section class="px-5">
                <div class="sm:flex items-center max-w-screen-xl mt-10">
                    <div class="sm:w-1/2">
                        <div class="text">
                            <h2 class="my-4 font-bold text-3xl  sm:text-4xl">{/* <TextAnimation /> */} <span>Brand your pictures with the free watermark and generate your documents with the better solution</span>
                            </h2>
                            <p class="text-gray-700">
                                Level up your content with customizable watermarks and create stunning
                                certificates effortlessly on our website.
                            </p>
                        </div>
                        <div className='mt-10 gap-2 flex'>
                            <Button
                                size='md'
                                color='blue'
                                className=""
                                onClick={() => navigate("/")}
                            >
                                Getting Started
                            </Button>
                            <Button
                                size='md'
                                color='white'
                                onClick={() => navigate("/")}
                                className=""
                            >
                                Go Back
                            </Button>
                        </div>
                    </div>
                    <div class="sm:w-1/2 p-10">
                        <img src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </section>
            <section className='px-5'>
                <p className='text-center text-xl'>Trusted by designers & developers from over companies worldwide</p>
                <div className='mx-auto flex grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center justify-center gap-5'>
                    <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Google_13d1bebc3a.svg?updated_at=2023-02-01T09:30:58.652Z" alt="google" />
                    <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Disney_9326063989.svg?updated_at=2023-02-01T09:35:39.701Z" alt="disney" />
                    <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Duolingo_f8ada51f7b.svg?updated_at=2023-02-01T09:36:51.939Z" alt="" />
                    <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Uber_d1b19ee87f.svg?updated_at=2023-02-01T09:35:39.735Z" alt="" />
                    <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/instacard_new_b1fa17db81.svg" alt="" />
                    <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Grab_2339109ee6.svg?updated_at=2023-02-01T09:35:39.529Z" alt="" />
                    <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Netflix_9c7d33db41.svg?updated_at=2023-02-01T09:35:39.412Z" alt="" />
                    <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Microsoft_78d3346119.svg?updated_at=2023-02-01T09:35:39.737Z" alt="" />
                    <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Airbnb_4c9a6209d1.svg?updated_at=2023-02-01T09:35:39.532Z" alt="" />
                </div>
            </section>

            <section class="col-xxl-8 px-4 py-5">
                <div class="sm:flex items-center max-w-screen-xl mt-10">
                    <div class="sm:w-1/2">
                        {
                            View
                        }
                    </div>
                    <div class="sm:w-1/2 p-10">
                        <h2 class="my-4 font-bold text-3xl  sm:text-4xl">Lightweight, scalable animations for your ads and social media</h2>
                        <p class="text-gray-700">LottieFiles takes away the complexity from motion design. It lets you create, edit, test, collaborate and ship a Lottie in the easiest way possible.</p>

                    </div>
                </div>
            </section>

            <section className=' px-5 py-5'>
                <h2 className='my-4 font-bold text-2xl text-center sm:text-3xl'><span>Motion design made easy</span></h2>
                <div className='w-75 mx-auto m-5'>
                    <img src="https://framerusercontent.com/images/CdX873RJfHUZ4CiIH3kyRyHPDc.png" alt="" />
                </div>
            </section>

        </main>
    )
}