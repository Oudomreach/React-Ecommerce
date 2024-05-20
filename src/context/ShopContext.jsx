import React, { createContext, useState } from 'react'
import allProduct from '../data/all_product.js'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < allProduct.length; index++) {
        cart[index] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {

    const [cartItem, setCartItem] = useState(getDefaultCart())

    const addToCart = (itemID) => {
        setCartItem((prev) => ({...prev, [itemID]:prev[itemID]+1}))
        console.log(cartItem)
    }
    const removeFromCart = (itemID) => {
        setCartItem((prev) => ({...prev, [itemID]:prev[itemID]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItem){
            if(cartItem[item] > 0){
                let itemInfo = allProduct.find((product)=>product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItem[item]
            }
            return totalAmount
        }
    }

    const contextValue = {allProduct, cartItem, addToCart, removeFromCart, getTotalCartAmount}

    // console.log(cartItem)
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider