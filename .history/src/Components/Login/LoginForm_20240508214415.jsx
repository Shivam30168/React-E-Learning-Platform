import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
function LoginForm() {
  return (
    <Form className='loginform-box' action='/home' method='get'>
      <Form.Group as={Col} xs={12} md={10} className="mb-3 ms-4 mt-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group as={Col} xs={12} md={10} className="mb-3 ms-4 mt-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 ms-4 mt-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className='mt-4 ms-4'>
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;