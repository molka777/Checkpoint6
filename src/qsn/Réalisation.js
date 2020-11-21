
import React from 'react';
import '../css/qsn.css';
import real1 from '.././res/real2.jpeg';
import real2 from '.././res/real3.jpg';

import real3 from '.././res/IMG_9000.jpg';
import real4 from '.././res/real1 (1).jpg';
import real5 from '.././res/car2,2.jpg';
import alger1 from '.././res/alg1.PNG';
import alger2 from '.././res/alg2.PNG';
import alger3 from '.././res/alg3.PNG';
import alger4 from '.././res/alg4.PNG';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Réalisation = () => {
    return (<>
        <h1 className="title" style={{
            fontSize: '58px',
            marginLeft: '4%'
        }}>RÉALISATION</h1>

        <Carousel>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={real1}
                    alt="First slide"
                />
                <Carousel.Caption style={{ marginBottom: '5%', fontWeight: '600' }}>
                    <h3>Que des souvenirs</h3>
                    <p>Nous ne construisons pas d’habitations, tout le matériel installé lors de nos évènements est amovible. Ainsi, la seule trace de notre passage est celle des souvenirs qui flottent dans l’air et dans l’esprit des membres de notre communauté. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={real2}
                    alt="Third slide"
                />
                <Carousel.Caption style={{ marginBottom: '5%', fontWeight: '600' }}>
                    <h3> Initier aux gestes responsables</h3>
                    <p>Nous nettoyons ensemble l’espace du campement et les circuits de randonnée en ramassant les déchets que nous trouvons.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000} >
                <img
                    className="d-block w-100"
                    src={real3}
                    alt="Third slide"
                />
                <Carousel.Caption style={{ marginBottom: '5%', fontWeight: '600' }}>
                    <h3> L’exploration Tunisian Campers</h3>
                    <p>L’équipe Tunisian Campers rencontre et recrute personnellement ses nouveaux ambassadeurs lors des explorations. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000} >
                <img
                    className="d-block w-100"
                    src={real4}
                    alt="fourth slide"
                />
                <Carousel.Caption style={{ marginBottom: '5%', fontWeight: '600' }}>
                    <h3> Mobilisation de la Communauté</h3>
                    <p>Nous organisons des actions de forestation et de reforestation en collaboration avec les locaux et avec la Direction Générale des Forêts.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={real5}
                    alt="fifth slide"
                />
                <Carousel.Caption style={{ marginBottom: '5%', fontWeight: '600' }}>
                    <h3>Comprendre et faire comprendre</h3>
                    <p>Nous prévoyons d’organiser des formations dans les écoles primaires locales, pour sensibiliser les enfants au respect de l’environnement, cela bien entendu en collaboration avec les ONG environnementales. </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className='bg-light' style={{
            marginBottom: '1%', width: '50%',
            marginleft: '26%'
        }}>
            <p className='bg-light' style={{
                marginTop: '1%', fontSize: 'larger',
                color: '#343d37',
                textAlign: 'justify', padding: '4%', width: '88%',
                marginLeft: '5%', marginBottom: '-4%',


            }}>

                Au fil des années, nous avons pu rassembler <b> une large communauté </b>qui compte <b>des tunisiens</b>, mais aussi des <b>expatriés</b> et <b>étrangers</b>.
                </p>
            <Accordion defaultActiveKey="0">
                <Card style={{ border: '0px solid rgb(0 0 0 / 0%)' }}>
                    <Card.Header className='bg-light' >
                        <Accordion.Toggle as={Button} style={{
                            color: '#093219',
                            width: '14%',
                            marginLeft: '45%',
                            backgroundColor: 'rgba(221, 221, 221, 0.794)'
                        }} variant="link" eventKey="1">
                            Détails
      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1" className='bg-light' style={{ marginBottom: '1%' }}>
                        <Card.Body className='bg-light' style={{
                            color: '#002b11', textAlign: 'justify', padding: '4%', width: '60%',
                            marginLeft: '20%', paddingTop: '0%', fontSize: 'larger',
                        }}>
                            C’est avec une grande fierté que nous contribuons à l’évolution du tourisme intérieur, en créant de <b>nouveaux emplois</b>  qui permettent <b>aux habitants des zones rurales de s’inscrire dans le rythme de l’activité commerçante urbaine sans pour autant avoir à quitter leur lieu d’habitation, et sans altérer leur environnement.</b>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>


        </div>
        <section style={{ display: 'flex' }}>


            <p style={{
                width: '57%',
                fontSize: 'larger',
                color: '#343d37',
                padding: '4%',
                paddingTop: '10%'
            }}>
                <h2 style={{
                    marginTop: '-19%',
                    fontSize: 'xxx-large'
                }}>En dehors de la Tunisie</h2>
                <div className='bg-light' style={{
                    marginTop: '2%',
                    width: '81%',
                    textAlign: 'justify',
                    marginLeft: '7%',
                    padding: '8%'

                }}>
                    Nous avons eu l’occasion d’organiser des road trips en <b>Algérie</b>.<br /><br /> En effet, nous souhaitons diffuser nos convictions au-delà des frontières tunisiennes,<b> à l’ensemble du Maghreb</b>, et faire de notre patrie une porte d’entrée vers l’Algérie.<br /> <br /> À long terme, nous envisageons de nous importer dans toute<b> l’Afrique</b>, de la région sub-saharienne à l’Afrique du sud.
        </div>
            </p>

            <div className="album py-5 bg-light">
                <div className="container" style={{ marginLeft: '0%' }}>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card mb-4 shadow-sm">
                                <img src={alger1} width="100%" height="225" alt="mission1" />
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c"></rect>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-4 shadow-sm">
                                <img src={alger2} width="100%" height="225" alt="mission3" />
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c"></rect>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-4 shadow-sm">
                                <img src={alger3} width="100%" height="225" alt="mission2" />
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c"></rect>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card mb-4 shadow-sm">
                                <img src={alger4} width="100%" height="225" alt="mission2" />
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c"></rect>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div style={{
            width: '64%',
            padding: '2%',
            marginLeft: '18%',
            fontSize: 'larger',
            color: '#093219'
        }}>
            <hr className="my-4" style={{ backgroundColor: '#093219' }} />

            <b>TUNISIAN CAMPERS</b> a été sélectionné parmi les <b>20</b> projets
      d’initiative de <b>développement durable</b> dans le cadre du projet Change.doc, lequel a été mis en place par
      <b>Global Playground Stockholm</b> et la
      <b> Maison de l’Image</b> soutenu par
      <b> Creative force – Swedish Institute</b>. Ce projet avait pour objectif de mettre en lumière
      les initiatives de développement durable en Tunisie.
      <hr className="my-4" style={{ backgroundColor: '#093219' }} />
        </div>

    </>);
};
export default Réalisation;


