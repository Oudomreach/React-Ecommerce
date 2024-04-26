import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdownIcon from '../assets/dropdown_icon.png'
import Items from '../components/Items'

const ShopCategory = (props) => {

  const {allProduct} = useContext(ShopContext)

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(allProduct)
  })

  const productPerPage = 12
  const totalProducts = products.length

  return (
    <>
      <div className='font-poppins'>
        <img src={props.banner} alt="" />
        <div className='w-[1480px] h-auto mx-auto flex items-center justify-between'>
          <div>
            <p>
              {/* <span className='font-semibold'>Showing 1-12</span> out of 36 products */}
              <span className='font-semibold'>Showing 1-{Math.min(productPerPage, totalProducts)}</span> out of {totalProducts} products
            </p>
          </div>
          <div className='flex items-center justify-center my-4 bg-white border-2 text-black rounded-full p-2'>
            <p className='px-2'>Sort By </p><img src={dropdownIcon} alt="" />
          </div>
        </div>
        <div className='w-[1480px] h-auto mx-auto flex items-center justify-center text-wrap'>
          <div className='grid grid-cols-4 gap-4 m-8'>
            {
              allProduct.map((item, i) => {
                if(props.category === item.category){
                  return (
                    <Items
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      newPrice={item.new_price}
                      oldPrice={item.old_price}
                    />
                  )
                }
              })
            }
          </div>
        </div>
        <div className='flex items-center justify-center my-8'>
          <button className='bg-orange-600 text-white p-4 w-[250px] h-auto rounded-full'>Explore More</button>
        </div>
      </div>
    </>
  )
}

export default ShopCategory