import React from 'react';
import './result.css';
import {WelcomeBar, DashboardFooter, TeacherResult, StudentResult} from '../../components';

const Result = () => {
  return (
    <div className='result'>
      <div className='result-top'><WelcomeBar /></div>
      <div className='result-middle'><TeacherResult /></div>
      <div className='result-bottom'><DashboardFooter /></div>
    </div>
  )
}

export default Result