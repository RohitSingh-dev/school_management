import React, { useState, useEffect, useContext } from 'react';
import './teacherResult.css';
import { Link } from 'react-router-dom';
import {WelcomeBar, DashboardFooter} from '../../components';
import { UserContext } from '../../context/UserContext';

const TeacherResult = () => {
    const [result, setResult]= useState({});
    const [loading, setLoading]= useState(false);
    const [file, setFile]= useState(null);
    const user= useContext(UserContext);
    useEffect(() => {
      if(!loading){
        setLoading(true);
        fetch("/result/schoolClass/".concat(user.currentUser?.user_id),{
          method: "GET",
          headers: {'Authorization': 'Bearer '.concat(user.currentUser?.user_token)},
        }).then(res => res.json()).then(json => setResult(json)).catch(err => {console.log(err); setLoading(false)});
      }
    }, [])

    let onFileChange=(e)=> {
        setFile(e.target.files[0]);
    };
    let onFileUpload= (e)=> {
        e.preventDefault();
        const data = new FormData();
        data.append('file',file);
        fetch("/result/bulkupload",{
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
    <div className='teacherResultPage'>
        <div className='teacherResultPage-welcomeBar'><WelcomeBar username={user.user_name}/></div>
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
                <input type='file' name='file' onChange={onFileChange}></input>
                <button onClick={onFileUpload}>Upload Result</button>
            </div>
        </div>
    </div>
        </div>
        <div className='teacherResultPage-dashboardFooter'><DashboardFooter /></div>
    </div>
  )
}

export default TeacherResult