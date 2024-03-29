import React from 'react';
import '../css/qsn.css';
import morphus from '../res/DRMA3863.jpg';
import taha from '../res/OAXS9940.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Environnement = () => {
    return (<>
        <br />
        <br />
        <h1 id="objectif" className="title2 bg-light" style={{ color: '#093219', margin: '4%', marginTop: '2%' }}>NOTRE ENGAGEMENT ENVIRONNEMENTAL</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <img src={morphus} style={{
                width: '28%',
                boxShadow: '0 0px 19px 1px rgba(128, 128, 128, 0.31)',
                height: '389px',
                marginTop: '9%'
            }} alt="environnement1" />

            <div className="bg-light" style={{
                color: '#093219',
                margin: '0%',
                width: '31%',
                textAlign: 'center',
                marginTop: '0%',
                paddingTop: '2%',
                paddingLeft: '2%',
                paddingRight: '2%',
                marginBottom: '8%'
            }}>
                <span style={{ fontSize: 'x-large', textAlign: 'center' }}><b> DÉCOUVRIR & RESPECTER </b></span>
                <br /> <br />
                <p>

                    Nous guidons la communauté à travers des paysages magnifiques, authentiques et sauvages. <br /><br /> Nous nous devons donc d’inspirer <b> un comportement éco-responsable </b>, indispensable à la préservation de ces paysages. <br /><br />  </p>
                <Accordion defaultActiveKey="0">
                    <Card style={{ border: '0px solid rgb(0 0 0 / 0%)' }}>
                        <Card.Header className='bg-light' >
                            <Accordion.Toggle as={Button} style={{
                                color: '#093219',

                                width: '30%',
                                marginLeft: '-2%',
                                backgroundColor: 'rgba(221, 221, 221, 0.794)'
                            }} variant="link" eventKey="1">
                                Détails
      </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className='bg-light' style={{ color: '#002b11' }}> Depuis la naissance de Tunisian Campers, tous les événements suivent <b> le principe du 0 déchets</b> et les règles de notre charte
environnementale sont respectées autant par les membres de <b> notre communauté </b> que par <b> nos ambassadeurs </b> et <b>partenaires</b> . <br /><br /> À l’occasion de nos événements, beaucoup des membres de la communauté Tunisian Campers apprennent à limiter leur production de déchets au quotidien. </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>


            </div>
            <img src={taha} style={{
                boxShadow: '0 0px 19px 1px rgba(128, 128, 128, 0.31)',
                marginBottom: '-15%', width: '28%',
                height: '389px',
                marginTop: '9%'
            }} alt="environnement2" />
        </div>
    </>);
};
export default Environnement;