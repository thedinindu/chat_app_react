import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const cart = useSelector(state => state.cart)

    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand to='/' as={Link}>ConnectNow</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link to='/chats' as={Link}>Chats</Nav.Link>
                <Nav.Link to='/about' as={Link}>About</Nav.Link>
                <Nav.Link to='/products' as={Link}>Products</Nav.Link>
                <div className='d-flex justify-content-end' >
                    <Nav.Link to='/cart' as={Link} >Cart: {cart.length}</Nav.Link>
                </div>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar
