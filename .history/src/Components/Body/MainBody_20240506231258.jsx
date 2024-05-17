import React from 'react';
import { Link } from 'react-router-dom';

const MainBody = () => {
  return (
    <div>
      <h1>Welcome to Our Training Courses!</h1>
      <h2>Popular Courses</h2>
      <ul>
        <li>
          <Link to="/java">Java Training</Link>
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
