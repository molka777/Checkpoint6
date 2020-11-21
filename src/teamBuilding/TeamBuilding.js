import React from 'react';
import '../css/team.css';

import photo from '.././res/SKA06855.jpg';
import photo2 from '.././res/Nebeur, El Kef 6.jpg';
import photo3 from '.././res/SKA07211.jpg';
import photo4 from '.././res/Sidi Medien,  Zaghouan 6.JPG';
import photo5 from '.././res/IMG_7043.jpg';

import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu5 from '../Navbar/Menu5';
import Carousel from 'react-bootstrap/Carousel';



const TeamBuilding = () => {
    return (
        <>
            <Menu5 />

            <body>
                <h1 id="about" className="title" style={{ margin: '1%' }}>LE TEAM BUILDING OUTDOOR</h1>
                <h2 className="title3" style={{ fontSize: 'large' }}> Le Team building outdoor offre une expérience marquante et originale, <br /> qui
        installe forcément une cohésion de groupe entre les membres d’une équipe.</h2>
                <div className="album py-5 " style={{ marginTop: '-5%' }}>
                    <div>
                        <button type=" button" style={{
                            color: '#093219',
                            width: '20%',
                            marginLeft: '40%',
                            marginBottom: '-9%',
                            marginTop: '-7%'
                        }}
                            className="btn btn-light">

                            <HashLink
                                to="/teamBuilding#reservation" style={{ color: '#093219', fontSize: '17px', textDecoration: 'none' }}
                                scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })}
                            >Réserver</HashLink>
                        </button>
                    </div>
                </div>
                <Carousel>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={photo}
                            alt="First slide"
                            style={{
                                margin: '-10%',
                                marginLeft: "10%"
                            }}
                        />




                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={photo2}
                            alt="Third slide"
                            style={{
                                margin: '-10%',
                                marginLeft: "10%"
                            }} />





                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={photo3}
                            alt="Third slide"
                            style={{
                                margin: '-10%',
                                marginLeft: "10%"
                            }}
                        />




                    </Carousel.Item>

                </Carousel>
                <br />
                <br />

                <div >
                    <div style={{ display: 'flex' }}>
                        <img style={{
                            width: '64%',
                            marginLeft: '1%', height: '49%', maxWidth: '62%'
                        }} src={photo4} className="img-fluid" alt="Responsive image" />


                        <div className="paragraph" style={{ margin: '4%', textAlign: 'justify', backgroundColor: '#f8f9fa', padding: '2%', paddingTop: '4%', marginTop: '2%' }}>

                            L’expérience du <b>team building outdoor</b> présente une multitude de <b>challenges</b> ,
                le mental est alors amené à se défaire du superflu et les corps à
                dépasser leurs limites ensembles.<br /> L’équipe forme finalement
                une seule grande <b> masse énergétique</b>.
            </div>

                    </div>
                    <br />
                    <div style={{ display: 'flex', marginTop: '2%' }}>
                        <div >
                            <div className="paragraph" style={{
                                margin: '9%', textAlign: 'justify', backgroundColor: '#f8f9fa', padding: '7%', paddingRight: '9%', marginTop: '-13%',
                                marginBottom: '6%',
                                paddingBottom: '1%'
                            }}>
                                <b>L’outdoor</b> renforce <b>l’esprit aventurier </b>
                des
                participants,
                de réveiller leur curiosité et d’ainsi dévoiler leurs <b> compétences cachées</b> .
                <br /> <br />
                            </div>
                            <div className="paragraph" style={{
                                margin: '9%', marginBottom: '-4%',
                                textAlign: 'justify', backgroundColor: '#f8f9fa', padding: '7%', marginBottom: '-13%'
                            }}>
                                Par ailleurs les temps de <b>méditation </b>
                    et de <b>repos</b> suite
                    à l’effort constituent un
                    excellent moyen pour les membres de l’équipe de renouveler leurs énergies,
                    <b>se reconnecter </b>
                    à eux même,au monde et aux personnes qui les entourent.

                </div>


                        </div>
                        <img src={photo5} style={{ maxWidth: '62%', marginTop: '-2%' }} className="img-fluid image2" alt="Responsive image" />



                    </div>
                </div>



                <div className="title3" style={{
                    fontSize: 'xx-large',
                    fontWeight: 'bold', marginTop: '7%'
                }} >
                    COMMENT RÉSERVER UN TEAM BUILDING
    </div>
                <button type="button" style={{
                    color: '#093219',
                    padding: '3%',
                    width: '52%',
                    marginLeft: '24%',
                    backgroundColor: 'rgba(221, 221, 221, 0.794)'

                }} className="btn btn-light">
                    <a style={{ color: '#093219', fontSize: 'x-large', textDecoration: 'none', letterSpacing: '3px' }}
                        href="/Catalogue Automne-Hiver 2020 DONE.pdf" target="_blank">
                        1. Consulter nos offres de Team Building</a>
                </button>

                <div id="reservation" className="title3" style={{ textTransform: 'unset', fontSize: 'x-large' }}>
                    2. Remplir le formulaire çi-dessous
    </div>

                <iframe style={{ marginTop: '2%', marginLeft: '14%' }} src="https://docs.google.com/forms/d/e/1FAIpQLSdi3xMcFHzmXSFxKBOYXv0tSUYQ6gnU-tbB9sI58f5N4eVMPg/viewform?embedded=true" width="1000" height="520" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>

                <div className="album py-5 bg-light" >
                    <div>
                        <button type=" button" style={{
                            color: '#093219',
                            width: '9%',
                            marginLeft: '87%',
                            marginTop: '-3%'
                        }}
                            className="btn btn-light">
                            <HashLink style={{ color: '#093219', fontSize: '17px', textDecoration: 'none' }} to="#top">Aller en haut</HashLink>
                        </button>
                    </div>
                </div>
            </body>

        </>);

};
export default TeamBuilding;