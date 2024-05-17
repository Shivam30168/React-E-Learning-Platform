import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Java.css'
function Java() {
  return (
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
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
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
}

export default Java;