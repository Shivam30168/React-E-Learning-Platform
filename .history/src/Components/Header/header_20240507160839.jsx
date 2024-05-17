import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
import SideBar from '../SideBar';
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container className='website-header'>
        <SideBar/>
        <Navbar.Brand as={Link} to="/">My Website</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link> 
            <Nav.Link as={Link} to="/about">About</Nav.Link> 
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/java">Java</NavDropdown.Item> 
              <NavDropdown.Item as={Link} to="/springboot">Spring Boot</NavDropdown.Item> 
              <NavDropdown.Item as={Link} to="/reactcourse">React</NavDropdown.Item> 
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/othercourse">Other Courses</NavDropdown.Item> 
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
