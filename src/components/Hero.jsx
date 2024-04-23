import React from 'react'

import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero from '../assets/hero_image.png'

const Hero = () => {
  return (
    <>
        <div className=' w-full h-auto bg-gradient-to-b from-pink-200 to-gray-200 bg-pink-500 mx-auto font-poppins'>
            <div className='w-[1480px] h-auto mx-auto'>
                <div className='flex items-center justify-between p-2'>
                    <div>
                        <h1 className='font-bold text-xl font'>NEW ARRIVALS ONLY</h1>
                        <div className='lowercase text-7xl font-bold'>
                            <div className='flex flex-row items-center justify-start'>
                                <p>New</p>
                                <img className="w-[80px] h-auto mr-2" src={hand_icon} alt="" />
                            </div>
                            <p>Collections</p>
                            <p>For Everyone</p>
                        </div>
                        <div className='flex items-center justify-center w-full p-4 rounded-full my-5 text-white bg-orange-600 hover:bg-orange-400'>
                            <button className='mx-2 text-xl'>Latest Collection</button>
                            <img className='w-6 h-6 ml-2' src={arrow_icon} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <img className='w-[550px] h-auto' src={hero} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero