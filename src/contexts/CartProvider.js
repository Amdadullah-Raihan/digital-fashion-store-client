import React, { createContext, useContext } from 'react'
import useCart from '../hooks/useCart';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    return <CartContext.Provider value={useCart()}>
        {children}
    </CartContext.Provider>
}

export default CartProvider

export const useCartContext = () => {
    return useContext(CartContext)
}

