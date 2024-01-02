import React from 'react';
import './navbar.css';
import logo from '../../assets/bcet_logo.png';

const Navbar = () => {
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
            <a className='navbar-top-middle-home' href="#Home">Home</a>
          </div>
          <div>
            <a href="#About Us">About us</a>
          </div>
          <div>
            <a href="#Classes">Classes</a>
          </div>
          <div>
            <a href="#Teachers">Teachers</a>
          </div>
          <div>
            <a href="#ContactUs">Contact us</a>
          </div>
        </div>
        <div className='navbar-top-right'>
          <div>
            <button className='login-button' onClick=''><a href='#login'>Login</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar