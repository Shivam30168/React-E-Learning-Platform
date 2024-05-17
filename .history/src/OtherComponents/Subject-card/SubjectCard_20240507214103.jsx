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
        <div className='react-cards'>
      <Card style={{ width: '20rem' }} className='card'>
      <Card.Img variant="top" src="data:image/png;base64,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" />
      <Card.Body>
        <Card.Title>Learn React</Card.Title>
        <Card.Text>
        React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.
        </Card.Text>
        <Button variant="primary" href='https://react.dev/'>Go to React</Button>
      </Card.Body>
    </Card>
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
