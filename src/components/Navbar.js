import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import './css/navbar.css';
import { useStateValue } from '../StateProvider';
import { Avatar } from '@material-ui/core';
function Navbar() {
  const [{ user }, dispatch] = useStateValue();
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
          {!user ? (
            <Link to='/signin'>
              <h2 className='nav-option'>SignUp</h2>
            </Link>
          ) : (
            <div className='nav-option'>
              <Avatar className='avatar' src={user.photoURL} />
              <h2>{user.displayName}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
