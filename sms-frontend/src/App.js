import React from 'react';
import './App.css';
import { Dashboard, Homepage, AboutUs, ContactUs, Teachers, Classes, ProfilePage, Attendance, Result} from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Teachers" element={<Teachers />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path='/Profile' element={<ProfilePage />} />
        <Route path='/Attendance' element={<Attendance />} />
        <Route path='/Result' element={<Result />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App