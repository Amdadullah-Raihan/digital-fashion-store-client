import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import AllUsers from './DashboardPages/AllUsers'
import AddProduct from './DashboardPages/AddProduct'

const Dashboard = () => {
  return (
    <div className=' flex '>
      {/* left side */}
      <div className='w-[25%] flex flex-col leading-8 m-8'>
        {/* <Link to='all-users'><i className="fa-solid fa-user"></i> All Users</Link> */}
        {/* <Link to='manage-products'><i className="fa-brands fa-product-hunt"></i> Manage Products</Link> */}
        <Link to='add-product'><i className="fa-solid fa-plus"></i> Add a Product</Link>

      </div>
      {/* right side  */}
      <div className="w-full bg-blue-50 p-8 h-[100vh]">
         <Routes>
            {/* <Route path='/all-users' element={<AllUsers/>}/> */}
            {/* <Route path='/manage-products' element={<AllUsers/>}/> */}
            <Route path='/add-product' element={<AddProduct/>}/>
            <Route path='/' element={<AddProduct/>}/>

         </Routes>
         <Outlet></Outlet>
      </div>

    </div>
  )
}

export default Dashboard