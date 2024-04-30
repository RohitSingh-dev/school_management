import React, { useContext, useEffect, useState } from 'react';
import './teacherProfileEdit.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const TeacherProfileEdit = () => {
const [teacher, setTeacher]= useState({});
  const [loading, setLoading]= useState(false);
  const [file, setFile]= useState("");
  const navigate = useNavigate();
  const user = useContext(UserContext);
  useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/teacher/".concat(user.currentUser?.user_id),{
        method: "GET",
        headers: {'Authorization': 'Bearer '.concat(user.currentUser?.user_token)},
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
        'Authorization': 'Bearer '.concat(user.currentUser?.user_token)},
      });
      let resJSON = await res.text();
      if(res.status===200){
        console.log(resJSON);
        user.setCurrentUser(JSON.parse(JSON.stringify({
          user_name: teacher.name,
          user_id: user.currentUser?.user_id,
          user_token: user.currentUser?.user_token,
          user_role: user.currentUser?.user_role
        })));
        console.log(user);
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

  let onPicChange=(e)=> {
    setFile(e.target.files[0]);
  };
  let onPicUpload = async (e)=> {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    fetch("/teacher/".concat(user.currentUser?.user_id,"/upload"),{
      method: "PUT",
      headers: {'Authorization': 'Bearer '.concat(user.currentUser?.user_token)},
  body: data,
  }).then(response=> {
      if(response.ok){
          alert("Pic Updated Successfully");
      }
      else{
          alert("Pic Upload Failed");
      }
  }).catch(err=> {console.err("Error Uploading Files: ", err)})
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
          <div className='teacherProfileEdit-right-top-top'><img src={`data:image/jpg;base64,${teacher?.pic}`} alt='Profile Pic' /></div>
          <div className='teacherProfileEdit-right-top-bottom'>
            <input type='file' name='file' onChange={onPicChange}></input>
            <button onClick={onPicUpload}>Update PIC</button>
          </div>
        </div>
        <div className='teacherProfileEdit-right-bottom'>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default TeacherProfileEdit