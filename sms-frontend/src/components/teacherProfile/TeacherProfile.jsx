import React from 'react';
import './teacherProfile.css';
import {WelcomeBar, Footer, EditButton} from '../../components';

const TeacherProfile = () => {
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
              <input type='text' placeholder='Name' readOnly></input>
            </div>
            <div className='teacherProfile-middle-left-label'>
              <label>Address</label>
              <input type='text' placeholder='Address' readOnly></input>
            </div>
            <div className='teacherProfile-middle-left-label'>
              <label>Email</label>
              <input type='email' placeholder='Email' readOnly></input>
            </div>
            <div className='teacherProfile-middle-left-label'>
              <label>Phone</label>
              <input type='number' placeholder='Phone' readOnly></input>
            </div>
            <div className='teacherProfile-middle-left-label'>
              <label>D.O.B</label>
              <input type='date' placeholder='DD/MM/YYYY' readOnly></input>
            </div>
            <div className='teacherProfile-middle-left-label'>
              <label>Date of Joining</label>
              <input type='date' placeholder='Date of Joining' readOnly></input>
            </div>
            <div className='teacherProfile-middle-left-label'>
              <label>Date of Exit</label>
              <input type='date' placeholder='Date of Exit' readOnly></input>
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