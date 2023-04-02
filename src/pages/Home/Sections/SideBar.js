import React, { useState } from 'react'
import solidColor from '../../../assests/icons/clothes.png'
import PrintedColor from '../../../assests/icons/tie-dye.png'
import StrippedColor from '../../../assests/icons/shirt.png'

const SideBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className=' lg:w-[25%] mx-auto text-start leading-8'>
            {/* search */}
            <section className='mb-4'>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" className='border border-[#1a2d40] w-[150px]' />
                        <button className="btn bg-[#1a2d40]">Search</button>
                    </div>
                </div>

            </section>
            {/* Price Range starts */}
            <section className='mb-4'>
                <div>
                    <h2 className="text-2xl">Price Range</h2>
                    <p>Premium - Form 24.95 <span className='text-sm font-bold'>PKR</span> (16)</p>
                    <p>Luxury - Form 45.95 <span className='text-sm font-bold'>PKR</span> (15) </p>
                </div>
            </section>
            {/* Price Range ends */}

            {/* catagory starts */}
            <section className='mb-4'>
                <div className=''>
                    <h2 className="text-2xl">Catagories</h2>
                    <h4 className="text-md font-medium">All</h4>

                    <div className=''>
                        <button className="" onClick={() => setIsOpen(!isOpen)}>Shirts {!isOpen ? <i className="fa-solid fa-angle-down"></i> : <i className="fa-solid fa-angle-up"></i>}</button>
                        <ul className={isOpen ? `block` : `hidden`}>
                            <li className='ml-4'>  All shirts</li>
                            <li className='ml-4'>  Formal</li>
                            <li className='ml-4'>  casual</li>
                            <li className='ml-4'>  Plain</li>
                            <li className='ml-4'>  Check</li>
                        </ul>
                    </div>
                    <p>  Buttons</p>
                    <p>  Tie</p>
                    <p>  Belts</p>
                    <p>  Cufflinks and studds</p>
                    <p>  Vests</p>

                </div>
            </section>
            {/* catagories ends */}

            {/* colors starts */}
            <section className='mb-4'>
                <div>
                    <h1 className="text-2xl">Colors</h1>
                    <ul className=''>
                        <li className='flex items-center gap-2'> <div className="w-6 h-6 rounded-full bg-white border"></div> White</li>
                        <li className='flex items-center gap-2'> <div className="w-6 h-6 rounded-full bg-red-700"></div> Blue</li>
                        <li className='flex items-center gap-2'> <div className="w-6 h-6 rounded-full bg-blue-700"></div> Black</li>
                        <li className='flex items-center gap-2'> <div className="w-6 h-6 rounded-full bg-black"></div> Red</li>
                        <li className='flex items-center gap-2'> <div className="w-6 h-6 rounded-full bg-orange-700"></div> Orange</li>
                        <li className='flex items-center gap-2'> <div className="w-6 h-6 rounded-full bg-purple-700"></div> Puple</li>
                        <li className='flex items-center gap-2'> <div className="w-6 h-6 rounded-full bg-[#534033]"></div> Brown</li>
                        <li className='flex items-center gap-2'> <div className="w-6 h-6 rounded-full bg-[#BFAC8D]"></div> Beige</li>
                    </ul>
                </div>

            </section>
            {/* colors ends */}

            {/* Patterns starts */}
            <section className='mb-4'>
                <div>
                    <h1 className='text-2xl'>Patterns</h1>
                    <ul className=''>
                        <li className='flex items-center gap-2'>
                            <div className="w-6 h-6 rounded-full bg-no-repeat" style={{ backgroundImage: `url(${solidColor})` }}></div>
                            Solid Color

                        </li>
                        <li className='flex items-center gap-2'>
                            <div className="w-6 h-6 rounded-full bg-no-repeat" style={{ backgroundImage: `url(${PrintedColor})` }}></div>
                            Printed
                            
                        </li>
                        <li className='flex items-center gap-2'>
                            <div className="w-6 h-6 rounded-full bg-no-repeat" style={{ backgroundImage: `url(${StrippedColor})` }}></div>
                            Striped
                        </li>

                    </ul>
                </div>
            </section>
            {/* patterns ends */}
        </div>
    )
}

export default SideBar