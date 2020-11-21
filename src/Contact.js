import React from 'react';
import './css/contact.css';
import contact from './res/Nebeur, El Kef 5.jpg'

import mail from './res/mail.png'
import facebook from './res/facebook.png'
import instagram from './res/instagram.png'
import phone from './res/phone.png'
import destination from './res/destination (2).png'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu7 from './Navbar/Menu7';


const Contact = () => {
    return (
        <>
            <Menu7 />
            <div className="bg-light">
                <p className="intro" style={{ marginTop: '0%' }} >
                    <br />
       PARTEZ À L'AVENTURE AVEC TUNISIAN CAMPERS
        <br />
                    <br />

                </p>


            </div>
            <section style={{ display: 'flex' }}>
                <div>
                    <div style={{ marginLeft: '4%' }}>
                        <img className="shadow-sm mx-auto" src={contact} style={{
                            width: '54%',

                            margin: '3%', marginTop: '-4%'

                        }} />
                    </div>
                    <div style={{ marginLeft: '11%', margintop: '-2%' }}>
                        <a href="  https://www.facebook.com/Tunisiancampers.official" target="_blank">
                            <img style={{
                                width: '4%',
                                height: '3%',
                                marginRight: '2%'

                            }} src={facebook} alt="" /></a>
                        <a href="https://www.instagram.com/tunisiancampers/" target="_blank"><img style={{
                            width: '4%',
                            height: '3%',
                            marginRight: '2%'
                        }}
                            src={instagram} alt="" /></a>
                        <a href="mailto:contact@tunisiancampers.com" target="_blank"><img style={{
                            width: '4%',
                            height: '3%',

                        }} src={mail}
                            alt="" /></a>
                        <a>  <img style={{
                            width: '4%',
                            height: '3%',
                            marginRight: '2%'
                        }} src={destination} alt="destination" />
                        </a>
                        <a>
                            <img style={{
                                width: '4%',
                                height: '3%',

                                marginRight: '-1%',

                                marginLeft: '-1%'
                            }} src={phone} alt="phone" /> <b>+216 25885881</b>
                        </a>
                    </div>
                </div>
                <div>
                    <span className="span_intro" style={{
                        marginLeft: '-140%',
                        fontSize: 'large',
                        textTransform: 'uppercase',
                        fontWeight: '600'
                    }}>Comment rejoindre</span>

                    <div style={{ marginLeft: '-209%' }}>

                        <button type="button" style={{ width: '81%' }} className="btn btn-light button">
                            <Link style={{ color: '#093219', fontSize: 'x-large', textDecoration: 'none' }} to="/event" target="_blank">
                                NOS ÉVÉNEMENTS </Link>
                        </button>
                        <br /><br />
                        <button type="button" style={{ width: '40%' }} className="btn btn-light button">
                            <Link style={{ color: '#093219', fontSize: 'x-large', textDecoration: 'none' }} to="/sortie"
                                target="_blank">
                                NOS SORTIES PRIVÉES</Link>
                        </button>

                        <button type="button" style={{ width: '40%' }} className="btn btn-light button">
                            <Link style={{ color: '#093219', fontSize: 'x-large', textDecoration: 'none' }} to="/teamBuilding"
                                target="_blank">
                                NOS TEAM BUILDING</Link>
                        </button>

                    </div>
                </div>
            </section>
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