import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import { Cards } from './componets/Pages/Cards/Cards';
import Home from './componets/Pages/Home/Home';
//import Header from './componets/Header';



function App() {

	fetch('http://wfhapi.somee.com/api/location')
		.then(response => response.json())
		.then(response => console.log(response))
	
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
