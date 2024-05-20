import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Items = (props) => {

  const {addToCart} = useContext(ShopContext)

  return (
    <>
        <div className='mx-8 text-wrap transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
          <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} className='' /></Link>
          <p className='text-sm my-1'>{props.name}</p>
          <div className='flex items-center justify-evenly gap-4 my-2'>
            <div className='font-semibold'>
              ${props.newPrice}
            </div>
            <div className='text-gray-500 line-through'>
              ${props.oldPrice}
            </div>
            {/* <button onClick={()=>{addToCart(product.id)}} className='bg-orange-600 text-center p-3 px-6 rounded-sm text-white my-4 hover:bg-orange-400'>Add to Cart</button> */}
          </div>
        </div>
    </>
  )
}

export default Items