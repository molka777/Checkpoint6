import React from "react";
import logo from "../res/logo-footer.png";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
const Menu = (props) => {
    return (
        <Navbar style={{ zIndex: '1000', position: 'relative' }} expand="lg">
            <Navbar.Brand href="#home"><img style={{ height: '107px', width: '251px', marginLeft: '-1%' }} src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style={{ marginLeft: '4%', marginTop: '2.5%' }} id="basic-navbar-nav">
                <Nav className="mr-auto" style={{ letterSpacing: '1px' }}>
                    <Link style={{
                        color: 'white',
                        fontWeight: 'bolder',
                        textDecoration: 'underline',
                        width: '72px'
                    }} to="/">Accueil</Link>
                    <Link to="/qsn" style={{ color: 'white', fontWeight: '600', width: '170px' }}>Qui sommes-nous?</Link>
                    <Link to="/event" style={{ color: 'white', fontWeight: '600', width: '110px' }}>Évènements</Link>
                    <Link to="/sortie" style={{ color: 'white', fontWeight: '600', width: '132px' }}>Sorties privées</Link>
                    <Link to="/teamBuilding" style={{ color: 'white', fontWeight: '600', width: '125px' }}>Team building</Link>
                    <Link to="/reglement" style={{ color: 'white', fontWeight: '600', width: '101px' }}>Règlement</Link>
                    <Link to="/contact" style={{ color: 'white', fontWeight: '600' }}>Contact</Link>

                </Nav>

            </Navbar.Collapse>

        </Navbar>
    );
};

export default Menu;