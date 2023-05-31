import React, { useEffect, useState } from 'react'
import { addToDB, getStoredCart } from '../utilities/addToDB'
import useProducts from './useProducts'
import { useProductsContext } from '../contexts/ProductsProvider'

const useCart = () => {
  const [products] = useProductsContext()
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    let newCart = [];
    const isExist = cart.find(pd => pd.id === product._id);
    if (isExist) {
      isExist.quantity = isExist.quantity + 1;
      const restItems = cart.filter(pd => pd.id !== product._id);
      newCart = [...restItems, product]
    }
    else {
      product.quantity = 1;
      newCart = [...cart, product]
    }
    setCart(newCart)
    addToDB(product._id)
    // alert('Product added to cart')


  }

  useEffect(() => {

    if (products?.length) {
      const savedCart = getStoredCart();


      const storedCart = []
      for (const id in savedCart) {

        const addedProduct = products.find(product => product._id === id);

        if (addedProduct) {
          const quantity = savedCart[id];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct)
        }
      }
      setCart(storedCart)
    }
  }, [products])


  return {
    cart, setCart, handleAddToCart
  }
}

export default useCart