import React from 'react';
import './contactUs.css';
import {Navbar, Footer, TeacherInfo} from '../../components';

const ContactUs = () => {
  return (
    <div className='contactUs'>
      <div className='contactUs-top'><Navbar /></div>
      <div className='contactUs-middle'>
        <div className='contactUs-middle-top'>
          <h1>Contact Us</h1>
        </div>
        <div className='contactUs-middle-middle'>
          <div className='contactUs-middle-middle-c1'>
            <iframe id='iframe1' title='GoogleMaps' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14633.249500339914!2d87.3412147!3d23.5212647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7704c840eb577%3A0xaec1450cde6d225b!2sBengal%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1705243437941!5m2!1sen!2sin"></iframe>
          </div>
          <div className='contactUs-middle-middle-c2'>
            <p>Shahid Sukumar Banerjee Sarani, Bidhan Nagar, Durgapur 713 212<br />
                Tel.: 0343-2533 186 / 187 /189 /190<br />
                Email: bcet_dgp@rediffmail.com<br />
                hr@bcetdgp.ac.in</p>
          </div>
        </div>
        <div className='contactUs-middle-bottom'>
          <div className='contactUs-middle-bottom-r1'>
            <TeacherInfo teacherName='Shri S. K. Sharma' teacherDesignation='(Chairman)' teacherPhone='+91-343-253 3188' teacherEmail='vc@sksgi.com'></TeacherInfo>
            <TeacherInfo teacherName='Shri. Mayank Gautam' teacherDesignation='(Vice Chairman)' teacherPhone='+91-343-253 3188' teacherEmail='vc@sksgi.com'></TeacherInfo>
            <TeacherInfo teacherName='Prof. A C Ganguli' teacherDesignation='(Director)' teacherPhone='+91-9932779359' teacherEmail='acg_recd@yahoo.co.in'></TeacherInfo>
          </div>
          <div className='contactUs-middle-bottom-r2'>
            <TeacherInfo teacherName='Prof. P. K. Prasad' teacherDesignation='(Principal)' teacherPhone='+91-81700 21121' teacherEmail='bcet_dgp@rediffmail.com'></TeacherInfo>
            <TeacherInfo teacherName='Shri S S Choubey' teacherDesignation='(Registrar)' teacherPhone='+91-343-253 3190' teacherEmail='hr@bcetdgp.ac.inm'></TeacherInfo>
            <TeacherInfo teacherName='Mr. Rakesh Yadav' teacherDesignation='(Sr. TPO)' teacherPhone='+91-9933564121' teacherEmail='placement@bcetdgp.ac.in'></TeacherInfo>
          </div>
        </div>
      </div>
      <div className='contactUs-bottom'><Footer /></div>
    </div>
  )
}

export default ContactUs