import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const OtherCourses = () => {
  return (
    <div className='othercourses-card'>
      <Card style={{ width: '20rem' }} className='card'>
      <Card.Img variant="top" src="data:image/png;base64,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" />
      <Card.Body>
        <Card.Title>Learn Bootstrap</Card.Title>
        <Card.Text>
        Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.
        </Card.Text>
        <Button variant="primary" href='https://getbootstrap.com/'>Go to Bootstrap</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }} className='card'>
      <Card.Img variant="top" src="data:image/png;base64,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" />
      <Card.Body>
        <Card.Title>Learn React Bootstrap</Card.Title>
        <Card.Text>
        React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component.
        </Card.Text>
        <Button variant="primary" href='https://react-bootstrap.netlify.app/'>Go to React Bootstrap</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default OtherCourses
