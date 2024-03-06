import React, { useState, useEffect } from 'react';
import './teacherAttendance.css';
import StudentAttendance from '../studentAttendance/StudentAttendance';

const TeacherAttendance = () => {
    const [attendance, setAttendance]= useState({});
    const [loading, setLoading]= useState(false);
    useEffect(() => {
      if(!loading){
        setLoading(true);
        fetch("/attendance/schoolClass/1",{
          method: "GET",
          headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaXIxMjNAZ21haWwuY29tIiwiZXhwIjoxNzA5NzM3OTYzLCJpYXQiOjE3MDk2NTE1NjN9.CNjz-OpeypQJYAvxw70-QjgYc_UWRQXbn7HV5errI0c',
        User: 4},
        }).then(res => res.json()).then(json => setAttendance(json)).catch(err => {console.log(err); setLoading(false)});
      }
    }, [])
    const [isOpen, setIsOpen]= useState(false);
    function togglePopUp(){
      setIsOpen(!isOpen);
    }
  return (
    <div className='teacherAttendance'>
        <div className='teacherAttendance-top'>
            <div className='teacherAttendance-top-top'>
                <h1>Attendance Record</h1>
            </div >
            <div className='teacherAttendance-top-bottom'>
                <p><b>Class : {attendance.schoolClass}</b>{}</p>
                <p><b>Students : </b></p>
            </div>
        </div>
        <div className='teacherAttendance-bottom'>
            <table className='teacherAttendance-bottom-table'>
                <thead className='teacherAttendance-bottom-table-head'>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='teacherAttendance-bottom-table-body'>
                    {
                        attendance.attendanceResponses?.map((row,index) => {
                            return <tr key={index}>
                                <td className='teacherAttendance-bottom-table-body-studentname'>{row.attendanceResponses.attendance.student.name}</td>
                                <td className='teacherAttendance-bottom-table-body-button'><button onClick={togglePopUp}>View Attendance</button></td>
                                {isOpen? <StudentAttendance toggle={togglePopUp} />  : null}
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div className='teacherAttendance-bottom-button'>
                <button>Update Attendance</button>
            </div>
        </div>
    </div>
  )
}

export default TeacherAttendance