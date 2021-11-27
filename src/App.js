import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import { Cards } from './componets/Pages/Cards/Cards';
import Home from './componets/Pages/Home/Home';
//import Header from './componets/Header';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cards' element={<Cards/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
