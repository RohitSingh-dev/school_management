import React, { useState } from 'react'
import './loginForm.css';
import {RegisterForm} from '../../components';
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [message, setMessage]= useState("");
  const navigate = useNavigate();
  let handleSubmit = async (e)=> {
    e.preventDefault();
    try{
      let res = await fetch("/login",{
        method: "POST",
        body: JSON.stringify({
          username: email,
          password: password,
        }),
        headers: {'Content-Type': 'application/json'},
      });
      let resJSON = await res.text();
      if(res.status===200){
        console.log(resJSON);
        setEmail("");
        setPassword("");
        setMessage("Token Received Successfully");
        navigate("/dashboard");
      }
      else{
        setMessage("Invalid Credentials");
      }
    }
    catch(err){
      console.log(err);
    }
  };
  const [isOpen, setIsOpen]= useState(false);
  function togglePopUp(){
    setIsOpen(!isOpen);
  }
  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit}>
        <div className='login-form-background'>
        <fieldset className='login-form-fieldset'>
          <div className='login-form-close-btn' onClick={props.toggle}>&times;</div>
          <div className='login-form-legend'><b>User Login</b></div>
          <div className='login-form-label'>
            <label>Email Id</label><br></br>
            <input type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} required></input><br></br>
          </div>
          <div className='login-form-label'>
            <label>Password</label><br></br>
            <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required></input>
          </div>
          <div className='login-form-buttons'>
            <input type="reset" value="RESET"></input>
            <input className='login-form-buttons-login' type="submit" value="LOGIN"></input>
          </div>
          <div className='login-form-message'>
            {message ? <p>{message}</p> : null}
          </div>
          <div className='login-form-register'>
            <p>New User? <span onClick={togglePopUp}>Register here</span></p>
            {isOpen? <RegisterForm toggle={togglePopUp}/>: null}
          </div>
        </fieldset>
        </div>
      </form>
    </div>
  )
}

export default LoginForm