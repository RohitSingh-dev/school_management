import React from 'react';
import './teacherInfo.css';

const TeacherInfo = () => {
  return (
    <div className='teacherInfo'>
        <div className='teacherInfo-heading'>
            <div className='teacherInfo-heading-name'>
                <div className='teacherInfo-heading-decoration'></div>
            </div>
            <div className='teacherInfo-heading-designation'></div>
        </div>
        <div className='teacherInfo-data'></div>
    </div>
  )
}

export default TeacherInfo