import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function SideBar() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const offcanvasStyle = {
    textAlign: 'center',
    fontSize: 'large',
    width: '250px',
    fontWeight: 'bold',
    gap: '10px',
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Assuming you have a ref to your email input, you can get its value like this
    const enteredEmail = event.target.elements.email.value;
    setEmail(enteredEmail);
    setSubmitted(true);
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        ☰
      </Button>

      <Offcanvas show={show} onHide={handleClose} style={offcanvasStyle}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Website</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {submitted ? (
            <p>Email: {email}</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="email" name="email" placeholder="Enter email" required />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          )}
          <hr />
          <Nav.Link as={Link} to={"/home"} className='Links'>Home</Nav.Link><hr/>
          <Nav.Link as={Link} to={"/about"}className='Links'>About</Nav.Link><hr/>
          <Nav.Link as={Link} to={"/privacy-policy"}className='Links'>Privacy Policy</Nav.Link><hr/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
