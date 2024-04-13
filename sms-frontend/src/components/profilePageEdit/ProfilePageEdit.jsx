import React, { useContext } from 'react';
import './profilePageEdit.css';
import { DashboardFooter, ParentProfileEdit, StudentProfileEdit, TeacherProfileEdit, WelcomeBar } from '..';
import { UserContext } from '../../context/UserContext';

const ProfilePageEdit = () => {
  const user= useContext(UserContext);
  return (
    <div className='profilePageEdit'>
      <div className='profilePageEdit-top'><WelcomeBar username={user.user_name}/></div>
      <div className='profilePageEdit-middle'><TeacherProfileEdit /></div>
      <div className='profilePageEdit-bottom'><DashboardFooter /></div>
    </div>
  )
}

export default ProfilePageEdit