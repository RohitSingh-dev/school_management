import React from 'react';
import './registerForm.css';

const RegisterForm = () => {
  return (
    <div className='registerForm'>
      <form action='' target="_self" method="post">
        <fieldset className='registerForm-fieldset'>
          <div className='registerForm-legend'><b>Register Here</b></div>
          <div className='registerForm-label'>
            <label for="email">Email Id</label><br></br>
            <input type="email" id="email" name="email" placeholder="Enter email" required></input><br></br>
          </div>
          <div className='registerForm-label'>
            <label for="password">Password</label><br></br>
            <input type="password" id="password" name="password" placeholder="Password" required></input>
          </div>
          <div className='registerForm-label'>
            <label for="confirmpassword">Confirm Password</label><br></br>
            <input type="password" id="confirmpassword" name="Confirm Password" placeholder="Confirm Password" required></input>
          </div>
          <div className='registerForm-dropdown'>
            <label for="role">Choose a role: </label>
              <select name="role" id="role">
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Parent">Parent</option>
              </select>
          </div>
          <div className='registerForm-buttons'>
            <input type="reset" value="RESET"></input>
            <input type="submit" value="REGISTER"></input>
          </div>
          <div className='registerForm-login'>
            <p>Existing User? <a href='#Login'>Login</a></p>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default RegisterForm