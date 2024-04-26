import React from 'react'

const NewsLetter = () => {
  return (
    <>
        <div className=' w-full h-auto bg-gradient-to-b from-pink-200 to-gray-200 bg-pink-500 mx-auto font-poppins py-8'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-5xl text-slate-900 my-4'>Get Exclusive Offers on your emails</h1>
                <p className='my-4 text-xl text-gray-700'>Subscribe to our newletter and stay updated!</p>
                <div className='w-[700px] relative p-8'>
                    <input className='relative p-4 w-full outline-none rounded-l-full bg-white' type="email" placeholder='Your email...' />
                    <button className='absolute w-[200px] top-8 right-4 bg-black rounded-full text-white p-4'>Subscribe</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewsLetter