
import './App.css';
import About from './components/About';
import Acessories from './components/Acessories';
import Beauty from './components/Beauty';
import Clothing from './components/Clothing';
import Contact from './components/Contact';
import Febric from './components/Febric';
import Grooming from './components/Grooming';


import Home from './components/Home';
import Jewelry from './components/Jewelry';
import Login from './components/Login';
import OutWear from './components/OutWear';
import Products from './components/Products';
import Shirts from './components/Shirts';
import Shoes from './components/Shoes';
import SignUp from './components/SignUp';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewMore from './components/ViewMore';




function App() {
  return (
    <div className="container">
      

<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />


  <Route path='/about' element={<About/>} />


  <Route path='/contact' element={<Contact/>} />


  <Route path='/signUp' element={<SignUp/>} />

<Route path='/login' element={<Login/>}  />
 
<Route path='/clothing' element={<Clothing/>}  />

<Route path='/acessories' element={<Acessories/>}  />

<Route path='/beauty' element={<Beauty/>}  />


<Route path='/grooming' element={<Grooming/>} />

<Route path='/shirts'  element={<Shirts/>} />

<Route path='/outwear' element ={<OutWear/>} />

<Route path='/shoes' element={<Shoes/>}   />

<Route path='/jewelry' element={<Jewelry/>}  />

<Route path='/febric' element={<Febric/>} />

<Route path='/products' element = {<Products/>} />

<Route path='/viewMore' element ={<ViewMore/>} />


</Routes>


</BrowserRouter>

    



    </div>
  );
}

export default App;
