import React from 'react';
import './profilePageEdit.css';
import { DashboardFooter, ParentProfileEdit, StudentProfileEdit, TeacherProfileEdit, WelcomeBar } from '..';

const ProfilePageEdit = () => {
  return (
    <div className='profilePageEdit'>
      <div className='profilePageEdit-top'><WelcomeBar /></div>
      <div className='profilePageEdit-middle'><TeacherProfileEdit /></div>
      <div className='profilePageEdit-bottom'><DashboardFooter /></div>
    </div>
  )
}

export default ProfilePageEdit