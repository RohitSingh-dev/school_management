import React, { useEffect, useState } from 'react';
import './teacherProfile.css';
import {WelcomeBar, Footer, EditButton} from '../../components';

const TeacherProfile = () => {
  const [teacher, setTeacher]= useState({});
  useEffect(() => {
      fetch("/teacher/4",{
        method: "GET",
        headers: {'Authorization': 'Bearer '},
      }).then(res => res.json()).then(json => setTeacher(json)).catch(err => console.log(err));
  })
  return (
    <div className='teacherProfile'>
      <div className='teacherProfile-top'>
        <WelcomeBar />
      </div>
      <div className='teacherProfile-middle'>
        <div className='teacherProfile-middle-left'>
          <form>
            <div className='teacherProfile-middle-left-label'>
              <label>Name</label>
              <input type='text' placeholder='Name' value={teacher.name} readOnly></input>
            </div>
            <div className='teacherProfile-middle-left-label'>
              <label>Address</label>
              <input type='text' placeholder='Address' value={teacher.address} readOnly></input>
            </div>
            <div className='teacherProfile-middle-left-label'>
              <label>Email</label>
              <input type='email' placeholder='Email' value={teacher.emailId} readOnly></input>
            </div>
            <div className='teacherProfile-middle-left-label'>
              <label>Phone</label>
              <input type='number' placeholder='Phone' value={teacher.contact_info} readOnly></input>
            </div>
            <div className='teacherProfile-middle-left-label'>
              <label>D.O.B</label>
              <input type='date' placeholder='DD/MM/YYYY' value={teacher.date_of_birth} readOnly></input>
            </div>
            <div className='teacherProfile-middle-left-label'>
              <label>Date of Joining</label>
              <input type='date' placeholder='Date of Joining' value={teacher.date_of_joining} readOnly></input>
            </div>
            <div className='teacherProfile-middle-left-label'>
              <label>Date of Exit</label>
              <input type='date' placeholder='Date of Exit' value={teacher.date_of_exit} readOnly></input>
            </div>
          </form>
        </div>
        <div className='teacherProfile-middle-right'>
          <div className='teacherProfile-middle-right-top'>
            <img src='' alt='Profile Pic' />
          </div>
          <div className='teacherProfile-middle-right-bottom'>
            <EditButton />
          </div>
        </div>
      </div>
      <div className='teacherProfile-bottom'>
        <Footer />
      </div>
    </div>
  )
}

export default TeacherProfile