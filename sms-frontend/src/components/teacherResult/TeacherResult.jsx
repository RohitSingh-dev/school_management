import React, { useState, useEffect } from 'react';
import './teacherResult.css';
import { Link } from 'react-router-dom';
import {WelcomeBar, DashboardFooter} from '../../components';

const TeacherResult = () => {
    const [result, setResult]= useState({});
    const [loading, setLoading]= useState(false);
    useEffect(() => {
      if(!loading){
        setLoading(true);
        fetch("/result/schoolClass/1",{
          method: "GET",
          headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaXIxMjNAZ21haWwuY29tIiwiZXhwIjoxNzExMzgzNjgwLCJpYXQiOjE3MTEyOTcyODB9.ZI72o4DCzmVAqWU2I_s8GfWo5KCLOj_sVw7voy3Hayo'},
        }).then(res => res.json()).then(json => setResult(json)).catch(err => {console.log(err); setLoading(false)});
      }
    }, [])
  return (
    <div className='teacherResultPage'>
        <div className='teacherResultPage-welcomeBar'><WelcomeBar /></div>
        <div className='teacherResultPage-middle'>
        <div className='teacherResult'>
        <div className='teacherResult-top'>
            <div className='teacherResult-top-left'>
                <h1>Academic Result</h1>
            </div >
            <div className='teacherResult-top-right'>
                <p>Class : {result.schoolClass}</p>
                <p>Students : {result.resultResponses?.length}</p>
            </div>
        </div>
        <div className='teacherResult-bottom'>
            <table className='teacherResult-bottom-table'>
                <thead className='teacherResult-bottom-table-head'>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='teacherResult-bottom-table-body'>
                    {
                        result.resultResponses?.map((res,index) => {
                            return <tr key={index}>
                                <td>{res.name}</td>
                                <td className='teacherResult-bottom-table-body-status'>{res.passed===true? <span className='teacherResult-bottom-table-body-status-pass'>Pass</span> : <span className='teacherResult-bottom-table-body-status-fail'>Fail</span>}</td>
                                <td><Link to={"/Result/${result.student.id}"}><button>View Result</button></Link></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div className='teacherResult-bottom-button'>
                <input type='file' name='file' onChange=''></input>
                <button>Upload Result</button>
            </div>
        </div>
    </div>
        </div>
        <div className='teacherResultPage-dashboardFooter'><DashboardFooter /></div>
    </div>
  )
}

export default TeacherResult