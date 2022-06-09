import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navber from './components/Navber';

import Portfolio from './components/Portfolio';
import Service from './components/Service';

function App() {
  return (
    <div>
    <Navber></Navber>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/service' element={<Service></Service>}></Route>
       <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
     </Routes>
    </div>
  );
}

export default App;
