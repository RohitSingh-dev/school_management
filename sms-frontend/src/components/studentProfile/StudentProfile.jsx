import React, { useEffect } from 'react';
import './studentProfile.css';
import {WelcomeBar, Footer, EditButton} from '../../components';

const StudentProfile = (image) => {
  let student;
  useEffect(() => {
      fetch("/student/11",{
        method: "GET",
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWh1bEBnbWFpbC5jb20iLCJleHAiOjE3MDgxMDA1NTMsImlhdCI6MTcwODAxNDE1M30.RyGFpyjjsa7ttXQuAO4a4jRHvdxDxtjAwncNiDx--_8'},
      }).then(res => res.json()).then(json => student=(JSON.parse(json))).catch(err => console.log(err));
  })
  return (
    <div className='studentProfile'>
      <div className='studentProfile-top'>
        <WelcomeBar />
      </div>
      <div className='studentProfile-middle'>
        <div className='studentProfile-middle-left'>
          <div className='studentProfile-middle-left-name'>{student?.name}</div>
          <div className='studentProfile-middle-left-address'>{student?.address}</div>
          <div className='studentProfile-middle-left-email'>{student?.emailId}</div>
          <div className='studentProfile-middle-left-phone'>{student?.contact_info}</div>
          <div className='studentProfile-middle-left-dob'>{student?.date_of_birth}</div>
          <div className='studentProfile-middle-left-dor'>{student?.date_of_birth}</div>
          <div className='studentProfile-middle-left-password'>{student?.date_of_birth}</div>
        </div>
        <div className='studentProfile-middle-right'>
          <div className='studentProfile-middle-right-top'>
            <img src={image} alt='Profile Pic' />
          </div>
          <div className='studentProfile-middle-right-bottom'>
            <EditButton />
          </div>
        </div>
      </div>
      <div className='studentProfile-bottom'>
        <Footer />
      </div>
    </div>
  )
}

export default StudentProfile