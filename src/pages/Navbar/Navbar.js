import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        
        <div className='w-full px-8 py-4 flex items-center justify-between shadow'>
            {/* left side */}
            <div className=''>
                <Link to='/' className='text-2xl font-bold'>Fashion Store </Link>
            </div>
            {/* right side */}
            <div className=''>
                <Link to='/cart'>Cart <i className="fa-solid fa-cart-shopping text-xl"></i></Link>
            </div>
        </div>
      
       
    )
}

export default Navbar