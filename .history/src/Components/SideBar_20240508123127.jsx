import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const offcanvasStyle = {
    textAlign: 'center',
    fontSize: 'large',
    width: '200px',
    fontWeight: 'bold',
    gap: '10px',
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
        <Offcanvas.Body><hr/>
        <Nav.Link as={Link} to={"/home"} className='Links'>Home</Nav.Link><hr/>
        <Nav.Link as={Link} to={"/about"}className='Links'>About</Nav.Link><hr/>
        <Nav.Link as={Link} to={"/login"}className='Links'>Login</Nav.Link><hr/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;