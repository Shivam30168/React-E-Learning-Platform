import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Java.css'
function Java() {
  return (
    <div className='java-cards'>
    <Card style={{ width: '20rem' }} className='card'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Learn Core Java</Card.Title>
        <Card.Text>
        It is the first step, to begin with, Java.Core Java covers the basic concepts of the Java programming language.
        </Card.Text>
        <Button variant="primary" href='https://www.javatpoint.com/what-is-core-java'>Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }} className='card'>
      <Card.Img variant="top" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fritjaipur.in%2Fbest-institute-for-core-java-course-training-in-jaipur%2F&psig=AOvVaw1pmRaa7j1Dg7USkqoXPm2m&ust=1715101413846000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjbmb3lwPmFAxXCbmwGHWkACUkQjRx6BAgAEBQ" />
      <Card.Body>
        <Card.Title>Learn Advance Java</Card.Title>
        <Card.Text>
        It is the next step after completing the Core Java.Advance Java covers the advanced topics and concepts of the Java programming language.
        </Card.Text>
        <Button variant="primary" href='https://www.javatpoint.com/what-is-core-java'>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Java;