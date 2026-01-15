import React from 'react'
import AuthLayout from '../components/AuthLayout'
import { useState } from 'react'
import {FaEye, FaEyeSlash} from "react-icons/fa"
import LoginIllustration from '../components/LoginIllustration'

function Login() {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <div>
        <AuthLayout illustartion={<LoginIllustration/>} >
        <div className='w-full max-w-md bg-white rounded-xl shadow p-6'>
            <p className='text-sm text-green-700 mb-4 cursor-pointer'>
                ← Back to Home
            </p>
            <h2 className='text-2xl font-bold mb-1'>Welcome Back!</h2>
            <p className='text-gray-600 mb-6'>
                Sign in to your WasteZero account
            </p>
            <form action="" className='space-y-4'>
                <input type="email" placeholder='Enter your email' className='w-full border rounded-lg p-3' />
                <div className='relative'>
                    <input type={showPassword ? "text" : "password"}  placeholder='Enter your password' className='w-full border rounded-lg p-3 pr-10'/>
                    <span className='absolute right-3 top-3 cursor-pointer text-gray-500' onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash/> : <FaEye/>}</span>

                </div>

                <div className='flex justify-between text-sm'>
                    <label htmlFor="" className='flex items-center gap-2'>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <span className='text-green-700 curspr-pointer'>
                        Forgot Password
                    </span>
                </div>

                <button className='w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800'>
                     Sign In
                </button>
                
            </form>

           <div className='my-4 text-center text-gray-500'>or</div>
           <button className='w-full border py-2 rounded-lg mb-2  bg-blue-600'>
            Continue with Google
           </button>
           <button className='w-full border py-2 rounded-lg bg-red-600'>
            Continue with Github
           </button>
           <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span className="text-green-700 cursor-pointer">Sign Up</span>
        </p>
        </div>
        </AuthLayout>
    </div>
  )
}

export default Login