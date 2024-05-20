import React from 'react'
import dataProduct from '../data/data.js'
import Items from './Items.jsx'

const RelatedProducts = () => {
    return (
        <>
            <div className='font-poppins'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl p-2 font-semibold'>Related Products</h1>
                    <div className='border-2 w-[190px] h-0 border-black fill-black mb-4 rounded-md'></div>
                    
                </div>
                <div className='w-[1480px] h-auto mx-auto flex items-center justify-center my-8'>
                    {
                    dataProduct.map((item) => (
                        <Items
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        newPrice={item.new_price}
                        oldPrice={item.old_price}
                        />
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default RelatedProducts