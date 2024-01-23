import React from 'react';
import './classes.css';
import {Navbar,Footer, ClassesInfo} from '..';
import { computerLab, library, physicsLab, chemistryLab, biologyLab, classroom } from '../../assets';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop:{
    breakpoint:{max:3000, min:1024},
    items:3,
    SlidesToSlide: 3
  },
  tablet:{
    breakpoint:{max:1024, min:464},
    items:2,
    SlidesToSlide: 2
  },
  mobile:{
    breakpoint:{max:464, min:0},
    items:1,
    SlidesToSlide: 1
  }
};
const Classes = () => {
  return (
    <div className='classes'>
        <div className='classes-top'><Navbar /></div>
        <div className='classes-middle'>
            <div className='classes-middle-top'>
                <h1>Classes</h1>
            </div>
            <div className='classes-middle-bottom'>
              <Carousel swipeable={true} draggable={false} ssr={true} infinite={true} autoPlay={true} autoPlaySpeed={3000} keyBoardControl={true} itemClass='classes-carousel-item' customTransition="all .5" transitionDuration={500} responsive={responsive} deviceType='desktop' containerClass="classes-carousel-container">
                <div><ClassesInfo image= {computerLab} className='Computer Lab' classData='High end computers for running cutting edge languages like Python,Ruby for data science enthusiasts.'></ClassesInfo></div>
                <div><ClassesInfo image= {library} className='Library' classData='High end computers for running cutting edge languages like Python,Ruby for data science enthusiasts.'></ClassesInfo></div>
                <div><ClassesInfo image= {physicsLab} className='Physics Lab' classData='High end computers for running cutting edge languages like Python,Ruby for data science enthusiasts.'></ClassesInfo></div>
                <div><ClassesInfo image= {chemistryLab} className='Chemistry Lab' classData='High end computers for running cutting edge languages like Python,Ruby for data science enthusiasts.'></ClassesInfo></div>
                <div><ClassesInfo image= {biologyLab} className='Biology Lab' classData='High end computers for running cutting edge languages like Python,Ruby for data science enthusiasts.'></ClassesInfo></div>
                <div><ClassesInfo image= {classroom} className='Classroom' classData='High end computers for running cutting edge languages like Python,Ruby for data science enthusiasts.'></ClassesInfo></div>
              </Carousel>
            </div>
        </div>
        <div className='classes-bottom'><Footer /></div>
    </div>
  )
}

export default Classes