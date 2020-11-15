import React from "react";
import './Footer.css';
import mail from './res/mail.png';
import facebook from './res/facebook.png';
import instagram from './res/instagram.png'
import logoFooter from './res/logofooter2.png'
import phone from './res/phone.png'
import destination from './res/destination.png'
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {

    return (
        <>
            <div style={{ backgroundColor: '#f8f9fa', width: '100%', height: '40%' }}>
                <img src={logoFooter} style={{ width: '100%', height: '60%', marginLeft: '-4%', marginTop: '-5%' }}
                    alt="logo" />
                <section style={{
                    margin: '1%',
                    marginLeft: '6%'
                }}>
                    <section style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div className="footer">
                            <a className="nav-link green" href="qsn.html">
                                Qui sommes-nous?

          </a>
                            <a className="nav-link green" href="event.html">
                                Nos événements

          </a>
                            <a className="nav-link green" href="teambuilding.html">
                                Nos team building

          </a>
                            <a className="nav-link green" href="sortie.html">
                                Nos sorties privées
          </a>
                            <a className="nav-link green" href="index.html#activity">
                                Nos activités
          </a>
                        </div>
                        <div className="footer" style={{ marginLeft: '5%' }}>
                            <a className="nav-link green" href="qsn.html#mission">
                                Notre mission
          </a>
                            <a className="nav-link green" href="qsn.html#objectif">
                                Nos objectifs
          </a>
                            <a className="nav-link green" href="reglement.html">
                                Notre réglement
          </a>
                            <a className="nav-link green" href="contact.html">
                                Nous rejoindre
          </a>
                            <a className="nav-link green" href="team.html">
                                Rejoindre l'équipe
          </a>
                        </div>

                        <div className="footer" style={{ width: '20%', lineHeight: '29px' }}>
                            <img style={{
                                width: '11',
                                height: '12%'
                            }} src={destination} alt="destination" />
          14 Avenue de Syrie étage 2, <br />
          Ain Zaghouan Nord, <br />
          Le Kram, 2046 Tunisie<br />
                            <img style={{ width: '9', height: '12%' }} src={phone} alt="phone" />+216 25885881
        </div>
                    </section>
                    <div style={{ display: 'flex', justifyContent: 'center', }}>
                        <div style={{ marginLeft: '44%' }}>
                            <a href="  https://www.facebook.com/Tunisiancampers.official" target="_blank">
                                <img className="icone" src={facebook} alt="" /></a>
                            <a href="https://www.instagram.com/tunisiancampers/" target="_blank"><img className="icone"
                                src={instagram} alt="" /></a>
                            <a href="mailto:contact@tunisiancampers.com" target="_blank"><img className="icone" src={mail}
                                alt="" /></a>
                        </div>
                    </div>
                    <p style={{
                        fontSize: 'small',
                        color: '#093219',
                        textAlign: 'center',
                        marginTop: '2%'
                    }}>
                        Copyright © 2020 - Tunisian Campers
      </p>
                </section>
            </div>
        </>
    );
};

export default Footer;