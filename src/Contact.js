import React from 'react';
import './css/contact.css';



import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu2 from './Navbar/Menu2';


const Contact = () => {
    return (
        <>
            <Menu2 />
            <div className="bg-light">
                <p className="intro" >
                    <br />
       PARTEZ À L'AVENTURE AVEC TUNISIAN CAMPERS
        <br />
                    <br />

                </p>

            </div>
            <span className="span_intro" style={{ marginLeft: '42%' }}>Comment rejoindre</span>

            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <button type="button" className="btn btn-light button">
                    <Link style={{ color: '#093219', fontSize: 'x-large', textDecoration: 'none' }} to="/event" target="_blank">
                        NOS ÉVÉNEMENTS </Link>
                </button>
                <button type="button" className="btn btn-light button">
                    <Link style={{ color: '#093219', fontSize: 'x-large', textDecoration: 'none' }} to="/sortie"
                        target="_blank">
                        NOS SORTIES PRIVÉES</Link>
                </button>
                <button type="button" className="btn btn-light button">
                    <Link style={{ color: '#093219', fontSize: 'x-large', textDecoration: 'none' }} to="/teamBuilding"
                        target="_blank">
                        NOS TEAM BUILDING</Link>
                </button>

            </div>
            <div className="bg-light">
                <p className="intro" >
                    <br />
      AIDEZ-NOUS À NOUS AMÉLIRER
        <br />
                    <br />

                </p>

            </div><iframe style={{ marginLeft: '13%' }} src="https://docs.google.com/forms/d/e/1FAIpQLSd2DV5fhC_OxRwfN6nRv0C0Hcr-Bwg2xT5gA7c1au270AS9qw/viewform?embedded=true" width="1000" height="808" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
        </>
    );
};
export default Contact;