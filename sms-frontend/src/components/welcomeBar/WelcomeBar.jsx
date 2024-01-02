import React from 'react';
import './welcomeBar.css';
import logo from '../../assets/bcet_logo.png';

const welcomeBar = ({username}) => {
  return (
    <div className='welcome'>
        <div className='welcome-left'>
          <div className='welcome-logo'>
            <div>
              <img src={logo} alt="bcet_logo"></img>
            </div>
          </div>
          <div className='welcome-name'>
            <h3>School Management<br></br>System</h3>
          </div>
        </div>
        <div className='welcome-middle'>Welcome, {username}!!</div>
        <div className='welcome-right'>
          <div>
          <button className='welcome-logout-button' onClick=''><a href='#logout'>Logout</a></button>
          </div>
        </div>
    </div>
  )
}

export default welcomeBar