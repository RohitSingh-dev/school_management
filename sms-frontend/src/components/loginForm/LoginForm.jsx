import React, { useState } from 'react'
import './loginForm.css';

const LoginForm = () => {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [message, setMessage]= useState("");
  let handleSubmit = async (e)=> {
    e.preventDefault();
    try{
      let res = await fetch("http://localhost:8080/login",{
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {'Content-Type': 'application/json', 
      'ACCEPT': 'application/json'},
        mode: 'no-cors'
      });
      let resJSON = await res.json;
      if(res.status===200){
        console.log(resJSON);
        setEmail("");
        setPassword("");
        setMessage("Token Received Successfully");
      }
      else{
        setMessage("Invalid Credentials");
      }
    }
    catch(err){
      console.log(err);
    }
  };
  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit}>
        <fieldset className='login-form-fieldset'>
          <div className='login-form-legend'><b>User Login</b></div>
          <div className='login-form-label'>
            <label for="email">Email Id</label><br></br>
            <input type="email" id="email" name="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} required></input><br></br>
          </div>
          <div className='login-form-label'>
            <label for="password">Password</label><br></br>
            <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required></input>
          </div>
          <div className='login-form-buttons'>
            <input type="reset" value="RESET"></input>
            <input type="submit" value="LOGIN"></input>
          </div>
          <div className='login-form-message'>
            {message ? <p>{message}</p> : null}
          </div>
          <div className='login-form-register'>
            <p>New User? <a href='#register'>Register here</a></p>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default LoginForm