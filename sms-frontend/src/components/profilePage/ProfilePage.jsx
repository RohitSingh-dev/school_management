import React, { useContext } from 'react';
import './profilePage.css';
import { DashboardFooter, ParentProfile, StudentProfile, TeacherProfile, WelcomeBar } from '..';
import { UserContext } from '../../context/UserContext';

const ProfilePage = () => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div className='profilePage'>
      <div className='profilePage-top'><WelcomeBar username={user.currentUser?.user_name}/></div>
      <div className='profilePage-middle'>{user.currentUser?.user_role==="TEACHER"?<TeacherProfile /> : user.currentUser?.user_role==="PARENT"? <ParentProfile /> : <StudentProfile />}</div>
      <div className='profilePage-bottom'><DashboardFooter /></div>
    </div>
  )
}

export default ProfilePage