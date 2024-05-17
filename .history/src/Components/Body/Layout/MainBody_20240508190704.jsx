import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MainBody.css';
import Button from 'react-bootstrap/Button';

const MainBody = () => {
  const nav=useNavigate();
  return (
    <div>
      <h1 className='mainbody-heading1'>Welcome to Our Training Courses!</h1>
      <h2 className='mainbody-heading2'>Popular Courses:</h2>
      <ul className="mainbody-button-list">
        <li>
          {/* <Link to="/java"><Button variant="outline-primary">Java Training Course</Button></Link> */}
          <Button variant="outline-primary" onClick={()=>nav('/java')}>Java Training Course</Button>
        </li>
        <li>
          <Link to="/reactcourse"><Button variant="outline-primary">React Training Course</Button></Link>
        </li>
        
      </ul>
    </div>
  );
};

export default MainBody;
