import React, { useEffect } from 'react'
import arrowIcon from '../assets/breadcrum_arrow.png'
import { useNavigate } from 'react-router-dom'

const Breadcrums = (props) => {

  const navigate = useNavigate()

  const {product} = props

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
      const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
              goBack(); // Trigger goBack function when ESC key is pressed
          }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
          document.removeEventListener('keydown', handleKeyDown);
      };
  }, []);

  return (
    <>
      <div className='w-[1080px] h-auto mx-auto font-poppins my-4'>
        <button onClick={goBack} className='bg-orange-600 text-white p-2 px-6 my-4' >Back</button>
        <div className='flex p-2'>
          HOME <img className='mx-2' src={arrowIcon} alt="" /> Shop <img className='mx-2' src={arrowIcon} alt="" /> {product.category} <img className='mx-2' src={arrowIcon} alt="" /> {product.name}
        </div>
      </div>
    </>
  )
}

export default Breadcrums