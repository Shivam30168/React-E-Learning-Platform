import React from 'react';
import './About.css'; // Import the CSS file
import BackButton from '../BackButton/BackButton';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Us</h2>
      <div style={{position:"fixed",right:"20px"}}><BackButton/></div>
      <p className="about-paragraph">Welcome to our website! We are a team of developers passionate about creating amazing web applications.</p>
      <p className="about-paragraph">Our mission is to provide high-quality software solutions to our clients and help them achieve their goals.</p>
      <p className="about-paragraph">Feel free to explore our website to learn more about us and our projects.</p>
    </div>
    
  );
};

export default About;
