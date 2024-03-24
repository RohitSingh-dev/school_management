import React, { useState } from 'react';
import './registerForm.css';
import logo from '../../assets/bcet_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const RegisterForm = () => {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [confirmpassword, setConfirmpassword]= useState("");
  const [role, setRole]= useState("STUDENT");
  const [message, setMessage]= useState("");
  let handleRegister = async (e)=> {
    console.log("inside handleRegister");
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
      <div className='registerForm-top'>
        <div className='registerForm-top-left'>
          <div className='registerForm-top-logo'>
            <div>
              <img src={logo} alt="bcet_logo"></img>
            </div>
          </div>
          <div className='registerForm-top-name'>
            <h3>School Management<br></br>System</h3>
          </div>
        </div>
        <div className='registerForm-top-right'>
          <div><a href='/'><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></a></div>
        </div>
      </div>
      <div className='registerForm-bottom'>
      <form onSubmit={handleRegister}>
        <fieldset className='registerForm-fieldset'>
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
            <p>Existing User? <a href='/'>Login</a></p>
          </div>
        </fieldset>
      </form>
      </div>
    </div>
  )
}

export default RegisterForm