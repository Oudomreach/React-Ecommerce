import React from 'react'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <>
        <div className='mx-8 text-wrap transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
          <Link to={`/product/${props.id}`}><img src={props.image} className='' /></Link>
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
    </>
  )
}

export default Items