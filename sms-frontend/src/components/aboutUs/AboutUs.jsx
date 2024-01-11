import React from 'react';
import './aboutUs.css';
import {Navbar , Footer} from '../../components';

const AboutUs = () => {
  return (
    <div className='aboutUs'>
        <div className='aboutUs-top'><Navbar></Navbar></div>
        <div className='aboutUs-middle'>
            <div className='aboutUs-middle-top'>
                <h1>About Us</h1>
            </div>
            <div className='aboutUs-middle-bottom'>
                <div className='aboutUs-middle-bottom-c1'>
                    <div className='aboutUs-middle-bottom-c1-left'></div>
                    <div className='aboutUs-middle-bottom-c1-right'></div>
                </div>
                <div className='aboutUs-middle-bottom-c2'>
                    <div className='aboutUs-middle-bottom-c2-left'></div>
                    <div className='aboutUs-middle-bottom-c2-right'></div>
                </div>
            </div>
        </div>
        <div className='aboutUs-bottom'><Footer></Footer></div>
    </div>
  )
}

export default AboutUs