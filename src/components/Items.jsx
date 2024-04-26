import React from 'react'

const Items = (props) => {
  return (
    <>
      <div>
        <div className='mx-8 text-wrap transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
          <img src={props.image} className='' />
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