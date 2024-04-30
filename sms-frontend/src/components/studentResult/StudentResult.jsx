import React, { useState, useEffect, useContext } from 'react';
import './studentResult.css';
import WelcomeBar from '../welcomeBar/WelcomeBar';
import DashboardFooter from '../dashboardFooter/DashboardFooter';
import { UserContext } from '../../context/UserContext';

const StudentResult = (props) => {
    const [result, setResult]= useState({});
    const [loading, setLoading]= useState(false);
    const [marks, setMarks]= useState([]);
    const user= useContext(UserContext);
    useEffect(() => {
      if(!loading){
        setLoading(true);
        fetch("/result/".concat(user.currentUser?.user_id),{
          method: "GET",
          headers: {'Authorization': 'Bearer '.concat(user.currentUser?.user_token)},
        }).then(res => res.json()).then(json => {setResult(json); setMarks(json.marks)}).catch(err => {console.log(err); setLoading(false); alert("Unexpected Error. Try after some time.")});
      }
    }, [])
  return (
    <div className='studentResultPage'>
        <div className='studentResultPage-welcomeBar'><WelcomeBar username={user.currentUser?.user_name}/></div>
        <div className='studentResultPage-middle'>
        <div className='studentResult'>
        <div className='studentResult-top'>
            <h1>Record of Academic Permformance</h1>
        </div>
        <div className='studentResult-middle'>
            <div className='studentResult-middle-left'>
                <p><b>Name of Student: </b>{result.name}</p>
                <p><b>Father's Name: </b>{result.parent_name}</p>
                <p><b>Address: </b>{result.address}</p>
            </div>
            <div className='studentResult-middle-right'>
                <p><b>Class: </b>{result.schoolClass}</p>
                <p><b>Roll No. : </b>{result.roll_no}</p>
                <p><b>DOB : </b>{result.date_of_birth}</p>
            </div>
        </div>
        <div className='studentResult-bottom'>
            <div className='studentResult-bottom-top'>
                <div className='studentResult-bottom-top-top'>
                    <h3>Papers</h3>
                    <h3>Marks Obtained</h3>
                </div>
                <div className='studentResult-bottom-top-bottom'>
                    <table className='studentResult-bottom-top-bottom-table'>
                        <tbody className='studentResult-bottom-top-bottom-table-body'>
                            {
                                marks.map((mark,index) => {
                                    return <tr key={index}>
                                        <td><b>{mark.subject.sub_name}</b></td>
                                        <td>{mark.marks_obtained}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='studentResult-bottom-bottom'>
                <h3>Total Marks : {result.total_marks}</h3>
                <h3>Status : {result.passed===true? "Pass" : "Fail"}</h3>
            </div>
        </div>
    </div>
        </div>
        <div className='studentResultPage-dashboardFooter'><DashboardFooter /></div>
    </div>
  )
}

export default StudentResult