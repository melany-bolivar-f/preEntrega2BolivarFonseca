import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';


const NavbarComponents =()=>{
    return(
        <Navbar expand="lg" className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand as={NavLink} to="/">Nike</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav variant="pills" activeKey="1" >
                        <Nav.Item>
                        <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
                        </Nav.Item>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/category/tenis" eventKey="4.1">Tenis</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item as={NavLink} to="/category/ropa"  eventKey="4.2">Ropa</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Nav>
                    <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponents;