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
            <h2>School Management<br></br>System</h2>
          </div>
        </div>
        <div className='navbar-top-middle'>
          <div>
            <a href="#Home">Home</a>
          </div>
          <div>
            <a href="#About Us">About Us</a>
          </div>
          <div>
            <a href="#Attendance">Attendance</a>
          </div>
          <div>
            <a href="#Result">Result</a>
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