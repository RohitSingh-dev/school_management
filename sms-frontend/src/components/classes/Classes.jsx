import React from 'react';
import './classes.css';
import {Navbar,Footer, ClassesInfo} from '..';
import { computerLab, library, physicsLab } from '../../assets';

const Classes = () => {
  return (
    <div className='classes'>
        <div className='classes-top'><Navbar /></div>
        <div className='classes-middle'>
            <div className='classes-middle-top'>
                <h1>Classes</h1>
            </div>
            <div className='classes-middle-bottom'>
                <ClassesInfo image= {computerLab} className='Computer Lab' classData='High end computers for running cutting edge languages like Python,Ruby for data science enthusiasts.'></ClassesInfo>
            </div>
        </div>
        <div className='classes-bottom'><Footer /></div>
    </div>
  )
}

export default Classes