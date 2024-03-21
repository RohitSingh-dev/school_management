import React from 'react';
import './profilePage.css';
import { DashboardFooter, ParentProfile, StudentProfile, TeacherProfile, TeacherProfileEdit, WelcomeBar } from '..';

const ProfilePage = () => {
  
  return (
    <div className='profilePage'>
      <div className='profilePage-top'><WelcomeBar /></div>
      <div className='profilePage-middle'><TeacherProfile /></div>
      <div className='profilePage-bottom'><DashboardFooter /></div>
        
    </div>
  )
}

export default ProfilePage