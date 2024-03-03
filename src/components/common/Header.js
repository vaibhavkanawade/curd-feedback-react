import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container >
                <Navbar.Brand href="#home" bg="light">Feedback</Navbar.Brand>
                <Nav className="me-auto" >
                    <Nav.Link href="/feedback">

                        <Link to={"/feedback"}>Feedback</Link>
                    </Nav.Link>

                    <Nav.Link >

                        <Link to={"/showdata"}>ShowData</Link>
                    </Nav.Link>

                </Nav>
            </Container>
        </Navbar>

    )
}

export default Header