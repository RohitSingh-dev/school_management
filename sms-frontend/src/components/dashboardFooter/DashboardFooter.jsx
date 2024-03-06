import React from 'react';
import './dashboardFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faTwitter, faFacebookF, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

const DashboardFooter = () => {
  return (
    <div className='dashboardFooter'>
        <div className='dashboardFooter-left'>
            <p>Copyright 2023. All rights reserved.!</p>
        </div>
        <div className='dashboardFooter-right'>
            <div><a href='https://www.facebook.com' target='_blank' rel="noreferrer"><FontAwesomeIcon className='dashboardFooter-social-icon' icon={faFacebookF}/></a></div>
            <div><a href='https://www.instagram.com' target='_blank' rel="noreferrer"><FontAwesomeIcon className='dashboardFooter-social-icon' icon={faInstagram}/></a></div>
            <div><a href='https://www.linkedin.com' target='_blank' rel="noreferrer"><FontAwesomeIcon className='dashboardFooter-social-icon' icon={faLinkedinIn}/></a></div>
            <div><a href='https://www.youtube.com' target='_blank' rel="noreferrer"><FontAwesomeIcon className='dashboardFooter-social-icon' icon={faYoutube}/></a></div>
            <div><a href='https://www.twitter.com' target='_blank' rel="noreferrer"><FontAwesomeIcon className='dashboardFooter-social-icon' icon={faTwitter}/></a></div>
        </div>
    </div>
  )
}

export default DashboardFooter