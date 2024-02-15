import React from 'react';
import './teacherProfile.css';
import {WelcomeBar, Footer, EditButton} from '../../components';

const TeacherProfile = ({name, address, email, phone, dob, doj, dox, image}) => {
  return (
    <div className='teacherProfile'>
      <div className='teacherProfile-top'>
        <WelcomeBar />
      </div>
      <div className='teacherProfile-middle'>
        <div className='teacherProfile-middle-left'>
          <div className='teacherProfile-middle-left-name'>{name="*Name"}</div>
          <div className='teacherProfile-middle-left-address'>{address="*Address"}</div>
          <div className='teacherProfile-middle-left-email'>{email="*Email"}</div>
          <div className='teacherProfile-middle-left-phone'>{phone="*Phone"}</div>
          <div className='teacherProfile-middle-left-dob'>{dob="*DOB(DD/MM/YYYY)"}</div>
          <div className='teacherProfile-middle-left-dor'>{doj="*Date of Joining"}</div>
          <div className='teacherProfile-middle-left-password'>{dox="*Date of Exit"}</div>
        </div>
        <div className='teacherProfile-middle-right'>
          <div className='teacherProfile-middle-right-top'>
            <img src={image} alt='Profile Pic' />
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