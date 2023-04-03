import React from 'react'
import { Link } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import useProducts from '../../hooks/useProducts'

const Navbar = () => {
    const [products] = useProducts()
    const {cart} = useCart(products)
    return (
        
        <div className='w-full px-8 py-4 flex items-center justify-between shadow'>
            {/* left side */}
            <div className=''>
                <Link to='/' className='text-2xl font-bold'>Fashion Store </Link>
            </div>
            {/* right side */}
            <div className=' relative'>
                <Link to='/cart'>Cart <i className="fa-solid fa-cart-shopping text-xl"></i> <span className='text-red-500 font-bold absolute -right-2 -top-2'>{cart.length}</span> </Link>
            </div>
        </div>
      
       
    )
}

export default Navbar