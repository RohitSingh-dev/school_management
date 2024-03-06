import React, { useState, useEffect } from 'react';
import './studentResult.css';

const StudentResult = (props) => {
    const [result, setResult]= useState({});
    const [loading, setLoading]= useState(false);
    const [marks, setMarks]= useState([]);
    useEffect(() => {
      if(!loading){
        setLoading(true);
        fetch("/result/1",{
          method: "GET",
          headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWh1bEBnbWFpbC5jb20iLCJleHAiOjE3MDk3Mzc3MjgsImlhdCI6MTcwOTY1MTMyOH0.jh0mYn4TnxpmCv5eHBaC2i-xVV-0FZwAeJMTAjKiwP8'},
        }).then(res => res.json()).then(json => {setResult(json); setMarks(json.marks)}).catch(err => {console.log(err); setLoading(false)});
      }
    }, [])
  return (
    <div className='studentResult'>
        <div className='studentResult-close' onClick={props.toggle}>&times;</div>
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
  )
}

export default StudentResult