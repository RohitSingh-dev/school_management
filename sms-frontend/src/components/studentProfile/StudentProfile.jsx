//import React, { useEffect } from 'react';
import './studentProfile.css';
import {WelcomeBar, Footer, EditButton} from '../../components';

const StudentProfile = () => {
  // let student;
  // useEffect(() => {
  //     fetch("/student/11",{
  //       method: "GET",
  //       headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWh1bEBnbWFpbC5jb20iLCJleHAiOjE3MDgxMDA1NTMsImlhdCI6MTcwODAxNDE1M30.RyGFpyjjsa7ttXQuAO4a4jRHvdxDxtjAwncNiDx--_8'},
  //     }).then(res => res.json()).then(json => student=(JSON.parse(json))).catch(err => console.log(err));
  // })
  return (
    <div className='studentProfile'>
      <div className='studentProfile-top'>
        <WelcomeBar />
      </div>
      <div className='studentProfile-middle'>
        <div className='studentProfile-middle-left'>
          <form>
            <div className='studentProfile-middle-left-label'>
              <label>Name</label>
              <input type='text' placeholder='Name' readOnly></input>
            </div>
            <div className='studentProfile-middle-left-label'>
              <label>Address</label>
              <input type='text' placeholder='Address' readOnly></input>
            </div>
            <div className='studentProfile-middle-left-label'>
              <label>Email</label>
              <input type='email' placeholder='Email' readOnly></input>
            </div>
            <div className='studentProfile-middle-left-label'>
              <label>Phone</label>
              <input type='number' placeholder='Phone' readOnly></input>
            </div>
            <div className='studentProfile-middle-left-label'>
              <label>D.O.B</label>
              <input type='date' placeholder='DD/MM/YYYY' readOnly></input>
            </div>
            <div className='studentProfile-middle-left-label'>
              <label>Date of Registration</label>
              <input type='date' placeholder='Date of Registration' readOnly></input>
            </div>
            <div className='studentProfile-middle-left-label'>
              <label>Password</label>
              <input type='password' placeholder='Password' readOnly></input>
            </div>
          </form>
        </div>
        <div className='studentProfile-middle-right'>
          <div className='studentProfile-middle-right-top'>
            <img src='' alt='Profile Pic' />
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