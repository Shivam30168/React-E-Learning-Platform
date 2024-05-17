import React from 'react';
import { Link } from 'react-router-dom';
import './MainBody.css';
import Button from 'react-bootstrap/Button';

const MainBody = () => {
  return (
    <div>
      <h1 className='mainbody-heading1'>Welcome to Our Training Courses!</h1>
      <h2 className='mainbody-heading2'>Popular Courses:</h2>
      <ul className="mainbody-button-list">
        <li>
          <Link to="/java"><Button variant="outline-primary">Java Training Course</Button></Link>
        </li>
        <li>
          <Link to="/reactcourse"><Button variant="outline-primary">React Training Course</Button></Link>
        </li>
        
      </ul>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur asperiores distinctio sapiente, laudantium illum. Qui dicta non ex quas at minima, nam doloribus. Saepe ipsa earum similique perferendis corrupti!
    </div>
  );
};

export default MainBody;
