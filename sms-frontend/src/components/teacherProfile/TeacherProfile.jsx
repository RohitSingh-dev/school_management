import React, { useContext, useEffect, useState } from 'react';
import './teacherProfile.css';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

const TeacherProfile = () => {
  const [teacher, setTeacher]= useState({});
  const [loading, setLoading]= useState(false);
  const user = useContext(UserContext);
  useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/teacher/".concat(user.currentUser?.user_id),{
        method: "GET",
        headers: {'Authorization': 'Bearer '.concat(user.currentUser?.user_token)},
      }).then(res => res.json()).then(json => setTeacher(json)).catch(err => {console.log(err); setLoading(false)});
    }
  },[])
  return (
    <div className='teacherProfile'>
      <div className='teacherProfile-left'>
        <form>
          <div className='teacherProfile-left-label'>
            <label>Name</label>
            <input type='text' placeholder='Name' value={teacher.name} readOnly></input>
          </div>
          <div className='teacherProfile-left-label'>
            <label>Address</label>
            <input type='text' placeholder='Address' value={teacher.address} readOnly></input>
          </div>
          <div className='teacherProfile-left-label'>
            <label>Email</label>
            <input type='email' placeholder='Email' value={teacher.emailId} readOnly></input>
          </div>
          <div className='teacherProfile-left-label'>
            <label>Phone</label>
            <input type='number' placeholder='Phone' value={teacher.contact_info} readOnly></input>
          </div>
          <div className='teacherProfile-left-label'>
            <label>D.O.B</label>
            <input type='date' placeholder='DD/MM/YYYY' value={teacher.date_of_birth} readOnly></input>
          </div>
          <div className='teacherProfile-left-label'>
            <label>D.O. Join</label>
            <input type='date' placeholder='Date of Joining' value={teacher.date_of_joining} readOnly></input>
          </div>
          <div className='teacherProfile-left-label'>
            <label>D.O.Exit</label>
            <input type='date' placeholder='Date of Exit' value={teacher.date_of_exit} readOnly></input>
          </div>
        </form>
      </div>
      <div className='teacherProfile-right'>
        <div className='teacherProfile-right-top'>
          <img src={`data:image/jpg;base64,${teacher.pic}`} alt='Profile Pic' />
        </div>
        <div className='teacherProfile-right-bottom'>
          <Link to={'/Profile/edit'}><button>Edit /</button></Link>
        </div>
      </div>
    </div>
  )
}

export default TeacherProfile