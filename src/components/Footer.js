import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer.css';
import logo from '../images/logo.png';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    <footer class='footer-distri'>
      <div class='footer-left'>
        <div className='logo1'>
          <img src={logo} alt='logo' />
          <h3>DIGICARE</h3>
        </div>

        <p class='footer-links'>
          <Link to='/' class='link-1'>
            Home
          </Link>

          <Link to='/consultDoctors'> Doctor Consultation</Link>

          <Link to='/talkWithStrangers'> Talk with others</Link>
        </p>

        <p class='footer-company-name'>© All rights Reserved. DIGICARE 2021</p>
      </div>

      <div class='footer-center'>
        <div>
          <p>
            <span>Contact Us</span>
          </p>
        </div>

        <div>
          <i class='icons fa fa-phone'></i>
          <p>+12356789</p>
        </div>

        <div>
          <i class='icons fa fa-envelope'></i>
          <p>
            <a href='mailto:digicare@gmail.com'>digicare@gmail.com</a>
          </p>
        </div>
      </div>

      <div class='footer-right'>
        <div>
          <p>
            <span>Follow Us On</span>
          </p>
        </div>
        <p class='footer-company-about'>
          <div class='footer-icons'>
            <a href='/'>
              <i class='fa fa-facebook'></i>
            </a>
            <a href='/'>
              <i class='fa fa-twitter'></i>
            </a>
            <a href='/'>
              <i class='fa fa-linkedin'></i>
            </a>
            <a href='/'>
              <i class='fa fa-github'></i>
            </a>
          </div>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
