import React from 'react';
import './submitButton.css';

const SubmitButton = () => {
  return (
    <div className='submitButton'>
        <button className='submitButton-cancel' onClick=''>Cancel</button>
        <button className='submitButton-submit' onClick=''>Submit</button>
    </div>
  )
}

export default SubmitButton