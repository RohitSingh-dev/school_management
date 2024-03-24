import React, { useState, useEffect } from 'react';
import './studentAttendance.css';
import WelcomeBar from '../welcomeBar/WelcomeBar';
import DashboardFooter from '../dashboardFooter/DashboardFooter';

const StudentAttendance = () => {
    const [attendance, setAttendance]= useState({});
    const [loading, setLoading]= useState(false);
    useEffect(() => {
      if(!loading){
        setLoading(true);
        fetch("/attendance/1",{
          method: "GET",
          headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWh1bEBnbWFpbC5jb20iLCJleHAiOjE3MTEzODM1NjgsImlhdCI6MTcxMTI5NzE2OH0.4ZeKFPKac-BsvU5_Tq6RgX2kySfY9P5Y6Ix-a6poRmM'},
        }).then(res => res.json()).then(json => setAttendance(json)).catch(err => {console.log(err); setLoading(false)});
      }
    }, [])
  return (
    <div className='studentAttendancePage'>
        <div className='studentAttendancePage-welcomeBar'><WelcomeBar /></div>
        <div className='studentAttendancePage-middle'>
        <div className='studentAttendance'>
            <div className='studentAttendance-top'><h1>Attendance Record</h1></div>
            <div className='studentAttendance-middle'>
                <div className='studentAttendance-middle-left'>
                    <p><b>Name : </b>{attendance.name}</p>
                    <p><b>Parent Name : </b>{attendance.parent_name}</p>
                </div>
                <div className='studentAttendance-middle-right'>
                    <p><b>Class : </b>{attendance.schoolClass}</p>
                    <p><b>Roll. No. : </b>{attendance.roll_no}</p>
                </div>
            </div>
            <div className='studentAttendance-bottom'>
                <table className='studentAttendance-bottom-table'>
                    <thead className='studentAttendance-bottom-table-head'>
                        <tr>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className='studentAttendance-bottom-table-body'>
                        {
                            attendance.attendanceStatusResponses?.map((attendanceStatus,index) => {
                                return <tr key={index}>
                                    <td className='studentAttendance-bottom-table-body-date'><b>{attendanceStatus.date}</b></td>
                                    <td className='studentAttendance-bottom-table-body-attendance'>{attendanceStatus.present? <div className='status-present'/> : <div className='status-absent'/>}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <div className='studentAttendance-bottom-bottom'>
                    <p>Present - <div className='bottom-present'/></p>
                    <p>Absent - <div className='bottom-absent'/></p>
                </div>
            </div>
        </div>
        </div>
        <div className='studentAttendancePage-dashboardFooter'><DashboardFooter /></div>
    </div>
  )
}

export default StudentAttendance