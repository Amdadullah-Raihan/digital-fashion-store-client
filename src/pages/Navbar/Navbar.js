import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        
        <div className='w-full px-8 py-4 flex items-center justify-between shadow'>
            {/* left side */}
            <div className=''>
                <h3 className='text-2xl font-bold'>Fashion Store </h3>
            </div>
            {/* right side */}
            <div className=''>
                <Link to='/cart'>Cart <i class="fa-solid fa-cart-shopping text-xl"></i></Link>
            </div>
        </div>
      
       
    )
}

export default Navbar