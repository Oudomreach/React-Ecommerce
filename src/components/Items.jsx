import React from 'react'

const Items = (props) => {
  return (
    <>
      <div className='w-[1280px]'>
        <div className='mx-8 text-wrap'>
          <img src={props.image} className=' w-[300px] h-auto text-wrap ' />
          <p className='text-sm my-1'>{props.name}</p>
          <div className='flex items-center justify-start gap-4 my-2'>
            <div className='font-semibold'>
              {props.newPrice}
            </div>
            <div className='text-gray-500 line-through'>
              {props.oldPrice}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Items