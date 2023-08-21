import React, { useEffect, useRef, useState } from 'react'
import Lottie from "lottie-react"
import animationData from "../../assets/animation_loading.json"
const PageLoading = () => {
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
        <div className='mx-auto container px-10'>
            < Lottie
                onComplete={handleAnimationComplete}
                lottieRef={prodRef}
                loop={false}
                animationData={animationData}
            />
        </div>
    );
}

export default PageLoading;
