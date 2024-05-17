import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Java() {
  return (
    <div className='java-cards'>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Learn Core Java</Card.Title>
        <Card.Text>
        It is the first step, to begin with, Java.Core Java covers the basic concepts of the Java programming language.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Learn Advance Java</Card.Title>
        <Card.Text>
        It is the next step after completing the Core Java.Advance Java covers the advanced topics and concepts of the Java programming language.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Java;