
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Navbar from './pages/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute'
import CheckoutSuccess from './pages/Checkout/CheckoutSuccess';
import ProductsProvider from './contexts/ProductsProvider';
import CartProvider from './contexts/CartProvider';




function App() {
  return (
    <ProductsProvider className="App w-full">
      <CartProvider>

        {/* <Navbar /> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/dashboard/*' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout-success' element={<CheckoutSuccess />}></Route>
        </Routes>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
