import React, { useContext } from 'react';
import './result.css';
import {WelcomeBar, DashboardFooter, TeacherResult, StudentResult} from '../../components';
import { UserContext } from '../../context/UserContext';

const Result = () => {
  const user = useContext(UserContext);
  return (
    <div className='result'>
      <div className='result-top'><WelcomeBar username={user.currentUser?.user_name}/></div>
      <div className='result-middle'>{user.currentUser?.user_role==="TEACHER"?<TeacherResult /> : user.currentUser?.user_role==="PARENT"? <StudentResult /> : <StudentResult />}</div>
      <div className='result-bottom'><DashboardFooter /></div>
    </div>
  )
}

export default Result