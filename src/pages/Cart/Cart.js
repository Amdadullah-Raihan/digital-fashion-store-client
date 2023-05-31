import React, { useCallback, useEffect, useState } from 'react'
import useCart from '../../hooks/useCart'
import useProducts from '../../hooks/useProducts';
import axios from 'axios';
import { useCartContext } from '../../contexts/CartProvider';

const Cart = () => {

  const { cart } = useCartContext();


  // console.log('cart', cart);
  //calculate price and other data
  let total = 0;
  let shipingCost = 0;
  let tax = 0;
  let grandTotal = 0;
  let totalQuantity = 0;

  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    totalQuantity = totalQuantity + product.quantity;
    total = total + product.price * product.quantity;
    shipingCost = shipingCost + product.shipping;
    tax = parseFloat((total * 0.1).toFixed(2));
    grandTotal = total + tax;
  }

  //handle checkout
  const handleCheckout = () => {

    axios.post('https://digital-fashion-store-server.vercel.app/create-checkout-session', {
      cart

    })
      .then(res => {
        console.log(res);
        if (res.data.url) {
          window.location.href = res.data.url
        }
      }).catch(err => {
        console.log(err.message);
      })

  }

  return (
    <div className='w-full h-full flex items-center justify-center flex-col lg:py-16 p-4 text-center'>
      <h1 className='mb-4 text-lg lg:text-3xl'>You ordered total {cart.length} individual items</h1>
      <div className='leading-8 px-10 shadow py-4'>
        <h1 className='text-2xl mb-4'>Order Summary </h1>
        <p>Selected Items: {totalQuantity}</p>
        <p>Total Price: ${total}</p>
        {/* <p>Total Shipping Cost: ${shipingCost}</p> */}
        <p>Tax: ${tax}</p>
        <p><big>Grand Total: ${grandTotal}</big></p>
        <button onClick={handleCheckout} className="btn mt-6  bg-[#1a2d40] text-white ">Procced to Checkout</button>
      </div>
    </div>
  )
}

export default Cart