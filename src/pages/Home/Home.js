import React, { useEffect, useState } from 'react'
import ProductsContainer from './Sections/ProductsContainer'
import SideBar from './Sections/SideBar'
import useProducts from '../../hooks/useProducts'

const Home = () => {
  const [catagory, setCatagory] = useState(null)
  const [color, setColor] = useState(null)
  const [patttern, setPattern] = useState(null)
  const [products, setProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000)
  const [filteredProducts, setFilteredProducts] = useState(products);

  console.log(catagory, color, patttern, maxPrice);

  useEffect(() => {
    fetch("https://digital-fashion-store-server.vercel.app/products")
      .then(res => res.json())
      .then(products => {
        setProducts(products)
      }
      );
  }, [])


  //filter products by price 

  useEffect(() => {

    const filteredData = products.filter(pd => pd.price >= 0 && pd.price <= maxPrice)

    setFilteredProducts(filteredData)
    console.log('filterData', filteredData);

  }, [maxPrice, products])


  // getting products from backend by filtering 
  useEffect(() => {
    fetch(`https://digital-fashion-store-server.vercel.app/products?category=${catagory}&&color=${color}&&pattern=${patttern}&&maxPrice=${maxPrice}`)
      .then(res => res.json())
      .then(products => {
        // console.log('by catagory', products);
        setProducts(products)

      })

  }, [catagory, color, patttern])



  //  setting up filtering value
  const handleFilter = (catagory, color, pattern, maxPrice) => {
    setCatagory(catagory)
    setColor(color)
    setPattern(pattern)
    setMaxPrice(maxPrice)
    console.log('log', maxPrice);

  }

  //home page
  return (
    <div className=''>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          
          <label htmlFor="my-drawer-2" className=" text-right w-full drawer-button lg:hidden">
            <p className='mb-1 text-black mr-4'><i class="fa-solid fa-sliders text-sm mr-1"></i>Filter</p>
          </label>
          <ProductsContainer products={filteredProducts} />

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          
           <SideBar handleFilter={handleFilter}></SideBar>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Home