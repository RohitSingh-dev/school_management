import React, { useEffect, useState } from 'react';
import './parentProfileEdit.css';
import { useNavigate } from 'react-router-dom';

const ParentProfileEdit = () => {
    const [parent, setParent]= useState({});
    const [loading, setLoading]= useState(false);
    const [file, setFile]= useState(null);
    const navigate = useNavigate();
    useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/parent/9",{
        method: "GET",
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlbnQxMjNAZ21haWwuY29tIiwiZXhwIjoxNzEyNzYyNTM4LCJpYXQiOjE3MTI2NzYxMzh9.-VBePuj29h9I5sr04jOkbB6bpV_PfHz7tYwsgIX0Umw'},
      }).then(res => res.json()).then(json => setParent(json)).catch(err => {console.log(err); setLoading(false)});
    }
    }, []);

    let handleSubmit = async (e)=> {
        e.preventDefault();
        try{
          let res = await fetch("/parent",{
            method: "PUT",
            body: JSON.stringify({
                name: parent.name,
                address: parent.address,
                emailId: parent.emailId,
                contact_info: parent.contact_info
            }),
            headers: {'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlbnQxMjNAZ21haWwuY29tIiwiZXhwIjoxNzEyNzYyNTM4LCJpYXQiOjE3MTI2NzYxMzh9.-VBePuj29h9I5sr04jOkbB6bpV_PfHz7tYwsgIX0Umw'},
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
        fetch("/parent/9/upload",{
          method: "PUT",
          headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlbnQxMjNAZ21haWwuY29tIiwiZXhwIjoxNzEyNzYyNTM4LCJpYXQiOjE3MTI2NzYxMzh9.-VBePuj29h9I5sr04jOkbB6bpV_PfHz7tYwsgIX0Umw',
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
    <div className='parentProfileEdit'>
        <div className='parentProfileEdit-left'>
        <form>
          <div className='parentProfileEdit-left-label'>
            <label>Name</label>
            <input type='text' placeholder='Name' value={parent?.name} onChange={(e)=> setParent({...parent,name:e.target.value})}></input>
          </div>
          <div className='parentProfileEdit-left-label'>
            <label>Address</label>
            <input type='text' placeholder='Address' value={parent?.address} onChange={(e)=> setParent({...parent,address:e.target.value})}></input>
          </div>
          <div className='parentProfileEdit-left-label'>
            <label>Email</label>
            <input type='email' placeholder='Email' value={parent?.emailId} onChange={(e)=> setParent({...parent,emailId:e.target.value})}></input>
          </div>
          <div className='parentProfileEdit-left-label'>
            <label>Phone</label>
            <input type='number' placeholder='Phone' value={parent?.contact_info} onChange={(e)=> setParent({...parent,contact_info:e.target.value})}></input>
          </div>
        </form>
      </div>
      <div className='parentProfileEdit-right'>
        <div className='parentProfileEdit-right-top'>
          <div className='parentProfileEdit-right-top-top'><img className='parentProfileEdit-right-top-pic' src={`data:image/jpg;base64,${parent?.pic}`} alt='profilePic'/></div>
        </div>
        <div className='parentProfileEdit-right-top-bottom'>
            <input type='file' onChange={onPicChange}></input>
            <button onClick={onPicUpload}>Update PIC</button>
          </div>
        <div className='parentProfileEdit-right-bottom'>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ParentProfileEdit