import React from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Java.css'
const SubjectCard = () => {
  const { subject } = useParams();

  let subjectContent;

  switch (subject) {
    case 'java':
      subjectContent = (
        <div className='java-cards'>
    <Card style={{ width: '20rem' }} className='card'>
      <Card.Img variant="top" src="https://ritjaipur.in/wp-content/uploads/2024/02/Core-Java-Pro.jpg" />
      <Card.Body>
        <Card.Title>Learn Core Java</Card.Title>
        <Card.Text>
        It is the first step, to begin with, Java.Core Java covers the basic concepts of the Java programming language.
        </Card.Text>
        <Button variant="primary" href='https://www.javatpoint.com/what-is-core-java'>Go to Javapoint</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }} className='card'>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDik_RIk3JSQFzJMLiwuKWpMS0z-Q2VLHEbOSsEBVVig&s" />
      <Card.Body>
        <Card.Title>Learn Advance Java</Card.Title>
        <Card.Text>
        It is the next step after completing the Core Java.Advance Java covers the advanced topics and concepts of the Java programming language.
        </Card.Text>
        <Button variant="primary" href='https://www.javatpoint.com/what-is-core-java'>Go to Javapoint</Button>
      </Card.Body>
    </Card>
    </div>
      );
      break;
    case 'react':
      subjectContent = (
        <div>
          {/* Content for React subject */}
          <h1>React Course Details</h1>
          {/* Add your React course content here */}
        </div>
      );
      break;
    case 'springboot':
      subjectContent = (
        <div>
          {/* Content for Spring Boot subject */}
          <h1>Spring Boot Course Details</h1>
          {/* Add your Spring Boot course content here */}
        </div>
      );
      break;
    // Add more cases for other subjects if needed

    default:
      subjectContent = (
        <div>
          {/* Default content if subject doesn't match any case */}
          <h1>Unknown Course</h1>
          <p>No information available for this course.</p>
        </div>
      );
  }

  return <div>{subjectContent}</div>;
};

export default SubjectCard;
