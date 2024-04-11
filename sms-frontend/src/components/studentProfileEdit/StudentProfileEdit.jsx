import React, { useEffect, useState } from 'react';
import './studentProfileEdit.css';
import { useNavigate } from 'react-router-dom';

const StudentProfileEdit = () => {
    const [student, setStudent]= useState({});
  const [loading, setLoading]= useState(false);
  const [file, setFile]= useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/student/11",{
        method: "GET",
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWh1bEBnbWFpbC5jb20iLCJleHAiOjE3MTI3NjIyMTcsImlhdCI6MTcxMjY3NTgxN30.kj-g2EyT_dbUbBrR8yZHpz6d9_EtmJxq4YQQ6jpCPKQ'},
      }).then(res => res.json()).then(json => setStudent(json)).catch(err => {console.log(err); setLoading(false)});
    }
  }, []);

  let handleSubmit = async (e)=> {
    e.preventDefault();
    try{
      let res = await fetch("/student",{
        method: "PUT",
        body: JSON.stringify({
            name: student.name,
            address: student.address,
            emailId: student.emailId,
            contact_info: student.contact_info,
            date_of_birth: student.date_of_birth,
            parent: {
              emailId: student.parent_emailId
            }
        }),
        headers: {'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWh1bEBnbWFpbC5jb20iLCJleHAiOjE3MTI3NjIyMTcsImlhdCI6MTcxMjY3NTgxN30.kj-g2EyT_dbUbBrR8yZHpz6d9_EtmJxq4YQQ6jpCPKQ'},
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

  let onPicChange=(e)=> {
    setFile(e.target.files[0]);
  };
  let onPicUpload = async (e)=> {
    e.preventDefault();
    fetch("/student/11/upload",{
      method: "PUT",
      headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWh1bEBnbWFpbC5jb20iLCJleHAiOjE3MTI3NjIyMTcsImlhdCI6MTcxMjY3NTgxN30.kj-g2EyT_dbUbBrR8yZHpz6d9_EtmJxq4YQQ6jpCPKQ',
  'Content-Type': 'multipart/form-data'},
  body: file,
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
    <div className='studentProfileEdit'>
        <div className='studentProfileEdit-left'>
        <form>
          <div className='studentProfileEdit-left-label'>
            <label>Name</label>
            <input type='text' placeholder='Name' value={student?.name} onChange={(e)=> setStudent({...student,name:e.target.value})}></input>
          </div>
          <div className='studentProfileEdit-left-label'>
            <label>Address</label>
            <input type='text' placeholder='Address' value={student?.address} onChange={(e)=> setStudent({...student,address:e.target.value})}></input>
          </div>
          <div className='studentProfileEdit-left-label'>
            <label>Email</label>
            <input type='email' placeholder='Email' value={student?.emailId} onChange={(e)=> setStudent({...student,emailId:e.target.value})}></input>
          </div>
          <div className='studentProfileEdit-left-label'>
            <label>Phone</label>
            <input type='number' placeholder='Phone' value={student?.contact_info} onChange={(e)=> setStudent({...student,contact_info:e.target.value})}></input>
          </div>
          <div className='studentProfileEdit-left-label'>
            <label>D.O.B</label>
            <input type='date' placeholder='DD/MM/YYYY' value={student?.date_of_birth} onChange={(e)=> setStudent({...student,date_of_birth:e.target.value})}></input>
          </div>
          <div className='studentProfileEdit-left-label'>
            <label>D.O.Reg</label>
            <input type='date' placeholder='Date of Registration' value={student?.date_of_reg} readOnly></input>
          </div>
          <div className='studentProfileEdit-left-label'>
            <label>Parent Email:</label>
            <input type='email' placeholder='Parent Email' value={student?.parent_emailId} onChange={(e)=> setStudent({...student,parent_emailId:e.target.value})}></input>
          </div>
        </form>
      </div>
      <div className='studentProfileEdit-right'>
        <div className='studentProfileEdit-right-top'>
          <div className='studentProfileEdit-right-top-top'><img className='studentProfileEdit-right-top-pic' src={`data:image/jpg;base64,${student?.pic}`} alt='profilePic'/></div>
          <div className='studentProfileEdit-right-top-bottom'>
            <input type='file' onChange={onPicChange}></input>
            <button onClick={onPicUpload}>Update PIC</button>
          </div>
        </div>
        <div className='studentProfileEdit-right-bottom'>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default StudentProfileEdit