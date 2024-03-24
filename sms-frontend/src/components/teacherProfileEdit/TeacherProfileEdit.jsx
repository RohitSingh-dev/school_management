import React, { useEffect, useState } from 'react';
import './teacherProfileEdit.css';
import { useNavigate } from 'react-router-dom';

const TeacherProfileEdit = () => {
const [teacher, setTeacher]= useState({});
  const [loading, setLoading]= useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/teacher/4",{
        method: "GET",
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaXIxMjNAZ21haWwuY29tIiwiZXhwIjoxNzExMzgzNjgwLCJpYXQiOjE3MTEyOTcyODB9.ZI72o4DCzmVAqWU2I_s8GfWo5KCLOj_sVw7voy3Hayo'},
      }).then(res => res.json()).then(json => setTeacher(json)).catch(err => {console.log(err); setLoading(false)});
    }
  },[]);
  let handleSubmit = async (e)=> {
    e.preventDefault();
    try{
      let res = await fetch("/teacher",{
        method: "PUT",
        body: JSON.stringify({
            name: teacher.name,
            address: teacher.address,
            emailId: teacher.emailId,
            contact_info: teacher.contact_info,
            date_of_birth: teacher.date_of_birth
        }),
        headers: {'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaXIxMjNAZ21haWwuY29tIiwiZXhwIjoxNzExMzgzNjgwLCJpYXQiOjE3MTEyOTcyODB9.ZI72o4DCzmVAqWU2I_s8GfWo5KCLOj_sVw7voy3Hayo'},
      });
      let resJSON = await res.text();
      if(res.status===200){
        console.log(resJSON);
        navigate("/Profile");
      }
      else{
        alert("Invalid Input");
      }
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div className='teacherProfileEdit'>
      <div className='teacherProfileEdit-left'>
        <form>
          <div className='teacherProfileEdit-left-label'>
            <label>Name</label>
            <input type='text' placeholder='Name' value={teacher?.name} onChange={(e)=> setTeacher({...teacher,name:e.target.value})}></input>
          </div>
          <div className='teacherProfileEdit-left-label'>
            <label>Address</label>
            <input type='text' placeholder='Address' value={teacher?.address} onChange={(e)=> setTeacher({...teacher,address:e.target.value})}></input>
          </div>
          <div className='teacherProfileEdit-left-label'>
            <label>Email</label>
            <input type='email' placeholder='Email' value={teacher?.emailId} onChange={(e)=> setTeacher({...teacher,emailId:e.target.value})}></input>
          </div>
          <div className='teacherProfileEdit-left-label'>
            <label>Phone</label>
            <input type='number' placeholder='Phone' value={teacher?.contact_info} onChange={(e)=> setTeacher({...teacher,contact_info:e.target.value})}></input>
          </div>
          <div className='teacherProfileEdit-left-label'>
            <label>D.O.B</label>
            <input type='date' placeholder='DD/MM/YYYY' value={teacher?.date_of_birth} onChange={(e)=> setTeacher({...teacher,date_of_birth:e.target.value})}></input>
          </div>
          <div className='teacherProfileEdit-left-label'>
            <label>D.O. Join</label>
            <input type='date' placeholder='Date of Joining' value={teacher?.date_of_joining} readOnly></input>
          </div>
          <div className='teacherProfileEdit-left-label'>
            <label>D.O.Exit</label>
            <input type='date' placeholder='Date of Exit' value={teacher?.date_of_exit} readOnly></input>
          </div>
        </form>
      </div>
      <div className='teacherProfileEdit-right'>
        <div className='teacherProfileEdit-right-top'>
          <img src={`data:image/jpg;base64,${teacher?.pic}`} alt='Profile Pic' />
        </div>
        <div className='teacherProfileEdit-right-bottom'>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default TeacherProfileEdit