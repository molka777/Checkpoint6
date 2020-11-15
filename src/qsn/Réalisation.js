
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

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Réalisation = () => {
    return (<>
        <h1 className="title" style={{
            fontSize: '58px',
            marginLeft: '4%'
        }}>RÉALISATION</h1>

        <Carousel>
            <Carousel.Item interval={100}>
                <img
                    className="d-block w-100"
                    src={real1}
                    alt="First slide"
                />
                <Carousel.Caption style={{ marginBottom: '5%' }}>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={real2}
                    alt="Third slide"
                />
                <Carousel.Caption style={{ marginBottom: '5%' }}>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={real3}
                    alt="Third slide"
                />
                <Carousel.Caption style={{ marginBottom: '5%' }}>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={real4}
                    alt="fourth slide"
                />
                <Carousel.Caption style={{ marginBottom: '5%' }}>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={real5}
                    alt="fifth slide"
                />
                <Carousel.Caption style={{ marginBottom: '5%' }}>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div>
            <p style={{
                marginTop: '1%', fontSize: 'larger',
                color: '#343d37',
                textAlign: 'justify', padding: '1%', width: '60%',
                marginLeft: '20%'
            }}>
                Au fil des années, nous avons pu rassembler une
          <b> large communauté</b> qui compte des tunisiens, mais aussi des expatriés et étrangers.
          <br />
                <br />
          C’est avec une grande fierté que nous contribuons à
          <b>l’évolution du tourisme intérieur</b> , par la création de liens
          forts avec les habitants des régions reculées, en leur permettant de
          participer aux évènements et sorties, pouvant ainsi conduire à des
          opportunités d’emploi.
        </p>
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
                    marginTop: '-9%',
                    fontSize: 'xxx-large'
                }}>Out of Tunisia</h2>
                <b>TUNISIAN CAMPERS</b> a également eu l’occasion d’organiser des road
        trips en <b>Algérie</b>. <br />
        En effet, nous souhaitons diffuser nos convictions au delà des
        frontières tunisiennes, à l’ensemble du <b>Maghreb</b>, et faire de
        notre patrie une porte d’entrée vers l’Algérie.
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


