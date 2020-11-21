import React, { useState } from "react";
import Team2 from "./Team2.js";
import mohamed from "../.././res/MOHAMEDVRAIVRAI.jpg";
import taha from "../.././res/TAHAVRAI.jpg";
import molka from '../.././res/MOLKA VRAI.jpg';
import ahmed from '../.././res/AHMADVRAI.jpg';
import sarra from '../.././res/Sarra.jpg';
import chaima from '../.././res/CHAIMAVRAI.jpg';
import Jouda from '../.././res/JOUDAVRAI.jpg';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import "./Team.css";
const ListTeam2 = () => {
    const [team, setTeam] = useState([{ id: 1, imgUrl: mohamed },
    { id: 2, imgUrl: taha },
    { id: 3, imgUrl: molka },
    { id: 4, imgUrl: ahmed },
    { id: 5, imgUrl: sarra },
    { id: 6, imgUrl: chaima },
    { id: 7, imgUrl: Jouda }]);

    return (
        <>
            <div style={{ backgroundColor: '#f8f9fa' }}> <h1 id="equipe" className="title" style={{
                color: '#093219', padding: '3%', marginTop: '2%',
                fontSize: 'xxx-large'
            }}>LA TEAM</h1></div>

            <div className="container marketing" style={{ marginLeft: '15%', marginTop: '5%', maxWidth: '1130px' }}>

                <div className="row">
                    {team.map(item => <Team2 key={item.id} imgUrl={item.imgUrl} />)}
                </div>
            </div>
            <div className="container marketing" style={{ marginLeft: '15%', marginTop: '5%', maxWidth: '1130px' }}>

                <div className="row">
                    <div className="col-lg-4 teaminfo" >
                        <h5 className="name1" style={{ marginLeft: '5%' }}>Mohamed</h5>
                        {['Secondary'].map(
                            (variant) => (
                                <DropdownButton
                                    style={{ marginLeft: '7%', marginBottom: '5%' }}

                                    key='{variant}'
                                    id={`dropdown-variants-${variant}`}
                                    variant={variant.toLowerCase()}
                                    title="details"
                                ><div className="row">
                                        <Dropdown.Item eventKey="1" >
                                            <span className="bold">CEO et Fondateur<br /></span>
                                            <span className="bold">Formation:</span> Réseaux et sécurité <br />informatique
                                </Dropdown.Item>
                                    </div>


                                </DropdownButton>)
                        )}
                    </div>
                    <div className="col-lg-4 teaminfo" >
                        <h5 className="name1" style={{ marginLeft: '12%' }}>Taha</h5>
                        {['Secondary'].map(
                            (variant) => (
                                <DropdownButton
                                    style={{ marginLeft: '7%', marginBottom: '5%' }}

                                    key='{variant}'
                                    id={`dropdown-variants-${variant}`}
                                    variant={variant.toLowerCase()}
                                    title="details"
                                ><div className="row">
                                        <Dropdown.Item eventKey="1">
                                            <span className="bold">Respondable de l'équipe
                Logistique<br /></span>
                                            <span className="bold">Formation:</span> Tourisme
                                </Dropdown.Item>
                                    </div>


                                </DropdownButton>)
                        )}


                    </div>
                    <div className="col-lg-4 teaminfo" >
                        <h5 className="name1" style={{ marginLeft: '9%' }}>Molka</h5> {['Secondary'].map(
                            (variant) => (
                                <DropdownButton
                                    style={{ marginLeft: '7%', marginBottom: '5%' }}

                                    key='{variant}'
                                    id={`dropdown-variants-${variant}`}
                                    variant={variant.toLowerCase()}
                                    title="details"
                                ><div className="row">
                                        <Dropdown.Item eventKey="1">
                                            <span className="bold">  Dévelopement du site web <br />
                Membre de l'équipe <br /> communication<br /></span>
                                            <span className="bold">Formation:</span> Développement des <br /> systèmes informatiques
                                </Dropdown.Item>
                                    </div>


                                </DropdownButton>)
                        )}



                    </div>
                    <div className="col-lg-4 teaminfoRow2" >
                        <h5 className="name1" style={{ marginLeft: '8%' }}>Ahmed</h5>
                        {['Secondary'].map(
                            (variant) => (
                                <DropdownButton
                                    style={{ marginLeft: '7%', marginBottom: '5%' }}

                                    key='{variant}'
                                    id={`dropdown-variants-${variant}`}
                                    variant={variant.toLowerCase()}
                                    title="details"
                                ><div className="row">
                                        <Dropdown.Item eventKey="1">
                                            <span className="bold">Membre de l'équipe
                Logistique<br /></span>
                                            <span className="bold">Formation:</span> Architecture
                                </Dropdown.Item>
                                    </div>


                                </DropdownButton>)
                        )}


                    </div>
                    <div className="col-lg-4 teaminfoRow2" >
                        <h5 className="name1" style={{ marginLeft: '10%' }}>Sarra</h5>
                        {['Secondary'].map(
                            (variant) => (
                                <DropdownButton
                                    style={{ marginLeft: '7%', marginBottom: '5%' }}

                                    key='{variant}'
                                    id={`dropdown-variants-${variant}`}
                                    variant={variant.toLowerCase()}
                                    title="details"
                                ><div className="row">
                                        <Dropdown.Item eventKey="1">
                                            <span className="bold">Responsable de l'équipe
          <br />      Communication<br /></span>
                                            <span className="bold">Formation:</span> Cinéma
                                </Dropdown.Item>
                                    </div>


                                </DropdownButton>)
                        )}


                    </div>
                    <div className="col-lg-4 teaminfoRow2" >
                        <h5 className="name1" style={{ marginLeft: '7%' }}>Chaima</h5>
                        {['Secondary'].map(
                            (variant) => (
                                <DropdownButton
                                    style={{ marginLeft: '7%', marginBottom: '5%' }}

                                    key='{variant}'
                                    id={`dropdown-variants-${variant}`}
                                    variant={variant.toLowerCase()}
                                    title="details"
                                ><div className="row">
                                        <Dropdown.Item eventKey="1">
                                            <span className="bold">Membre de l'équipe
                Partenariat<br /></span>
                                            <span className="bold">Formation:</span> Enseignante chercheur <br />en biologie moléculaire
                <br /> Activiste en environnement
                <br /> Facilitatrice en Design Thinking
                <br /> Zero waste and food management trainer
                                </Dropdown.Item>
                                    </div>


                                </DropdownButton>)
                        )}


                    </div>
                    <div className="col-lg-4 teaminfo" style={{ top: '-336px' }} >
                        <h5 className="name1" style={{ marginLeft: '9%' }}>Jouda</h5>
                        {['Secondary'].map(
                            (variant) => (
                                <DropdownButton
                                    style={{ marginLeft: '7%', marginBottom: '5%' }}

                                    key='{variant}'
                                    id={`dropdown-variants-${variant}`}
                                    variant={variant.toLowerCase()}
                                    title="details"
                                ><div className="row">
                                        <Dropdown.Item eventKey="1">
                                            <span className="bold">Responsable de l'équipe
                Juridique<br /></span>
                                            <span className="bold">Formation:</span> Juriste
                                </Dropdown.Item>
                                    </div>


                                </DropdownButton>)
                        )}


                    </div>
                </div>
            </div>
            <button type="button" className="bouton btn btn-light" style={{ marginTop: '-28%' }}>
                <a style={{ color: '#093219', fontWeight: 'bold' }}
                    href="https://docs.google.com/forms/d/147Mi1M5YSfMxAPnlXyiyYpH6AQvMpWhiKpUyoRRjFZw/edit" target="_blank">
                    Rejoindre l'équipe</a>
            </button>
        </>
    );
};
export default ListTeam2;