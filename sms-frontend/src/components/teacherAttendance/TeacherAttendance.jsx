import React, { useState, useEffect, useContext } from 'react';
import './teacherAttendance.css';
import { Link } from 'react-router-dom';
import {WelcomeBar, DashboardFooter} from '../../components';
import { UserContext } from '../../context/UserContext';

const TeacherAttendance = () => {
    const [attendance, setAttendance]= useState({});
    const [loading, setLoading]= useState(false);
    const [file, setFile]= useState(null);
    const user= useContext(UserContext);
    useEffect(() => {
      if(!loading){
        setLoading(true);
        fetch("/attendance/schoolClass/".concat(user.currentUser?.user_id),{
          method: "GET",
          headers: {'Authorization': 'Bearer '.concat(user.currentUser?.user_token),
        User: 4},
        }).then(res => res.json()).then(json => setAttendance(json)).catch(err => {console.log(err); setLoading(false)});
      }
    }, [])
    let onFileChange=(e)=> {
        setFile(e.target.files[0]);
    };
    let onFileUpload= (e)=> {
        e.preventDefault();
        const data = new FormData();
        data.append('file',file);
        fetch("/attendance/bulkupload",{
            method: "POST",
            headers: {'Authorization': 'Bearer '.concat(user.currentUser?.user_token)},
        body: data,
        }).then(response=> {
            if(response.ok){
                alert("File Uploaded Successfully");
            }
            else{
                alert("File Upload Failed");
            }
        }).catch(err=> {console.err("Error Uploading Files: ", err)})
    };
  return (
    <div className='teacherAttendancePage'>
        <div className='teacherAttendancePage-welcomeBar'><WelcomeBar username={user.user_name}/></div>
        <div className='teacherAttendancePage-middle'>
        <div className='teacherAttendance'>
        <div className='teacherAttendance-top'>
            <div className='teacherAttendance-top-top'>
                <h1>Attendance Record</h1>
            </div >
            <div className='teacherAttendance-top-bottom'>
                <p><b>Class : {attendance.schoolClass}</b>{}</p>
                <p><b>Students : {attendance.attendanceResponses?.length}</b></p>
            </div>
        </div>
        <div className='teacherAttendance-bottom'>
            <div className='teacherAttendance-bottom-top'>
            <table className='teacherAttendance-bottom-table'>
                <thead className='teacherAttendance-bottom-table-head'>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='teacherAttendance-bottom-table-body'>
                    {
                        attendance.attendanceResponses?.map((student,index) => {
                            return <tr key={index}>
                                <td className='teacherAttendance-bottom-table-body-studentname'>{student.name}</td>
                                <td className='teacherAttendance-bottom-table-body-button'><Link to={"/Attendance/${student.id}"}><button>View Attendance</button></Link></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            </div>
            <div className='teacherAttendance-bottom-button'>
                <input type='file' name='file' onChange={onFileChange}></input>
                <button onClick={onFileUpload}>Upload Attendance</button>
            </div>
        </div>
    </div>
        </div>
        <div className='teacherAttendancePage-dashboardFooter'><DashboardFooter /></div>
    </div>
  )
}

export default TeacherAttendance