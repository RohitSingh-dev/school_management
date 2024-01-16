import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faTwitter, faFacebookF, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-v1'>
              <div className='footer-top-v1-heading'>
                <p><h2>School Management System</h2></p>
              </div>
              <div className='footer-top-v1-address'>
                <p>Shahid Sukumar Banerjee Sarani, Bidhan
                  <br></br>Nagar, Durgapur-713212
                  <br></br>Tel.: 1234567890
                  <br></br>Email: xyz@gmail.com</p>
              </div>
            </div>
            <div className='footer-top-v2'>
              <div className='footer-top-v2-heading'>
                <p><h2>Important Links</h2></p>
              </div>
              <div className='footer-top-v2-links'>
                <ul>
                  <li><div><a href='/AboutUs'>About Us</a></div></li>
                  <li><div><a href='/Classes'>Classes</a></div></li>
                  <li><div><a href='/Teachers'>Teachers</a></div></li>
                  <li><div><a href='/ContactUs'>Contact Us</a></div></li>
                </ul>
              </div>
            </div>
            <div className='footer-top-v3'>
              <div className='footer-top-v3-heading'>
                <p><h2>Quick Login</h2></p>
              </div>
              <div className='footer-top-v3-input'>
                <input type='email' placeholder='Email*' />
                <br />
                <input type='password' placeholder='Password*' />
              </div>
              <div className='footer-top-v3-button'>
                <button onClick=''>Login</button>
              </div>
            </div>
        </div>
        <div className='footer-bottom'>
            <div className='footer-bottom-left'>
              <p>Copyright 2023. All rights reserved.!</p>
            </div>
            <div className='footer-bottom-right'>
              <div><a href='https://www.facebook.com' target='_blank' rel="noreferrer"><FontAwesomeIcon className='footer-social-icon' icon={faFacebookF}/></a></div>
              <div><a href='https://www.instagram.com' target='_blank' rel="noreferrer"><FontAwesomeIcon className='footer-social-icon' icon={faInstagram}/></a></div>
              <div><a href='https://www.linkedin.com' target='_blank' rel="noreferrer"><FontAwesomeIcon className='footer-social-icon' icon={faLinkedinIn}/></a></div>
              <div><a href='https://www.youtube.com' target='_blank' rel="noreferrer"><FontAwesomeIcon className='footer-social-icon' icon={faYoutube}/></a></div>
              <div><a href='https://www.twitter.com' target='_blank' rel="noreferrer"><FontAwesomeIcon className='footer-social-icon' icon={faTwitter}/></a></div>
            </div>
        </div>
    </div>
  )
}

export default Footer