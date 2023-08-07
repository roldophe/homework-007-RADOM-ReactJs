import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie from "lottie-react"
import animationData from "../assets/animation_404.json"
export default function NotFound() {
    const navigate = useNavigate()
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
        <div class="container mx-auto w-full justify-center">
            < Lottie
                onComplete={handleAnimationComplete}
                lottieRef={prodRef}
                loop={false}
                animationData={animationData}
                className='duration:500 hover:scale-105'
            />
            <div className='flex justify-center mb-20'>
                <button
                    class="inline-flex items-center justify-center font-medium tracking-tight rounded-lg border transition hover:scale-105 hover:-rotate-1 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset h-11 px-4 text-lg text-white shadow focus:ring-white border-transparent bg-blue-500 hover:bg-blue-900 focus:bg-blue-600 focus:ring-offset-blue-600"
                    onClick={() => navigate("/")}
                >
                    <span>Back to Home</span>
                </button>
            </div>
        </div>

    )
}
{/* <div class="w-full flex justify-center mt-16 mb-16">
            <div class="bg-gray-600 relative rounded-2xl -mx-4 p-8 space-y-8 max-w-4xl text-center">
                <div class="space-y-4">
                    <h2 class="text-white font-heading font-bold text-2xl">
                        Page Not Found!
                    </h2>

                    <p class="text-xl text-white">
                        Oops! It appears that the page you are trying to access cannot be found. We apologize for any inconvenience this may have caused. Please double-check the URL or try using our search function to find the information you're looking for. If you believe this is an error on our part, please contact our support team who will be happy to assist you. Thank you for your understanding and patience.
                    </p>
                </div>

                <button
                    class="inline-flex items-center justify-center font-medium tracking-tight rounded-lg border transition hover:scale-105 hover:-rotate-1 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset h-11 px-4 text-lg text-white shadow focus:ring-white border-transparent bg-blue-500 hover:bg-blue-900 focus:bg-blue-600 focus:ring-offset-blue-600"
                    onClick={() => navigate("/")}
                >
                    <span>Back to Home →</span>
                </button>
            </div>
        </div> */}