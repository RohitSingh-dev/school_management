import React from 'react';
import './aboutUs.css';
import {Navbar , Footer} from '../../components';
import aboutUs_1 from '../../assets/aboutUs_1.jpg';
import aboutUs_2 from '../../assets/aboutUs_2.jpg';

const AboutUs = () => {
  return (
    <div className='aboutUs'>
        <div className='aboutUs-top'><Navbar></Navbar></div>
        <div className='aboutUs-middle'>
            <div className='aboutUs-middle-top'>
                <h1>About Us</h1><br />
                <p>Mission & Vision</p>
            </div>
            <div className='aboutUs-middle-bottom'>
                <div className='aboutUs-middle-bottom-c1'>
                    <div className='aboutUs-middle-bottom-c1-left'>
                        <h2>VISION</h2><br />
                        <p>To transform the institute into a global centre of learning through synergic <br />application of creativity, innovation and discipline.</p>
                    </div>
                    <div className='aboutUs-middle-bottom-c1-right'>
                        <img src={aboutUs_2} alt='Vision'></img>
                    </div>
                </div>
                <div className='aboutUs-middle-bottom-c2'>
                    <div className='aboutUs-middle-bottom-c2-left'>
                        <img src={aboutUs_1} alt='Mission'></img>
                    </div>
                    <div className='aboutUs-middle-bottom-c2-right'>
                        <h2>MISSION</h2>
                            <p> ✅Create ideal ambience for learning and growth<br />
                                ✅ Help students inherit value-systems, be creative and agile thinkers.<br />
                                ✅ Establish discipline, Value-added education and Training & Placement as three core <br />values.<br />
                                ✅ Building capabilities among students to lead form the front as also be a team player.<br />
                                ✅ Develop a symbiotic relationship between the institution, society and the community, <br />for mutual betterment.<br />
                                ✅ Expand the Vistas of higher learning in Technology and Management Fields, including <br />Post-Graduate Studies and Research.<br />
                                ✅ Encourage global vision and integration with International Best Practices for Local, <br />Regional and National Development.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='aboutUs-bottom'><Footer></Footer></div>
    </div>
  )
}

export default AboutUs