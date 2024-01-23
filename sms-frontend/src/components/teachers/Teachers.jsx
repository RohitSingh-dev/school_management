import React from 'react';
import './teachers.css';
import {Navbar,Footer, TeacherInfoClasses} from '..';
import {teacher1, teacher2, teacher3, teacher4, teacher5, teacher6} from '../../assets';
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
const Teachers = () => {
  return (
    <div className='teachers'>
        <div className='teachers-top'><Navbar /></div>
        <div className='teachers-middle'>
          <div className='teachers-middle-top'>
            <h1>Our Faculties</h1>
          </div>
          <div className='teachers-middle-bottom'>
            <div className='teachers-middle-bottom-teacher'>
              <Carousel swipeable={true} draggable={false} showDots={true} ssr={true} infinite={true} autoPlay={true} autoPlaySpeed={3000} keyBoardControl={true} itemClass='carousel-item' customTransition="all .5" transitionDuration={500} responsive={responsive} deviceType='desktop' containerClass="carousel-container">
                <div><TeacherInfoClasses image={teacher1} teacherName='Mrs. Bidisha Roy' teacherDesignation='(Professor)' workExperience='5 Years' areaOfInterest='English, History' qualification='M.Tech'></TeacherInfoClasses></div>
                <div><TeacherInfoClasses image={teacher2} teacherName='Dr. Sujit Singh' teacherDesignation='(Professor)' workExperience='16 Years' areaOfInterest='Computer Science' qualification='PHD'></TeacherInfoClasses></div>
                <div><TeacherInfoClasses image={teacher3} teacherName='Mr. Prasenjit Maji' teacherDesignation='(Professor)' workExperience='12 Years' areaOfInterest='Science, GK' qualification='B.Ed'></TeacherInfoClasses></div>
                <div><TeacherInfoClasses image={teacher4} teacherName='Mr. Abdul Rahim' teacherDesignation='(Professor)' workExperience='7 Years' areaOfInterest='Science, GK' qualification='B.Ed'></TeacherInfoClasses></div>
                <div><TeacherInfoClasses image={teacher5} teacherName='Mr. S. Sharma' teacherDesignation='(Professor)' workExperience='12 Years' areaOfInterest='Science, GK' qualification='B.Ed'></TeacherInfoClasses></div>
                <div><TeacherInfoClasses image={teacher6} teacherName='Mr. R.K. Sharma' teacherDesignation='(Professor)' workExperience='12 Years' areaOfInterest='Science, GK' qualification='B.Ed'></TeacherInfoClasses></div>
              </Carousel>
            </div>
          </div>
        </div>
        <div className='teachers-bottom'><Footer /></div>
    </div>
  )
}

export default Teachers