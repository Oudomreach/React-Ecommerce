import React from 'react'
import exclusiveImg from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <>
        <div className='my-4 w-full h-auto bg-gradient-to-b from-pink-200 to-gray-200 bg-pink-500 mx-auto font-poppins'>
            <div className='w-[1480px] h-auto mx-auto'>
                <div className='flex items-center justify-between p-2'>
                    <div>
                        <h1 className='font-semibold text-7xl font mb-2'>Exclusive</h1>
                        <h1 className='font-semibold text-7xl font mb-2'>Offers For You</h1>
                        <p className='uppercase font-semibold'>Only on best sellers products</p>
                        <button className='w-1/3 p-4 rounded-full my-5 text-white font-semibold bg-orange-600 hover:bg-orange-400'>Check Now</button>
                    </div>
                    <div>
                        <img className='w-[350px] h-auto items-center' src={exclusiveImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Offers