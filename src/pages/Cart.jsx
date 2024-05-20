import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import removeIcon from '../assets/cart_cross_icon.png'

const Cart = () => {

  const {allProduct, cartItem, addToCart, removeFromCart, getTotalCartItem} = useContext(ShopContext)

  return (
    <>
      <div className='w-[1270px] h-auto mx-auto font-poppins'>
        <div className='bg-gray-200 p-4'>
          <div className='grid grid-cols-6 gap-4 font-semibold mb-2'>
            {/* Item Header */}
            <p className='col-span-1'>Products</p>
            <p className='col-span-1'>Title</p>
            <p className='col-span-1'>Price</p>
            <p className='col-span-1'>Quantity</p>
            <p className='col-span-1'>Total</p>
            <p className='col-span-1'>Remove</p>
          </div>
        {/* Display Items */}
        {
          allProduct.map((item) => {
            if(cartItem[item.id] > 0)
            return (
              <div key={item.id} className='grid grid-cols-6 gap-4 items-center border-t py-2'>
                <img className='w-[50px] col-span-1' src={item.image} alt={item.name} />
                <p className='col-span-1'>{item.name}</p>
                <p className='col-span-1'>${item.new_price}</p>
                <button className='col-span-1 bg-blue-500 text-white px-2 py-1 rounded' onClick={() => addToCart(item.id)}>
                  {cartItem[item.id]}
                </button>
                <p className='col-span-1'>${item.new_price * cartItem[item.id]}</p>
                <button className='col-span-1 bg-red-500 text-white px-2 py-1 rounded' onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            );
          })
        }
        </div>
        {/* Cart Total */}
        <div className='w-full  my-8'>
          <div className='flex items-center justify-between'>
            <div className='w-2/3'>
              <h1 className='font-semibold text-3xl mb-8'>Cart Totals</h1>
              <div className='flex items-center justify-between my-3 border-b-2 pb-2'>
                <p>Subtotal</p>
                <p>${getTotalCartItem}</p>
              </div>
              <div className='flex items-center justify-between my-3 border-b-2 pb-2'>
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <div className='flex items-center justify-between my-3 font-bold'>
                <p>Total</p>
                <p>${getTotalCartItem}</p>
              </div>
              <button className='bg-orange-600 text-center p-3 px-6 rounded-sm text-white my-4 hover:bg-orange-400'>Process to Checkout</button>
            </div>
            <div className=''>
              <p className='my-2 font-bold'>If you have any promo code. Enter it here</p>
              <input className='p-2 border-2 border-orange-600 outline-none' type="text" placeholder='Promo Code' />
              <button className='p-2 border-2 border-orange-600 ml-2'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart