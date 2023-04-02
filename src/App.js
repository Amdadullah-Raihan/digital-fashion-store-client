
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Navbar from './pages/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App w-full">
      <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products/:id' element={<SingleProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/dashboard/*' element={<Dashboard/>}/>
       </Routes>
    </div>
  );
}

export default App;
