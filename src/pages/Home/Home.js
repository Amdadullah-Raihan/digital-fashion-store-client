import React from 'react'
import ProductsContainer from './Sections/ProductsContainer'
import SideBar from './Sections/SideBar'

const Home = () => {
  return (
    <div className='w-full flex p-8' >
        <SideBar/>
        <ProductsContainer/>
    </div>
  )
}

export default Home