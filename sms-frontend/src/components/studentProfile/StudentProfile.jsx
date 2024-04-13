import React, { useEffect, useState } from 'react';
import './studentProfile.css';

const StudentProfile = () => {
  const [student, setStudent]= useState({});
  const [loading, setLoading]= useState(false);
  useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/student/11",{
        method: "GET",
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWh1bEBnbWFpbC5jb20iLCJleHAiOjE3MTMwMjQwMDIsImlhdCI6MTcxMjkzNzYwMn0.NfI3uyGUunf5lH6fE4epMfcpbSN39jS3inCZadRKGtI'},
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
          <div className='studentProfile-left-label'>
            <label>Parent Email:</label>
            <input type='email' placeholder='Parent Email' value={student.parent_emailId} readOnly></input>
          </div>
        </form>
      </div>
      <div className='studentProfile-right'>
        <div className='studentProfile-right-top'>
          <img className='studentProfile-right-top-pic' src={`data:image/jpg;base64,${student.pic}`} alt='profilePic'/>
        </div>
        <div className='studentProfile-right-bottom'>
          <a href='/Profile/edit'><button>Edit /</button></a>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile