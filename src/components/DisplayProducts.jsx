import React, { useState } from 'react'

const DisplayProducts = (props) => {

    const {product} = props

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [totalStars, setTotalStars] = useState(5)

  return (
    <>
        <div className='w-[1080px] h-auto mx-auto font-poppins my-4'>
            <div className='flex items-center justify-between'>
                <div className='flex justify-between'>
                    <div>
                        <img className='w-20 h-auto mb-2' src={product.image} alt="" />
                        <img className='w-20 h-auto mb-2' src={product.image} alt="" />
                        <img className='w-20 h-auto mb-2' src={product.image} alt="" />
                        <img className='w-20 h-auto mb-2' src={product.image} alt="" />
                    </div>
                    <div>
                        <img className='ml-2 w-[340px] h-auto mb-2' src={product.image} alt="" />
                    </div>
                </div>
                <div className='w-1/2 text-wrap text-start'>
                    <h1 className='text-2xl font-semibold'>{product.name}</h1>
                    {/* <p>Star</p> */}
                    {[...Array(totalStars)].map((star, index) => {
                        const currentRating = index + 1;

                        return (
                            <label key={index}>
                            <input
                                type="radio"
                                name="rating"
                                value={currentRating}
                                onChange={() => setRating(currentRating)}
                                className='invisible'
                            />
                            <span
                                className="text-2xl"
                                style={{
                                color:
                                    currentRating <= (hover || rating) ? "#dd6b20" : "#a0aec0"
                                }}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(null)}
                            >
                                &#9733;
                            </span>
                            </label>
                        );
                    })}
                    <div className='flex items-center justify-start gap-4 my-2'>
                        <div className=' text-gray-500 line-through'>
                            {product.old_price}$
                        </div>
                        <div className='font-semibold text-red-600'>
                            {product.new_price} $
                        </div>
                    </div>
                    <p className='whitespace-normal my-4'>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment</p>
                    <p className='my-4'>Select Size</p>
                    <div className='flex items-center justify-between gap-4 my-4'>
                        <button className='p-2 px-4 w-full h-auto bg-gray-500 hover:bg-orange-600 text-white text-sm rounded-sm'>S</button>
                        <button className='p-2 px-4 w-full h-auto bg-gray-500 hover:bg-orange-600 text-white text-sm rounded-sm'>M</button>
                        <button className='p-2 px-4 w-full h-auto bg-gray-500 hover:bg-orange-600 text-white text-sm rounded-sm'>L</button>
                        <button className='p-2 px-4 w-full h-auto bg-gray-500 hover:bg-orange-600 text-white text-sm rounded-sm'>XL</button>
                        <button className='p-2 px-4 w-full h-auto bg-gray-500 hover:bg-orange-600 text-white text-sm rounded-sm'>XXL</button>
                    </div>
                    <button className='bg-orange-600 text-center p-3 px-6 rounded-sm text-white my-4'>Add to Cart</button>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default DisplayProducts