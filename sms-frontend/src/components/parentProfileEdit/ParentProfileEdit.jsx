import React, { useEffect, useState } from 'react';
import './parentProfileEdit.css';
import { useNavigate } from 'react-router-dom';

const ParentProfileEdit = () => {
    const [parent, setParent]= useState({});
    const [loading, setLoading]= useState(false);
    const navigate = useNavigate();
    useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/parent/9",{
        method: "GET",
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlbnQxMjNAZ21haWwuY29tIiwiZXhwIjoxNzExMzgzNzgyLCJpYXQiOjE3MTEyOTczODJ9.1P5EiHvFc6skMx6ZHtB4_1Lwmgjc8uD4eks5dmbpkJE'},
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
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlbnQxMjNAZ21haWwuY29tIiwiZXhwIjoxNzExMzgzNzgyLCJpYXQiOjE3MTEyOTczODJ9.1P5EiHvFc6skMx6ZHtB4_1Lwmgjc8uD4eks5dmbpkJE'},
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
          <img className='parentProfileEdit-right-top-pic' src={`data:image/jpg;base64,${parent?.pic}`} alt='profilePic'/>
        </div>
        <div className='parentProfileEdit-right-bottom'>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ParentProfileEdit