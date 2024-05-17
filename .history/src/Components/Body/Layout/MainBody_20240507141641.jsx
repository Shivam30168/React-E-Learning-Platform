import React from 'react';
import { Link } from 'react-router-dom';
import './MainBody.css';
import Button from 'react-bootstrap/Button';

const MainBody = () => {
  return (
    <div>
      <h1>Welcome to Our Training Courses!</h1>
      <h2>Popular Courses</h2>
      <ul className="button-list">
        <li>
          <Link to="/java"><Button variant="outline-primary">Java Training</Button></Link>
        </li>
        <li>
          <Link to="/springboot"><Button variant="outline-primary">Spring Boot Training</Button></Link>
        </li>
        <li>
          <Link to="/reactcourse"><Button variant="outline-primary">React Training</Button></Link>
        </li>
        <li>
          <Link to="/othercourse"><Button variant="outline-primary">Other Training Courses</Button></Link>
        </li>
      </ul>
    </div>
  );
};

export default MainBody;
