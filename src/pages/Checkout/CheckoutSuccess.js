import React from 'react'
import { Link } from 'react-router-dom'
import { clearCart } from '../../utilities/addToDB'

const CheckoutSuccess = () => {
    clearCart()
  return (
    <div className='w-full text-center'>
        <div className="mt-16">
              <h1 className='text-4xl '>Payment Succesfull <i className="fa-solid fa-circle-check text-green-700"></i></h1>
              <Link to='/' className='mt-8 btn'>Go back to home </Link>
        </div>
    </div>
  )
}

export default CheckoutSuccess