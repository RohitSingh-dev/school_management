import React, { useContext } from 'react';
import './welcomeBar.css';
import logo from '../../assets/bcet_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const WelcomeBar = ({username}) => {
  const navigate= useNavigate();
  const user = useContext(UserContext);
  let handleClick = ()=>{
    user.setCurrentUser(null);
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
          <div><Link to={'/dashboard'}><button className='welcome-dashboard-button'>Dashboard</button></Link></div>
          <div><button className='welcome-logout-button' onClick={handleClick}>Logout</button></div>
        </div>
    </div>
  )
}

export default WelcomeBar