import React from 'react';
import './dashboard.css';
import { DashboardFooter, WelcomeBar } from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faTablet, faPencil} from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard-navbar'><WelcomeBar username='Rohit'></WelcomeBar></div>
      <div className='dashboard-middle'>
        <div className='dashboard-middle-icon-wrapper'>
          <a href='/Profile'>
            <div><FontAwesomeIcon className='dashboard-middle-icons' icon={faAddressBook}></FontAwesomeIcon></div>
            <div className='dashboard-middle-text'><h3>Profile</h3></div>
          </a>
        </div>
        <div className='dashboard-middle-icon-wrapper'>
          <a href='/TeacherAttendance'>
            <div><FontAwesomeIcon className='dashboard-middle-icons' icon={faTablet}></FontAwesomeIcon></div>
            <div className='dashboard-middle-text'><h3>Attendance</h3></div>
          </a>
        </div>
        <div className='dashboard-middle-icon-wrapper'>
          <a href='/TeacherResult'>
            <div><FontAwesomeIcon className='dashboard-middle-icons' icon={faPencil}></FontAwesomeIcon></div>
            <div className='dashboard-middle-text'><h3>Result</h3></div>
          </a>
        </div>
      </div>
      <div className='dashboard-footer'><DashboardFooter /></div>
      <div className='dashboard-property'>{document.body.style.overflow= 'unset'}</div>
    </div>
  )
}

export default Dashboard