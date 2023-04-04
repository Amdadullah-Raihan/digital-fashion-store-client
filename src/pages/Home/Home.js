import React, { useEffect, useState } from 'react'
import ProductsContainer from './Sections/ProductsContainer'
import SideBar from './Sections/SideBar'
import useProducts from '../../hooks/useProducts'

const Home = () => {
  const [catagory, setCatagory] = useState(null)
  const [color, setColor] = useState(null)
  const [patttern, setPattern] = useState(null)
  const [products, setProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(null)

  console.log(catagory, color, patttern);

  useEffect(() => {
    fetch("https://digital-fashion-store-server.vercel.app/products")
      .then(res => res.json())
      .then(products => {
        setProducts(products)
      }
      );
  }, [])


  useEffect(() => {
    fetch(`https://digital-fashion-store-server.vercel.app/products?catergory=${catagory}&&color=${color}&&pattern=${patttern}&&maxPrice=${maxPrice}`)
      .then(res => res.json())
      .then(products => {
        // console.log('by catagory', products);
        setProducts(products)

      })

  }, [catagory, color, patttern])

  const handleFilter = (catagory, color, pattern, maxPrice) => {
    setCatagory(catagory)
    setColor(color)
    setPattern(pattern)
    setMaxPrice(maxPrice)

  }

  return (
    <div className='drawer drawer-mobile' >
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <SideBar handleFilter={handleFilter} />
      <ProductsContainer products={products} />
    </div>
  )
}

export default Home