import React from 'react';
import {  useNavigate } from 'react-router-dom';
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
          <Button variant="outline-primary" onClick={()=>nav('/java')}>Java Training Course</Button>
        </li>
        <li>
         <Button variant="outline-primary" onClick={()=>nav('/reactcourse')}>React Training Course</Button>
        </li>
        
      </ul>
    </div>
  );
};

export default MainBody;
