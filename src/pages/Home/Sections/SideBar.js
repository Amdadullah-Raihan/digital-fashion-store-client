import React, { useEffect, useState } from 'react'
import solidColor from '../../../assests/icons/clothes.png'
import PrintedColor from '../../../assests/icons/tie-dye.png'
import StrippedColor from '../../../assests/icons/shirt.png'
import useProducts from '../../../hooks/useProducts'

const SideBar = ({ handleFilter }) => {

 
    const [isOpen, setIsOpen] = useState(false)
    const [catagory, setCatagory] = useState(null )
    const [color, setColor] = useState(null)
    const [patttern, setPattern] = useState(null)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [filteredProducts, setFilteredProducts] = useState([])
   const [products ] = useProducts('');

    console.log(maxPrice);
    const handleClearCartBtn = () =>{
        setCatagory('')
        setColor('')
        setPattern('')
    }
  

    useEffect(()=>{
        handleFilter(catagory, color, patttern, maxPrice)

    },[catagory, color, patttern, maxPrice])
    

    return (
        <div className='lg:pl-8 lg:py-8 p-2 bg-white'>
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <div className=' mx-auto text-start leading-8  md:relative lg:block '>
                {/* search */}
                <section className='mb-4'>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" className='border border-[#1a2d40] w-[150px]' />
                            <button className="btn bg-[#1a2d40]">Search</button>
                        </div>
                    </div>

                </section>
                {/* clear filter */}
                <section>
                    {
                        (catagory || color || patttern) && <button onClick={handleClearCartBtn} className='border px-4 text-red-500 font-bold mb-4'>Clear Filter</button>
                    }
                </section>
                {/* Price Range starts */}
                <section className='mb-4'>
                    <div>
                        <h2 className="text-2xl">Price Range</h2>
                        <input type="range" min="0" max="1000" value={maxPrice} className="range range-sm pr-4" onChange={e=>setMaxPrice(e.target.value)}/>
                    </div>
                    <div>
                        <p>Max Price - {maxPrice}</p>
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
                            <ul id='shirts' className={isOpen ? `block` : `hidden`}>
                                <input name='catagory' type='button' value='shirts' className='ml-4' onClick={(e)=>setCatagory(e.target.value)}/>  <br />
                                <input name='catagory' type='button' value='formal' className='ml-4' onClick={(e)=>setCatagory(e.target.value)}/>   <br />
                                <input name='catagory' type='button' value='casual' className='ml-4' onClick={(e)=>setCatagory(e.target.value)}/>  <br />
                                <input name='catagory' type='button' value='plain' className='ml-4' onChange={(e)=>setCatagory(e.target.value)}/>   <br />
                                <input name='catagory' type='button' value='check' className='ml-4' onChange={(e)=>setCatagory(e.target.value)}/>   <br />
                            </ul>
                        </div>
                        <div className=''>
                            <button onClick={() => setCatagory('buttons')}>  Buttons</button> <br />
                            <button onClick={() => setCatagory('tie')}>  Tie</button> <br />
                            <button onClick={() => setCatagory('belts')}>  Belts</button> <br />
                            <button onClick={() => setCatagory('cuffinks and studds')}>  Cufflinks and studds</button> <br />
                            <button onClick={() => setCatagory('vest')}>  Vests</button>
                        </div>

                    </div>
                </section>
              

                {/* colors starts */}
                <section className='mb-4'>
                    <div>
                        <h1 className="text-2xl">Colors</h1>
                        <ul className=''>
                            <button onClick={() => setColor('white')} className='flex items-center gap-2'> <div className="w-6 h-6 rounded-full bg-white border"></div> White</button>
                            <button onClick={() => setColor('blue')} className='flex items-center gap-2'> <div className="w-6 h-6 rounded-full bg-blue-700"></div> Blue</button>
                            <button onClick={() => setColor('black')} className='flex items-center gap-2'> <div className="w-6 h-6 rounded-full bg-black"></div> Black</button>
                            <button onClick={() => setColor('red')} className='flex items-center gap-2'> <div className="w-6 h-6 rounded-full bg-red-700"></div> Red</button>
                            <button onClick={() => setColor('orange')} className='flex items-center gap-2'> <div className="w-6 h-6 rounded-full bg-orange-700"></div> Orange</button>
                            <button onClick={() => setColor('purple')} className='flex items-center gap-2'> <div className="w-6 h-6 rounded-full bg-purple-700"></div> Purple</button>
                            <button onClick={() => setColor('brown')} className='flex items-center gap-2'> <div className="w-6 h-6 rounded-full bg-[#534033]"></div> Brown</button>
                            <button onClick={() => setColor('beige')} className='flex items-center gap-2'> <div className="w-6 h-6 rounded-full bg-[#BFAC8D]"></div> Beige</button>
                        </ul>
                    </div>

                </section>
                {/* colors ends */}

                {/* Patterns starts */}
                <section className='mb-4'>
                    <div>
                        <h1 className='text-2xl'>Patterns</h1>
                        <ul className=''>
                            <button onClick={() => setPattern('solid')} className='flex items-center gap-2'>
                                <div className="w-6 h-6 rounded-full bg-no-repeat" style={{ backgroundImage: `url(${solidColor})` }}></div>
                                Solid Color

                            </button>
                            <button onClick={() => setPattern('printed')} className='flex items-center gap-2'>
                                <div className="w-6 h-6 rounded-full bg-no-repeat" style={{ backgroundImage: `url(${PrintedColor})` }}></div>
                                Printed

                            </button>
                            <button onClick={() => setPattern('striped')} className='flex items-center gap-2'>
                                <div className="w-6 h-6 rounded-full bg-no-repeat" style={{ backgroundImage: `url(${StrippedColor})` }}></div>
                                Striped
                            </button>

                        </ul>
                    </div>
                </section>
                {/* patterns ends */}
            </div>
      </div>
    )
}

export default SideBar