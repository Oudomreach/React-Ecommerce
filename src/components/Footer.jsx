import React from 'react'
import footerLogo from '../assets/logo_big.png'
import instagramIcon from '../assets/instagram_icon.png'
import pinterestIcon from '../assets/pintester_icon.png'
import whatsappIcon from '../assets/whatsapp_icon.png'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className='my-8 flex flex-col items-center justify-center'>
            <div className='py-4 flex items-center font-bold text-3xl'>
                <img src={footerLogo} alt="" />
                <p>SHOPPER</p>
            </div>
            <div className='py-4'>
                <ul className='flex space-x-4 text-gray-800 font-semibold text-md'>
                    <Link>Company</Link>
                    <Link>Products</Link>
                    <Link>Offices</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                </ul>
            </div>
            <div className='py-4'>
                <div className='flex items-center justify-center'>
                    <div className='p-4'>
                        <Link><img src={instagramIcon} alt="" /></Link>
                    </div>
                    <div className='p-4'>
                        <Link><img src={pinterestIcon} alt="" /></Link>
                    </div>
                    <div className='p-4'>
                        <Link><img src={whatsappIcon} alt="" /></Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className='py-4'>
                <p>Copyrigth @ 2024 - All Rigth Reservers</p>
            </div>
        </div>
    </>
  )
}

export default Footer