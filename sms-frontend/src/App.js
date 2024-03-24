import React from 'react';
import './App.css';
import { Dashboard, Homepage, AboutUs, ContactUs, Teachers, Classes, ProfilePage, StudentAttendance, StudentResult, TeacherAttendance, TeacherResult, RegisterForm, ProfilePageEdit} from './components';
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
        <Route path='/TeacherAttendance' element={<TeacherAttendance />} />
        <Route path='/Attendance/:id' element={<StudentAttendance />} />
        <Route path='/TeacherResult' element={<TeacherResult />} />
        <Route path='/Result/:id' element={<StudentResult />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/Profile/edit' element={<ProfilePageEdit />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App