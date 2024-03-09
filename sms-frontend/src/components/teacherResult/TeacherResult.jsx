import React, { useState, useEffect } from 'react';
import './teacherResult.css';
import { Link } from 'react-router-dom';
import {WelcomeBar, DashboardFooter} from '../../components';

const TeacherResult = () => {
    const [results, setResults]= useState([]);
    const [loading, setLoading]= useState(false);
    useEffect(() => {
      if(!loading){
        setLoading(true);
        fetch("/result/schoolClass/1",{
          method: "GET",
          headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaXIxMjNAZ21haWwuY29tIiwiZXhwIjoxNzA5OTk5NDQxLCJpYXQiOjE3MDk5MTMwNDF9.DLM5O52OLt6LU6U0bqRu0thTyKZetq4yZWfz_v18N6E'},
        }).then(res => res.json()).then(json => setResults(json)).catch(err => {console.log(err); setLoading(false)});
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
                <p>Class : {results.slice(0,1).map((result) => result.student.schoolClass.class_name)}</p>
                <p>Students : {results.length}</p>
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
                        results.map((result,index) => {
                            return <tr key={index}>
                                <td>{result.student.name}</td>
                                <td className='teacherResult-bottom-table-body-status'>{result.passed===true? <span className='teacherResult-bottom-table-body-status-pass'>Pass</span> : <span className='teacherResult-bottom-table-body-status-fail'>Fail</span>}</td>
                                <td><Link to={"/Result/${result.student.id}"}><button>View Result</button></Link></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div className='teacherResult-bottom-button'>
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