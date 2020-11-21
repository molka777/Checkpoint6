import React from "react";
import logo from "../res/logo.png";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Menu4 = () => {
    return (
        <Navbar className=" bg-light" style={{ zIndex: '1000', position: 'sticky' }} expand="lg">
            <Navbar.Brand>
                <HashLink
                    to="/" style={{ color: '#093219', fontSize: '17px', textDecoration: 'none' }}
                    scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })}
                >
                    <img style={{ height: '107px', width: '251px', marginLeft: '-1%' }} src={logo} alt="logo" />
                </HashLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style={{ marginLeft: '4%', marginTop: '2.5%' }} id="basic-navbar-nav">
                <Nav className="mr-auto" style={{ letterSpacing: '1px' }}>
                    <Link to="/" style={{ color: '#093219', fontWeight: '600', width: '72px' }}>Accueil</Link>
                    <Link to="/qsn" style={{
                        color: '#093219', fontWeight: '600',
                        width: '170px'
                    }} >Qui sommes-nous?</Link>
                    <Link to="/event" style={{
                        color: '#093219', fontWeight: '600',
                        width: '110px'
                    }}>Évènements</Link>
                    <Link to="/sortie" style={{
                        width: '132px', color: '#093219',
                        fontWeight: 'bolder',
                        textDecoration: 'underline',
                    }}>Sorties privées</Link>
                    <Link to="/teamBuilding" style={{ color: '#093219', fontWeight: '600', width: '125px' }}>Team building</Link>
                    <Link to="/reglement" style={{ color: '#093219', fontWeight: '600', width: '101px' }}>Règlement</Link>
                    <Link to="/contact" style={{ color: '#093219', fontWeight: '600' }}>Contact</Link>

                </Nav>

            </Navbar.Collapse>

        </Navbar>
    );
};

export default Menu4;