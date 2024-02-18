import React from 'react';
import './attendance.css';
import {WelcomeBar, Footer} from '../../components';

const Attendance = ({month}) => {
  return (
    <div className='attendance'>
      <div className='attendance-top'>
        <WelcomeBar />
      </div>
      <div className='attendance-heading'><h1>Attendance of {month="August"}</h1></div>
      <div className='attendance-middle'>
        <div className='attendance-middle-top'>
          <ul>
            <li className="prev">&#10094;</li>
            <li className="next">&#10095;</li>
            <li>{month}<br /><span>2021</span></li>
          </ul>
        </div>
        <div className='attendance-middle-bottom'>
          <ul className='attendance-middle-bottom-weekdays'>
            <li>Mo</li>
            <li>Tu</li>
            <li>We</li>
            <li>Th</li>
            <li>Fr</li>
            <li>Sa</li>
            <li>Su</li>
          </ul>

          <ul className='attendance-middle-bottom-days'>  
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li><span className="active">10</span></li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
          </ul>
        </div>
      </div>
      <div className='attendance-bottom'>
        <Footer />
      </div>
    </div>
  )
}

export default Attendance