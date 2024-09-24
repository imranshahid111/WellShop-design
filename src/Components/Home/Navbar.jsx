import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NAVBAR() {
  return (
    <Navbar expand="lg" className="nav-bg ">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className=''/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex flex-wrap w-100 align-items-center">
            <NavDropdown title={<span className="text-white">CATEGORIES</span>} id="basic-nav-dropdown" className='w-25 category'>
              <NavDropdown.Item href="#action/3.1" className="mb-2">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="mb-2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="mb-2">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link className='fs-6 me-2 text-white' href="#home">CUSTOM ORDER</Nav.Link>
            <Nav.Link className='fs-6 me-2 text-white' href="#link">IN STOCK</Nav.Link>
            <Nav.Link className='fs-6 me-2 text-white' href="#link">BRANDS</Nav.Link>
            <Nav.Link className='fs-6 me-2 text-white' href="#link">BLOG</Nav.Link>
            <Nav.Link className='fs-6 me-2 text-white' href="#link">CONTACT US</Nav.Link>
            <Nav.Link className='fs-6 me-2 text-white' href="#link">ABOUT US</Nav.Link>

            <NavDropdown title={<span className="text-white">MY ACCOUNT</span>} id="basic-nav-dropdown">
  <NavDropdown.Item href="#action/3.1" className=" mb-2">LOGIN</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.2" className=" mb-2">SIGNUP</NavDropdown.Item>
</NavDropdown>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NAVBAR;
