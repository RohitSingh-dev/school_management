import React, { useEffect, useState } from 'react';
import './parentProfile.css';

const ParentProfile = () => {
    const [parent, setParent]= useState({});
  const [loading, setLoading]= useState(false);
  useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/parent/9",{
        method: "GET",
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlbnQxMjNAZ21haWwuY29tIiwiZXhwIjoxNzEzMDI0MzE2LCJpYXQiOjE3MTI5Mzc5MTZ9.zcdQqSPnGQHpI6yc7Sa7rKeRSJXrvCCEvddoJLsAIeI'},
      }).then(res => res.json()).then(json => setParent(json)).catch(err => {console.log(err); setLoading(false)});
    }
  }, [])
  return (
    <div className='parentProfile'>
        <div className='parentProfile-left'>
        <form>
          <div className='parentProfile-left-label'>
            <label>Name</label>
            <input type='text' placeholder='Name' value={parent.name} readOnly></input>
          </div>
          <div className='parentProfile-left-label'>
            <label>Address</label>
            <input type='text' placeholder='Address' value={parent.address} readOnly></input>
          </div>
          <div className='parentProfile-left-label'>
            <label>Email</label>
            <input type='email' placeholder='Email' value={parent.emailId} readOnly></input>
          </div>
          <div className='parentProfile-left-label'>
            <label>Phone</label>
            <input type='number' placeholder='Phone' value={parent.contact_info} readOnly></input>
          </div>
        </form>
      </div>
      <div className='parentProfile-right'>
        <div className='parentProfile-right-top'>
          <img className='parentProfile-right-top-pic' src={`data:image/jpg;base64,${parent.pic}`} alt='profilePic'/>
        </div>
        <div className='parentProfile-right-bottom'>
          <a href='/Profile/edit'><button>Edit /</button></a>
        </div>
      </div>
    </div>
  )
}

export default ParentProfile