import React from 'react';
import './welcomeBar.css';
import logo from '../../assets/bcet_logo.png';
import { useNavigate } from 'react-router-dom';

const WelcomeBar = ({username}) => {
  const navigate= useNavigate();
  let handleClick = ()=>{
    navigate("/");
  };
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
          <div><a href='/dashboard'><button className='welcome-dashboard-button'>Dashboard</button></a></div>
          <div><button className='welcome-logout-button' onClick={handleClick}>Logout</button></div>
        </div>
    </div>
  )
}

export default WelcomeBar