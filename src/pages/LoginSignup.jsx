import React from 'react'
import { Link } from 'react-router-dom'

const LoginSignup = () => {
  return (
    <>
      <div className='flex items-center justify-center font-poppins bg-orange-600 p-8'>
        <div className='w-auto h-auto p-8 bg-white rounded-md my-8'>
          <h1 className='text-center uppercase font-semibold text-3xl'>Sign Up</h1>
          <div className='flex flex-col items-center justify-center my-4'>
            <input className='p-4 my-2 w-[350px] outline-none rounded-xl border-2 border-orange-600' type="text" placeholder='Your Name' />
            <input className='p-4 my-2 w-[350px] outline-none rounded-xl border-2 border-orange-600' type="email" placeholder='Email' />
            <input className='p-4 my-2 w-[350px] outline-none rounded-xl border-2 border-orange-600' type="password" placeholder='Password' />
            <button className='bg-orange-600 text-white p-4 w-[350px]  rounded-md hover:bg-orange-400 hover:text-black'>Submit</button>
          </div>
          <div className='text-center my-2'>
            <div className='my-2'>
              <p className='text-sm text-gray-500'>Already have account? <span className='underline text-orange-600'><Link>Login Here!</Link></span></p>
            </div>
            <div className='flex items-center justify-center my-2'>
              <input type="checkbox" />
              <p className='mx-2 text-sm text-gray-500'>By clicking, you have agree to our terms of use & privacy policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginSignup