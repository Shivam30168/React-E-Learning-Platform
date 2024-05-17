import React from 'react';
import { Link } from 'react-router-dom';
import './MainBody.css';
import Button from 'react-bootstrap/Button';

const MainBody = () => {
  return (
    <div>
      <h1 className='mainbody-heading'>Welcome to Our Training Courses!</h1>
      <ul className="mainbody-button-list">
      <h2 className='mainbody-heading2'>Popular Courses</h2>
        <li>
          <Link to="/java"><Button variant="outline-primary">Java Training Course</Button></Link>
        </li>
        <li>
          <Link to="/reactcourse"><Button variant="outline-primary">React Training Course</Button></Link>
        </li>
        
      </ul>
    </div>
  );
};

export default MainBody;
