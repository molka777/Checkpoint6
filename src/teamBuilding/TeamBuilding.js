import React from 'react';
import '../css/team.css';

import photo from '.././res/SKA06855.jpg';
import photo2 from '.././res/Nebeur, El Kef 6.jpg';
import photo3 from '.././res/SKA07211.jpg';
import photo4 from '.././res/Sidi Medien,  Zaghouan 6.JPG';
import photo5 from '.././res/IMG_7043.jpg';


import 'bootstrap/dist/css/bootstrap.min.css';
import Menu2 from '../Navbar/Menu2';


const TeamBuilding = () => {
    return (
        <> <Menu2 />
            <div className="album py-5 ">
                <div>
                    <button type=" button" style={{
                        color: '#093219',
                        width: '20%',
                        marginLeft: '78%',
                        marginBottom: '-1%'
                    }}
                        className="btn btn-light">
                        <a style={{ color: '#093219', fontSize: '17px', textDecoration: 'none' }} href="#reserver">
                            Réservez un team building</a>
                    </button>
                </div>
            </div>
            <body>
                <h1 id="about" className="title">LE TEAM BUILDING OUTDOOR</h1>
                <h2 className="title3"> Le Team building outdoor offre une expérience marquante et originale, <br /> qui
        installe forcément une cohésion de groupe entre les membres d’une équipe.</h2>

                <div id="carouselExampleIndicators" className="carousel slide caroussel" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">

                        <div className="carousel-item active">

                            <img src={photo} className="d-block w-100"
                                alt="2" />
                        </div>
                        <div className="carousel-item">
                            <img src={photo2} className="d-block w-100" alt="3" />
                        </div>

                        <div className="carousel-item">
                            <img src={photo3} className="d-block w-100" alt="6" />
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <br />
                <br />

                <div style={{ backgroundColor: '#f8f9fa' }}>
                    <div style={{ display: 'flex' }}>
                        <img style={{
                            width: '50%',
                            marginLeft: '1%', height: '49%'
                        }} src={photo4} className="img-fluid" alt="Responsive image" />


                        <div className="paragraph">

                            L’expérience du <b>team building outdoor</b> présente une multitude de <b>challenges</b> ,
                le mental est alors amené à se défaire du superflu et les corps à
                dépasser leurs limites ensembles. L’équipe forme finalement
                une seule grande <b> masse énergétique</b>.
            </div>

                    </div>
                    <br />
                    <div style={{ display: 'flex' }}>
                        <div className="paragraph2">
                            <b>L’outdoor</b> permet également de renforcer <b>l’esprit aventurier</b>
                des
                participants,
                de réveiller leur curiosité et d’ainsi dévoiler leurs <b> compétences cachées</b> .
                <br /> <br />
                            <div>
                                Par ailleurs les temps de <b>méditation</b>
                    et de <b>repos</b> suite
                    à l’effort constituent un
                    excellent moyen pour les membres de l’équipe de renouveler leurs énergies,
                    <b>se reconnecter</b>
                    à eux même,au monde et aux personnes qui les entourent.

                </div>


                        </div>
                        <img src={photo5} className="img-fluid image2" alt="Responsive image" />



                    </div>
                </div>



                <div id="reserver" className="title3" style={{
                    fontSize: 'xx-large',
                    fontWeight: 'bold'
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

                <div className="title3" style={{ textTransform: 'unset', fontSize: 'x-large' }}>
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
                            <a style={{ color: '#093219', fontSize: '17px', textDecoration: 'none' }} href="#about">
                                Aller en haut </a>
                        </button>
                    </div>
                </div>
            </body>

        </>);

};
export default TeamBuilding;