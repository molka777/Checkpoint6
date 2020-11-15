import React, { useState } from 'react';
import '../css/sortie.css';
import photo from '.././res/sortie privee.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu2 from '../Navbar/Menu2';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

const Sortie = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>

        <Menu2 />
        <h1 id="about" className="title">LES SORTIES PRIVÉES</h1>
        <div>
            <img width="100%" src={photo} alt="sortie" />
        </div>
        <div className="container">
            <div className="jumbotron p-4 p-md-5 text-white rounded bg-green">
                <div className="px-0">
                    <h1 className="display-4">CRÉEZ VOTRE PROPRE AMBIANCE</h1>
                    <p className="lead my-3">Créez votre
                    propre sortie, faite sur mesure en fonction des
                        besoins et des envies de votre groupe. </p>
                </div>
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
    </>);

};

export default Sortie;