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
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(products => {
        setProducts(products)
      }
      );
  }, [])


 useEffect(()=>{

 const filteredData = products.filter(pd => pd.price >= 0 && pd.price <= maxPrice)

        setFilteredProducts(filteredData)
        console.log('filterData', filteredData);

 },[maxPrice, products])

  useEffect(() => {
    fetch(`http://localhost:5000/products?category=${catagory}&&color=${color}&&pattern=${patttern}&&maxPrice=${maxPrice}`)
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
    console.log('log', maxPrice);

  }

  return (
    <div className='drawer drawer-mobile' >
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <SideBar handleFilter={handleFilter} />
      <ProductsContainer products={filteredProducts} />
    </div>
  )
}

export default Home