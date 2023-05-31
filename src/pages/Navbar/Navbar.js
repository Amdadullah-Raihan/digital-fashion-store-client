import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../contexts/CartProvider'

const Navbar = () => {
    const { cart } = useCartContext()
    // console.log(cart);

    const countQuantity = () => {

        let quantity = 0;
        cart.map(item => quantity = quantity + item.quantity)
        return quantity
    }
    // console.log(countQuantity());


    return (

        <div className='w-full px-8 py-4 flex items-center justify-between shadow'>
            {/* left side */}
            <div className=''>
                <Link to='/' className='text-2xl font-bold'>Fashion Store </Link>
            </div>
            {/* right side */}
            <div className=' relative'>
                <Link to='/cart'>Cart <i className="fa-solid fa-cart-shopping text-xl"></i> <span className='text-red-500 font-bold absolute -right-2 -top-2'>{countQuantity()}</span> </Link>
            </div>
        </div>


    )
}

export default Navbar