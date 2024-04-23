import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory category="men" />} />
        <Route path='/women' element={<ShopCategory category="women" />} />
        <Route path='/kid' element={<ShopCategory category="kid" />} />

        <Route path='/product' element={<Product />} >
          <Route path=':productID' element={<Product />} />
        </Route>

        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
    </>
  )
}

export default App
