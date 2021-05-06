import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import './css/navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='logo' />

        <div className='logo-title'>
          <h1>DIGICARE</h1>
        </div>
      </div>
      <div className='navs'>
        <div className='nav'>
          <Link to='/'>
            <h2 className='nav-option'>Home</h2>
          </Link>
          <h2 className='nav-option'>Doctor Consultation</h2>
          <Link to='/talkWithStrangers'>
            <h2 className='nav-option'>Talk with Others</h2>
          </Link>
          <h2 className='nav-option'>SignUp</h2>
          <h2 className='nav-option'>Login</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
