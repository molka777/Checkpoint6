import React from "react";
import logo from "../res/logo-footer.png";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
const Menu = () => {
    return (
        <Navbar style={{ zIndex: '1000', position: 'relative' }} expand="lg">
            <Navbar.Brand href="#home"><img style={{ height: '107px', width: '251px', marginLeft: '-1%' }} src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style={{ marginLeft: '4%', marginTop: '2.5%' }} id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link style={{
                        color: 'white',
                        fontWeight: 'bolder',
                        textDecoration: 'underline'
                    }} href="#home">Accueil</Nav.Link>
                    <Nav.Link style={{ color: 'white', fontWeight: '400' }} href="#link">Qui sommes-nous?</Nav.Link>
                    <Nav.Link style={{ color: 'white', fontWeight: '400' }} href="#link">Évènements</Nav.Link>
                    <Nav.Link style={{ color: 'white', fontWeight: '400' }} href="#link">Sorties privées</Nav.Link>
                    <Nav.Link style={{ color: 'white', fontWeight: '400' }} href="#link">Team building</Nav.Link>
                    <Nav.Link style={{ color: 'white', fontWeight: '400' }} href="#link">Règlement</Nav.Link>
                    <Nav.Link style={{ color: 'white', fontWeight: '400' }} href="#link">Contact</Nav.Link>

                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menu;