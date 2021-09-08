import {Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap';
function NavBar() {
    return (
        <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/"><b>Joseph Deguzman</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="https://www.linkedin.com/in/joseph-deguzman/">LinkedIn</Nav.Link>
                <Nav.Link href="https://github.com/jdeguzman1231">GitHub</Nav.Link>
                <Nav.Link href="https://github.com/jdeguzman1231">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
}

export default NavBar;