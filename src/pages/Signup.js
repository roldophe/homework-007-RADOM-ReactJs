import React, { useEffect, useRef, useState } from 'react'

import Lottie from "lottie-react"
import animationData from "../assets/loginAnimation.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuperpowers } from '@fortawesome/free-brands-svg-icons';

export default function Signup() {
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
    <div class="container mx-auto px-5 sm:flex items-center max-w-screen-xl mt-5">
      <div class="sm:w-1/2 p-5">
        <Lottie
          onComplete={handleAnimationComplete}
          lottieRef={prodRef}
          loop={false}
          animationData={animationData}
        />
      </div>
      <div class="sm:w-1/2">
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <FontAwesomeIcon icon={faSuperpowers} className='text-blue-500 flex items-center mx-auto h-10 w-auto' />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your Free Account</h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>

                </div>
                <div class="mt-2">
                  <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between">
                  <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>

                </div>
                <div class="mt-2">
                  <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                </div>
                <div class="ml-3 text-sm">
                  <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-blue-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div>
              <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create an account</button>
              </div>
            </form>
            <p class="mt-10 text-center text-sm text-gray-500">
                      Already have an account? <a href="/login" class="font-medium text-blue-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
          </div>
        </div>
      </div>
    </div>

  )
}
