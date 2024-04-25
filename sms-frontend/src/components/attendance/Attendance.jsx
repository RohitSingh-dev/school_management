import React, { useContext } from 'react';
import './attendance.css';
import {WelcomeBar, DashboardFooter, TeacherAttendance, StudentAttendance} from '../../components';
import { UserContext } from '../../context/UserContext';

const Attendance = () => {
  const user = useContext(UserContext);
  return (
    <div className='attendance'>
      <div className='attendance-top'><WelcomeBar username={user.currentUser?.user_name}/></div>
      <div className='attendance-middle'>{user.currentUser?.user_role==="TEACHER"?<TeacherAttendance /> : user.currentUser?.user_role==="PARENT"? <StudentAttendance /> : <StudentAttendance />}</div>        
      <div className='attendance-bottom'><DashboardFooter /></div>
    </div>
  )
}

export default Attendance