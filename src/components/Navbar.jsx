import React, { useState } from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

  return (
    <>
        <div className='w-full h-auto border-b-2 py-4 font-poppins'>
        <div className=' mx-auto'>
            <div className='flex justify-around items-center p-[16px]'>
                {/* Logo */}
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="" className='w-12 h-auto'/>
                    <p className='text-slate-800 font-semibold text-xl'>SHOPPER</p>
                </div>
                {/* Navbar */}
                <div className='hidden md:block'>
                    <ul className='flex space-x-4 text-gray-800 font-semibold text-md'>
                        <Link to={'/'} onClick={() => setMenu("shop")} className={`px-2 py-1 ${menu === 'shop' ? 'border-b-2 border-orange-600' : '' } cursor-pointer `}>Shop</Link>
                        <Link to={'/men'} onClick={() => setMenu("men")} className={`px-2 py-1 ${menu === 'men' ? 'border-b-2 border-orange-600' : '' } cursor-pointer `}>Men</Link>
                        <Link to={'/women'} onClick={() => setMenu("women")} className={`px-2 py-1 ${menu === 'women' ? 'border-b-2 border-orange-600' : '' } cursor-pointer `}>Women</Link>
                        <Link to={'/kid'}onClick={() => setMenu("kid")} className={`px-2 py-1 ${menu === 'kid' ? 'border-b-2 border-orange-600' : '' } cursor-pointer `}>Kids</Link>
                    </ul>
                </div>
                {/* Cart Button */}
                <div className='flex gap-2' >
                    <Link to={'/login'}><button to={'/login'} className='bg-orange-600 hover:bg-orange-400 w-[125px] h-[35px] text-white text-md rounded-lg cursor-pointer'>Login</button></Link>
                    <Link to={'/cart'}><img src={cart_icon} alt="" /></Link>
                    <p>0</p>
                </div>
            </div>
        </div>
        </div>
        
    </>
  )
}

export default Navbar