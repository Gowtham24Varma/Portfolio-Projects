import React from 'react';
import {Link} from 'react-router-dom'
import './App.css'


const Navbar = () => {
  return (
    <div  className='navbar'>
      <a href='/' className='logo'>Ekrishta matrimony</a>
      <Link to='/Login' className='navbar-in'>Login</Link>
      <a href='/about' className='navbar-about'>About</a>

      
    </div>
  );
}

export default Navbar;
