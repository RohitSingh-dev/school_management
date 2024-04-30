import React, { useContext, useEffect, useState } from 'react';
import './parentProfile.css';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

const ParentProfile = () => {
    const [parent, setParent]= useState({});
  const [loading, setLoading]= useState(false);
  const user = useContext(UserContext);
  useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/parent/".concat(user.currentUser?.user_id),{
        method: "GET",
        headers: {'Authorization': 'Bearer '.concat(user.currentUser?.user_token)},
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
          <Link to={'/Profile/edit'}><button>Edit /</button></Link>
        </div>
      </div>
    </div>
  )
}

export default ParentProfile