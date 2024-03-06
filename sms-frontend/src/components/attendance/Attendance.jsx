import React from 'react';
import './attendance.css';
import {WelcomeBar, DashboardFooter, TeacherAttendance, StudentAttendance} from '../../components';

const Attendance = () => {
  return (
    <div className='attendance'>
      <div className='attendance-top'><WelcomeBar /></div>
      <div className='attendance-middle'><TeacherAttendance /></div>        
      <div className='attendance-bottom'><DashboardFooter /></div>
    </div>
  )
}

export default Attendance