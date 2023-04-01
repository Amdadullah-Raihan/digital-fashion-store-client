
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App w-full">
       <Routes>
          <Route path='/' element={<Home/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
