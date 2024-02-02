import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/bcet_logo.png';
import {LoginForm} from '../../components';

const Navbar = () => {
  const [isOpen, setIsOpen]= useState(false);
  function togglePopUp(){
    setIsOpen(!isOpen);
  }
  return (
    <div className='navbar'>
      <div className='navbar-top'>
        <div className='navbar-top-left'>
          <div className='navbar-logo'>
            <div>
              <img src={logo} alt="bcet_logo"></img>
            </div>
          </div>
          <div className='navbar-name'>
            <h3>School Management<br></br>System</h3>
          </div>
        </div>
        <div className='navbar-top-middle'>
          <div>
            <a className='navbar-top-middle-home' href="/">Home</a>
          </div>
          <div>
            <a href="/AboutUs">About us</a>
          </div>
          <div>
            <a href="/Classes">Classes</a>
          </div>
          <div>
            <a href="/Teachers">Teachers</a>
          </div>
          <div>
            <a href="/ContactUs">Contact us</a>
          </div>
        </div>
        <div className='navbar-top-right'>
          <div>
            <button className='login-button' onClick={togglePopUp}>Login</button>
            <div className='login-button-property'>{isOpen? document.body.style.overflow= 'hidden': document.body.style.overflow= 'unset'}</div>
            {isOpen? <LoginForm toggle={togglePopUp} />  : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar