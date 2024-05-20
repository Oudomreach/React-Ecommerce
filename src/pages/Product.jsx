import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/Breadcrums'
import DisplayProducts from '../components/DisplayProducts'
import DiscriptionBox from '../components/DiscriptionBox'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {

  const {allProduct} = useContext(ShopContext)
  const {productID} = useParams()
  const product = allProduct.find((e) => e.id === Number(productID))

  return (
    <>
    <div>
      <Breadcrums product={product} />
      <DisplayProducts product={product} />
      <DiscriptionBox />
      <RelatedProducts />
    </div>
      
  </>
  )
}

export default Product