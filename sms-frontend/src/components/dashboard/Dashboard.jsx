import React, { useContext } from 'react';
import './dashboard.css';
import { DashboardFooter, WelcomeBar } from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faTablet, faPencil} from '@fortawesome/free-solid-svg-icons';
import {UserContext} from '../../context/UserContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const user= useContext(UserContext);
  console.log(user);
  return (
    <div className='dashboard'>
      <div className='dashboard-navbar'><WelcomeBar username={user.currentUser?.user_name}></WelcomeBar></div>
      <div className='dashboard-middle'>
        <div className='dashboard-middle-icon-wrapper'>
          <Link to={'/Profile'}>
            <div><FontAwesomeIcon className='dashboard-middle-icons' icon={faAddressBook}></FontAwesomeIcon></div>
            <div className='dashboard-middle-text'><h3>Profile</h3></div>
          </Link>
        </div>
        <div className='dashboard-middle-icon-wrapper'>
          <Link to={user.currentUser?.user_role==="TEACHER"? '/TeacherAttendance' : '/Attendance/'.concat(user.currentUser?.user_id)}>
            <div><FontAwesomeIcon className='dashboard-middle-icons' icon={faTablet}></FontAwesomeIcon></div>
            <div className='dashboard-middle-text'><h3>Attendance</h3></div>
          </Link>
        </div>
        <div className='dashboard-middle-icon-wrapper'>
          <Link to={user.currentUser?.user_role==="TEACHER"? '/TeacherResult' : '/Result/'.concat(user.currentUser?.user_id)}>
            <div><FontAwesomeIcon className='dashboard-middle-icons' icon={faPencil}></FontAwesomeIcon></div>
            <div className='dashboard-middle-text'><h3>Result</h3></div>
          </Link>
        </div>
      </div>
      <div className='dashboard-footer'><DashboardFooter /></div>
      <div className='dashboard-property'>{document.body.style.overflow= 'unset'}</div>
    </div>
  )
}

export default Dashboard