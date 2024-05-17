import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      ☰
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
        <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;