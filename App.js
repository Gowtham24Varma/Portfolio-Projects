import React from 'react';
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';
import Card3 from './Cards/Card3';
import Card4 from './Cards/Card4';
import Card5 from './Cards/Card5';
import Card6 from './Cards/Card6';
import Card7 from './Cards/Card7';
import Card8 from './Cards/Card8';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';
import Firsthome from './Firsthome';
import Footer from './Footer';
import About from './About';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/about' element={<About/>}/>        
        <Route path='/' element={<Firsthome/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/card1' element={<Card1/>}/>
        <Route path='/card2' element={<Card2/>}/>
        <Route path='/card3' element={<Card3/>}/>
        <Route path='/card4' element={<Card4/>}/>
        <Route path='/card5' element={<Card5/>}/>
        <Route path='/card6' element={<Card6/>}/>
        <Route path='/card7' element={<Card7/>}/>
        <Route path='/card8' element={<Card8/>}/>
       
      </Routes>
      <Footer/>
      </BrowserRouter>
    
      {/* Footer goes here */}

 

    </div>
    
  );
}

export default App;

