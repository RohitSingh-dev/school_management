import React from 'react';
import './homepage.css';
import { Footer, Navbar } from '..';

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='homepage-navbar'>
            <Navbar></Navbar>
        </div>
        <div className='homepage-middle'>
            <div className='homepage-middle-c1'>
                <h4>WELCOME ON OUR SITE</h4>
            </div>
            <div className='homepage-middle-c2'>
                <h1>Primary School</h1>
            </div>
            <div className='homepage-middle-c3'>
                <p>Engaging all students in partnership with family and community<br></br>to become informed, compassionate, global citizens.</p>
            </div>
            <div className='homepage-middle-c4'>
                <button><a href='#learnmore'>Learn more</a></button>
            </div>
        </div>
        <div className='homepage-footer'>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default Homepage