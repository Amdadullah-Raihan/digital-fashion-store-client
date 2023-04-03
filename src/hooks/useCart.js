import React, { useEffect, useState } from 'react'
import { getStoredCart } from '../utilities/addToDB'

const useCart = (products) => {

  const [cart, setCart] = useState([])
  useEffect(() => {

    if (products?.length) {
      const savedCart = getStoredCart();
      console.log(savedCart);

      const storedCart = []
      for (const id in savedCart) {
        console.log('id', id);
        const addedProduct = products.find(product => product.id == id);
        console.log(addedProduct);
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
    cart, setCart
  }
}

export default useCart