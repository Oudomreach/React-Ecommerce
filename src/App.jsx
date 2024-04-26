import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer'

import menBanner from './assets/banner_mens.png'
import womenBanner from './assets/banner_women.png'
import kidBanner from './assets/banner_kids.png'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={menBanner} category="men" />} />
        <Route path='/women' element={<ShopCategory banner={womenBanner} category="women" />} />
        <Route path='/kid' element={<ShopCategory banner={kidBanner} category="kid" />} />

        <Route path='/product' element={<Product />} >
          <Route path=':productID' element={<Product />} />
        </Route>

        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
