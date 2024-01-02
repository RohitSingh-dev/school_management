import React from 'react';
import './App.css';
import { LoginForm, RegisterForm, Dashboard, Homepage} from './components';

const App = () => {
  return (
    <div>
      <LoginForm></LoginForm>
      <RegisterForm></RegisterForm>
      <Dashboard></Dashboard>
      <Homepage></Homepage>
    </div>
  )
}

export default App