import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/logo.png'

function NavigationBar() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="text-[white] bg-[#0000] px-4 py-10" style={{padding: '50px'}}>
        <Container>
            <Navbar.Brand href="/dashboard" className='font-bold' style={{fontSize:'28px'}}><img width={35} src={Logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                <Nav className="ms-auto text-[white]">
                    <Nav.Link style={{paddingRight:'100px', color:'white', fontSize:'18px'}} href="#home">Bio</Nav.Link>
                    <NavDropdown title="Artworks" className='customDropdown' style={{paddingRight:'100px', fontSize:'18px'}} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Art Sculpture</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Art Product</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Art Facade</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Art Building</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link style={{paddingRight:'50px', color:'white', fontSize:'18px'}} href="#link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

  );
}

export default NavigationBar;