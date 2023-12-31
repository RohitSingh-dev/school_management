import React from 'react'
import './loginForm.css';

const LoginForm = () => {
  return (
    <div className='login-form'>
      <form action='' target="_self" method="post">
        <fieldset className='login-form-fieldset'>
          <div className='login-form-legend'><b>User Login</b></div>
          <div className='login-form-label'>
            <label for="email">Email Id</label><br></br>
            <input type="email" id="email" name="email" placeholder="Enter email" required></input><br></br>
          </div>
          <div className='login-form-label'>
            <label for="password">Password</label><br></br>
            <input type="password" id="password" name="password" placeholder="Password" required></input>
          </div>
          <div className='login-form-buttons'>
            <input type="reset" value="RESET"></input>
            <input type="submit" value="LOGIN"></input>
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