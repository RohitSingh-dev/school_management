import React from 'react';
import './classesInfo.css';

const ClassesInfo = ({image, className, classData}) => {
  return (
    <div className='classesInfo'>
        <div className='classesInfo-pic'>
            <img src={image}></img>
        </div>
        <div className='classesInfo-heading'>
            <h3>{className}</h3>
        </div>
        <div className='classesInfo-data'>
          <p>{classData}</p>
        </div>
    </div>
  )
}

export default ClassesInfo