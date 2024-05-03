import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/Breadcrums'
import DisplayProducts from '../components/DisplayProducts'

const Product = () => {

  const {allProduct} = useContext(ShopContext)
  const {productID} = useParams()
  const product = allProduct.find((e) => e.id === Number(productID))

  return (
    <>
    <div>
      <Breadcrums product={product} />
      <DisplayProducts product={product} />
    </div>
      
  </>
  )
}

export default Product