import React, { createContext, useContext } from 'react'
import useProducts from '../hooks/useProducts'


export const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {
    return (
        <ProductsContext.Provider value={useProducts()}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}
export default ProductsProvider