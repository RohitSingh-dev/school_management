import React from 'react';
import './teacherInfo.css';

const TeacherInfo = ({teacherName, teacherDesignation, teacherPhone, teacherEmail}) => {
  return (
    <div className='teacherInfo'>
        <div className='teacherInfo-heading'>
            <div className='teacherInfo-heading-name'>
              <h3>{teacherName}</h3>
            </div>
            <div className='teacherInfo-heading-decoration1'></div>
            <div className='teacherInfo-heading-decoration2'></div>
            <div className='teacherInfo-heading-designation'>
              <p>{teacherDesignation}</p>
            </div>
        </div>
        <div className='teacherInfo-data'>
          <p>Phone: {teacherPhone}</p>
          <p>Email: {teacherEmail}</p>
        </div>
    </div>
  )
}

export default TeacherInfo