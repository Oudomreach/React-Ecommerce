import React from 'react'
import new_collections from '../data/new_collections'
import Items from './Items'

const NewCollection = () => {
  return (
    <>
        <div className='font-poppins'>
            <div className='flex flex-col items-center justify-center'>
            <h1 className='text-5xl uppercase p-2 font-semibold'>New Collections</h1>
            <div className='border-2 w-[190px] h-0 border-black fill-black mb-4 rounded-md'></div>
            
            </div>
            <div className='w-[1480px] h-auto mx-auto flex items-center justify-center text-wrap'>
                <div className='grid grid-cols-4 gap-4 m-8'>
                    {
                        new_collections.map((item) => (
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
        </div>
    </>
  )
}

export default NewCollection