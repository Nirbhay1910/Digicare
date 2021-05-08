import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import './css/navbar.css';
import { useStateValue } from '../StateProvider';
import { Avatar } from '@material-ui/core';
function Navbar() {
  const [{ user }, dispatch] = useStateValue();
  const [homeState, setHomeState] = useState('active');
  const [doctorConsultation, setDoctorConsultation] = useState('');
  const [chatLinkState, setChatLinkState] = useState('');
  const [signInState, setSignInState] = useState('');
  const [accountState, setAccountState] = useState('');
  const setHomeActive = () => {
    setHomeState('active');
    setDoctorConsultation('');
    setChatLinkState('');
    setSignInState('');
    setAccountState('');
  };
  const setDoctorActive = () => {
    setHomeState('');
    setDoctorConsultation('active');
    setChatLinkState('');
    setSignInState('');
    setAccountState('');
  };
  const setChatActive = () => {
    setHomeState('');
    setDoctorConsultation('');
    setChatLinkState('active');
    setSignInState('');
    setAccountState('');
  };
  const setSignInActive = () => {
    setHomeState('');
    setDoctorConsultation('');
    setChatLinkState('');
    setSignInState('active');
    setAccountState('');
  };
  const setAccountActive = () => {
    setHomeState('');
    setDoctorConsultation('');
    setChatLinkState('');
    setSignInState('');
    setAccountState('active');
  };
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
            <h2 className={`nav-option ${homeState}`} onClick={setHomeActive}>
              Home
            </h2>
          </Link>
          <Link to='/consultDoctors'>
            <h2
              className={`nav-option ${doctorConsultation}`}
              onClick={setDoctorActive}
            >
              Doctor Consultation
            </h2>
          </Link>
          <Link to='/talkWithStrangers'>
            <h2
              className={`nav-option ${chatLinkState}`}
              onClick={setChatActive}
            >
              Chat with Others
            </h2>
          </Link>
          <a target='__blank' href='/videoCall'>
            <h2 className='nav-option'>Video Call</h2>
          </a>
          {!user ? (
            <Link to='/signin'>
              <h2
                className={`nav-option ${signInState}`}
                onClick={setSignInActive}
              >
                SignUp
              </h2>
            </Link>
          ) : (
            <Link to='/myAccount'>
              <div
                className={`nav-option ${accountState}`}
                onClick={setAccountActive}
              >
                <Avatar className='avatar' src={user.photoURL} />
                <h2>{user.displayName}</h2>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
