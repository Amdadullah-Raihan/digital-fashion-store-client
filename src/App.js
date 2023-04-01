
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SingleProduct from './pages/SingleProduct/SingleProduct';

function App() {
  return (
    <div className="App w-full">
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products/:id' element={<SingleProduct/>}/>
       </Routes>
    </div>
  );
}

export default App;
