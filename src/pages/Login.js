import React, { useEffect, useRef, useState } from 'react'

import Lottie from "lottie-react"
import animationData from "../assets/loginAnimation.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuperpowers } from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

export default function Login() {
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
  const [user, setUser] = useState({
    email: "john@mail.com",
    password: "changeme"
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLogin } = useSelector(state => state.authReducer)
  const { auth } = useSelector(state => state.authReducer) // authR: we defined in rootReducer

  const onInputChangeHanler = (e) => {
    const { name, value } = e.target
    console.log(user)
    setUser(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    }
    )
  }
  /* useEffect(() => {
    console.log("is Login: ", isLogin)
    console.log("auth in login", auth.data.access_token) 
    console.log('in storage', secureLocalStorage.getItem('auth'))
  }, []) */

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("on submit :", user)
    dispatch(loginUser(user))
      .then((res) => {
        console.log('eis', res)
        navigate("/")
      })
  }
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
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST" onSubmit={handleSubmit} className="w-25">
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={onInputChangeHanler}
                    className="form-control"
                    placeholder="name@example.com"
                    class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                </div>
              </div>
              <div class="mt-2">
                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="text-sm">
                      <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  value={user.password}
                  onChange={onInputChangeHanler}
                  className="form-control"
                  placeholder="Password"
                  required class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
              <div class="mt-2">
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 mb-5 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
              </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}
