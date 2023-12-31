import React from 'react';
import './App.css';
import {Header} from './containers';
import { LoginForm, Footer, WelcomeBar, RegisterForm, Dashboard } from './components';

const App = () => {
  return (
    <div>
      <Header></Header>
      <LoginForm></LoginForm>
      <WelcomeBar username='Rohit'></WelcomeBar>
      <RegisterForm></RegisterForm>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </div>
  )
}

export default App