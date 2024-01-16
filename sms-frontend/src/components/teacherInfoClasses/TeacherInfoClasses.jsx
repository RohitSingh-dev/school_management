import React from 'react';
import './teacherInfoClasses.css';

const TeacherInfoClasses = ({image, teacherName, teacherDesignation, areaOfInterest, workExperience, qualification}) => {
  return (
    <div className='teacherInfoClasses'>
        <div className='teacherInfoClasses-pic'>
            <img src={image} alt='teacher'></img>
        </div>
        <div className='teacherInfoClasses-heading'>
            <div className='teacherInfoClasses-heading-name'>
              <h3>{teacherName}</h3>
            </div>
            <div className='teacherInfoClasses-heading-decoration1'></div>
            <div className='teacherInfoClasses-heading-decoration2'></div>
            <div className='teacherInfoClasses-heading-designation'>
              <p>{teacherDesignation}</p>
            </div>
            <div className='teacherInfoClasses-heading-qualification'>
              <p>{qualification}</p>
            </div>
        </div>
        <div className='teacherInfoClasses-data'>
          <p><b>Area of Interest: </b>{areaOfInterest}</p>
          <p><b>Work Experience: </b>{workExperience}</p>
        </div>
    </div>
  )
}

export default TeacherInfoClasses