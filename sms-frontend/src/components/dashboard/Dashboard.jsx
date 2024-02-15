import React from 'react';
import './dashboard.css';
import { Footer, WelcomeBar } from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard-navbar'><WelcomeBar username='Rohit'></WelcomeBar></div>
      <div className='dashboard-middle'>
        <div className='dashboard-middle-icon-wrapper'>
          <a href='#Home'>
            <div><FontAwesomeIcon className='dashboard-middle-icons' icon={faFile}></FontAwesomeIcon></div>
            <div className='dashboard-middle-text'><h3>Home</h3></div>
          </a>
        </div>
        <div className='dashboard-middle-icon-wrapper'>
          <a href='/Profile'>
            <div><FontAwesomeIcon className='dashboard-middle-icons' icon={faFile}></FontAwesomeIcon></div>
            <div className='dashboard-middle-text'><h3>Profile</h3></div>
          </a>
        </div>
        <div className='dashboard-middle-icon-wrapper'>
          <a href='#Attendance'>
            <div><FontAwesomeIcon className='dashboard-middle-icons' icon={faFile}></FontAwesomeIcon></div>
            <div className='dashboard-middle-text'><h3>Attendance</h3></div>
          </a>
        </div>
        <div className='dashboard-middle-icon-wrapper'>
          <a href='#Result'>
            <div><FontAwesomeIcon className='dashboard-middle-icons' icon={faFile}></FontAwesomeIcon></div>
            <div className='dashboard-middle-text'><h3>Result</h3></div>
          </a>
        </div>
      </div>
      <div className='dashboard-footer'><Footer/></div>
      <div className='dashboard-property'>{document.body.style.overflow= 'unset'}</div>
    </div>
  )
}

export default Dashboard