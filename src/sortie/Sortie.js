import React, { useState } from 'react';
import '../css/sortie.css';
import photo from '.././res/sortie privee.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu4 from '../Navbar/Menu4';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import moment1 from '.././res/SKZ027494K.jpg';
import moment2 from '.././res/SKZ032804K.jpg';
import moment3 from '.././res/SKZ03326-HDR4K.jpg';
import moment4 from '.././res/SKZ033434K.jpg';
import moment5 from '.././res/SKZ033734K.jpg';
import moment6 from '.././res/SKZ035154K.jpg';
import moment7 from '.././res/SKZ035564K.jpg';
import Carousel from 'react-bootstrap/Carousel';
const Sortie = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>

        <Menu4 />
        <h1 id="about" className="title" style={{ margin: '1%' }}>LES SORTIES PRIVÉES</h1>
        <div>
            <img width="100%" src={photo} alt="sortie" />
        </div>
        <div className="container">
            <div className="jumbotron p-4 p-md-5 text-white rounded bg-green" style={{
                width: '121%',
                marginLeft: '-11%'
            }}>
                <div className="px-0">
                    <h1 className="display-4" style={{ color: 'white' }}>CRÉEZ VOTRE PROPRE AMBIANCE</h1>
                    <p className="lead my-3">Créez votre
                    propre sortie, faite sur mesure en fonction des
                        besoins et des envies de votre groupe. </p>

                </div>
                <Accordion defaultActiveKey="0">
                    <Card style={{ border: '0px solid rgb(0 0 0 / 0%)' }}>
                        <Card.Header style={{ backgroundColor: 'rgb(0 43 17)' }}>
                            <Accordion.Toggle as={Button} style={{
                                color: '#093219',

                                width: '19%',
                                marginLeft: '-2%',
                                backgroundColor: 'rgba(221, 221, 221, 0.794)'
                            }} variant="link" eventKey="1">
                                En savoir plus
      </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body style={{ backgroundColor: '#002b11', color: 'white' }}>Selon s’il s’agit de retrouvailles familiales, d’une escapade en couple,  entre amis ou même seul, vos choix diffèreront et orienteront l’aventure vers des rêves aux couleurs et aux énergies particulières. </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>

        </div>
        <div className="title3" id="reserver" style={{
            fontSize: 'xx-large',
            fontWeight: 'bold'
        }}>
            COMMENT RÉSERVER UNE SORTIE PRIVÉE
        </div>
        <button type="button" onClick={handleShow} style={{
            color: '#093219',
            padding: '3%',
            width: '52%',
            marginLeft: '24%',
            backgroundColor: 'rgba(221, 221, 221, 0.794)'
        }} className="btn btn-light">
            <p style={{
                color: '#093219', fontSize: 'x-large', textDecoration: 'none', letterSpacing: '3px'
            }}>Consultez nos offres de sorties privées</p>
        </button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Veuillez entrez vos coordonnées</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="text" placeholder="Entrez votre nom et prénom" />
                <br />
                <br />
                <input type="email" placeholder="Entrez votre e-mail" />
                <br />
                <br />
                <input type="number" placeholder="Entrez votre age" />
                <br />  <br />
                <input type="checkbox" id="scales" name="scales"
                />

                <label for="scales">Homme</label>
                <input type="checkbox" id="horns" name="horns" />
                <label for="horns">Femme</label>



            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Annuler
          </Button>
                <Button variant="primary" onClick={handleClose}>
                    Voir catalogue
          </Button>
            </Modal.Footer>
        </Modal>
        <div className="title3" style={{ textTransform: 'unset', fontSize: 'x-large' }}>
            2. Remplir le formulaire ci-dessous
        </div>
        <iframe style={{ marginTop: '6%', marginLeft: '13%' }} src="https://docs.google.com/forms/d/e/1FAIpQLScFrN6ElddtmTa_-Ae1nuf-M_3M1hkOLR_YDvkxn32Vbu0_ww/viewform?embedded=true" width="1000" height="520" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>

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
        </Carousel> </>);

};

export default Sortie;