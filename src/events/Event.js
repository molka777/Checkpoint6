import React from 'react';
import '../css/event.css';
import event from '.././res/evenement (2).jpg';
import moment1 from '.././res/SKZ027494K.jpg';
import moment2 from '.././res/SKZ032804K.jpg';
import moment3 from '.././res/SKZ03326-HDR4K.jpg';
import moment4 from '.././res/SKZ033434K.jpg';
import moment5 from '.././res/SKZ033734K.jpg';
import moment6 from '.././res/SKZ035154K.jpg';
import moment7 from '.././res/SKZ035564K.jpg';
import Carousel from 'react-bootstrap/Carousel';



import 'bootstrap/dist/css/bootstrap.min.css';
import EventList from './EventList';
import Menu3 from '../Navbar/Menu3';

const Event = () => {

    return (<>
        <Menu3 />
        <h1 id="about" className="title" style={{ marginLeft: '5%', padding: '0%' }}>LES ÉVÈNEMENTS</h1>
        <img id="bloc" style={{ marginLeft: '10%' }} width="80%" src={event} alt="event" />
        <div className="album py-5 ">
            <div>
                <button type=" button" style={{
                    color: '#093219',
                    width: '20%',
                    marginLeft: '78%',
                    marginBottom: '3%'
                }}
                    className="btn btn-light">
                    <a style={{ color: '#093219', fontSize: '17px', textDecoration: 'none' }} href="#hist_event">
                        Historique des évènements/actions</a>
                </button>
            </div>
        </div>
        <div id="action">

            <div id="event" className="title3" style={{
                fontSize: 'xx-large',
                marginTop: '-6%'
            }}>
                COMMENT RÉSERVER UN ÉVÈNEMENT OU <br /> PARTICIPER À UNE ACTION
    </div>
            <button type="button" style={{
                color: '#093219',
                padding: '3%',
                width: '50%',
                marginLeft: '24%',
                backgroundColor: 'rgba(221, 221, 221, 0.794)'

            }} className="btn btn-light">
                <a style={{ color: '#093219', fontSize: 'x-large', textDecoration: 'none', letterSpacing: '3px' }}
                    href="https://www.facebook.com/Tunisiancampers.official/events/" target="_blank">
                    1. Accéder aux évènements/actions à <b>venir</b> sur notre page Facebook </a>
            </button>

            <div className="title3" style={{ textTransform: 'unset', fontSize: 'x-large' }}>
                2. Remplir le formulaire ci-dessous
    </div>
        </div>
        <iframe style={{ marginLeft: '14%', marginTop: '2%' }} src="https://docs.google.com/forms/d/e/1FAIpQLScSUikYkghllSJHeWUp4bzixIfATXSFHDxcQKGOaWEjBODuew/viewform?embedded=true" width="1000" height="520" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>

        <h3 id="hist_event" className="title3" style={{
            fontSize: 'xx-large',
            marginBottom: '-3%',
            marginTop: '6%',
            fontWeight: '400'
        }}> <b>Historique</b> des évènements organisés</h3>
        <EventList />
        <p className="title3" style={{ fontSize: 'large' }}>
            Savourez quelques moments de nos sorties
</p>


        <Carousel style={{
            margin: '18%',
            marginTop: "1%"
        }}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={moment1}
                    alt="First slide"
                />




            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={moment2}
                    alt="Third slide"
                />




            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={moment3}
                    alt="Third slide"
                />




            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={moment4}
                    alt="Third slide"
                />




            </Carousel.Item><Carousel.Item>
                <img
                    className="d-block w-100"
                    src={moment5}
                    alt="Third slide"
                />



            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={moment6}
                    alt="Third slide"
                />




            </Carousel.Item> <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={moment7}
                    alt="Third slide"
                />




            </Carousel.Item>
        </Carousel>
        <div>
            <button type=" button" style={{
                color: '#093219',
                width: '9%',
                marginLeft: '87%',
                marginTop: '-3%'
            }}
                className="btn btn-light">
                <a style={{ color: '#093219', fontSize: '17px', textDecoration: 'none' }} href="#bloc">
                    Aller en haut </a>
            </button>
        </div>

    </>);

};


export default Event;