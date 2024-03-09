import React, { useEffect } from 'react';
import './studentProfile.css';
import {EditButton} from '../../components';
import { useState } from 'react';

const StudentProfile = () => {
  const [student, setStudent]= useState({});
  const [loading, setLoading]= useState(false);
  useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/student/11",{
        method: "GET",
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWh1bEBnbWFpbC5jb20iLCJleHAiOjE3MDk5OTk1MjEsImlhdCI6MTcwOTkxMzEyMX0.polE1olU6xtaBnu3Po__-qC2JnZ_zH20s8tqwTl6rws'},
      }).then(res => res.json()).then(json => setStudent(json)).catch(err => {console.log(err); setLoading(false)});
    }
  }, [])
  return (
    <div className='studentProfile'>
        <div className='studentProfile-left'>
        <form>
          <div className='studentProfile-left-label'>
            <label>Name</label>
            <input type='text' placeholder='Name' value={student.name} readOnly></input>
          </div>
          <div className='studentProfile-left-label'>
            <label>Address</label>
            <input type='text' placeholder='Address' value={student.address} readOnly></input>
          </div>
          <div className='studentProfile-left-label'>
            <label>Email</label>
            <input type='email' placeholder='Email' value={student.emailId} readOnly></input>
          </div>
          <div className='studentProfile-left-label'>
            <label>Phone</label>
            <input type='number' placeholder='Phone' value={student.contact_info} readOnly></input>
          </div>
          <div className='studentProfile-left-label'>
            <label>D.O.B</label>
            <input type='date' placeholder='DD/MM/YYYY' value={student.date_of_birth} readOnly></input>
          </div>
          <div className='studentProfile-left-label'>
            <label>D.O.Reg</label>
            <input type='date' placeholder='Date of Registration' value={student.date_of_reg} readOnly></input>
          </div>
        </form>
      </div>
      <div className='studentProfile-right'>
        <div className='studentProfile-right-top'>
          <img className='studentProfile-right-top-pic' src={`data:image/jpg;base64,${student.pic}`} alt='profilePic'/>
        </div>
        <div className='studentProfile-right-bottom'>
          <EditButton />
        </div>
      </div>
    </div>
  )
}

export default StudentProfile