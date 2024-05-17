import React from 'react';
import { Link } from 'react-router-dom';
import './MainBody.css'
import Button from 'react-bootstrap/Button';
const MainBody = () => {
  return (
    <div>
      <h1>Welcome to Our Training Courses!</h1>
      <h2>Popular Courses</h2>
      <ul>
        <li>
          <Link to="/java"><Button variant="outline-primary">Primary</Button></Link>
        </li>
        <li>
          <Link to="/springboot">Spring Boot Training</Link>
        </li>
        <li>
          <Link to="/reactcourse">React Training</Link>
        </li>
        <li>
          <Link to="/othercourse">Other Training Courses</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default MainBody;