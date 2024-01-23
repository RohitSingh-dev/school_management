import React, { useState } from 'react';
import './registerForm.css';

const RegisterForm = (props) => {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [confirmpassword, setConfirmpassword]= useState("");
  const [role, setRole]= useState("STUDENT");
  const [message, setMessage]= useState("");
  let handleSubmit = async(e)=> {
    console.log("inside handleSubmit");
    e.preventDefault();
    if(password===confirmpassword){
      console.log("password matched");
      try{
        let res= await fetch("/register",{
          method: "POST",
          body: new URLSearchParams({
            'username': email,
            'password': password,
            'role': role,
          }),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        });
        let resJSON= await res.text();
        if(res.status===201){
          console.log(resJSON);
          setEmail("");
          setPassword("");
          setRole("STUDENT");
          setMessage("User Registered successfuly");
        }
        else{
          setMessage("Invalid Input");
        }
      }
      catch(err){
        console.log(err);
      }
    }
    else{
      console.log("password not matched");
      setMessage("Password did not match")
    }
    
  };
  return (
    <div className='registerForm'>
      <form onSubmit={handleSubmit}>
        <div className='registerForm-background'>
        <fieldset className='registerForm-fieldset'>
          <div className='registerForm-close-btn' onClick={props.toggle}>&times;</div>
          <div className='registerForm-legend'><b>Register Here</b></div>
          <div className='registerForm-label'>
            <label for="email">Email Id</label><br></br>
            <input type="email" id="email" name="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} required /><br></br>
          </div>
          <div className='registerForm-label'>
            <label for="password">Password</label><br></br>
            <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required />
          </div>
          <div className='registerForm-label'>
            <label for="confirmpassword">Confirm Password</label><br></br>
            <input type="password" id="confirmpassword" name="Confirm Password" placeholder="Confirm Password" value={confirmpassword} onChange={(e)=> setConfirmpassword(e.target.value)} required />
          </div>
          <div className='registerForm-dropdown'>
            <label for="role">Choose a role: </label>
              <select name="role" id="role" value={role} onChange={(e)=> setRole(e.target.value)}>
                <option value="STUDENT">STUDENT</option>
                <option value="TEACHER">TEACHER</option>
                <option value="PARENT">PARENT</option>
              </select>
          </div>
          <div className='registerForm-buttons'>
            <input type="reset" value="RESET"></input>
            <input className='registerForm-buttons-submit' type="submit" value="REGISTER"></input>
          </div>
          <div className='registerForm-message'>
            {message ? <p id='message'>{message}</p> : null}
          </div>
          <div className='registerForm-login'>
            <p>Existing User? <span onClick={props.toggle}>Login</span></p>
          </div>
        </fieldset>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm