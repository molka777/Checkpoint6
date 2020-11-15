import React from 'react';
import '../css/qsn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QsnCard from './QsnCard'
import Concept from './Concept';
import Environnement from './Environnement';
import Nourriture from './Nourriture';
import Formation from './Formation';
import Réalisation from './Réalisation';
import Partenaire from './Partenaire';
import Menu2 from '../Navbar/Menu2';

const QuiSommeNous = () => {

    return (<>
        <Menu2 />
        <h2 id="about" className="title2 bg-light" style={{
            margin: 0,
            height: '200px', color: '#093219'
        }}> <br /> NOUS SOMMES</h2> <p className="bg-light" style={{
            fontWeight: 600, marginTop: '-6%', marginBottom: '-8%',
            color: '#093219',
            textAlign: 'center'
        }} >une start-up qui oeuvre pour un tourisme plus durable en Tunisie. <br />Nous invitons notre communauté à découvrir des terrains Outdoor</p>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <QsnCard />
        <Concept />
        <Environnement />
        <Nourriture />
        <Formation />
        <Réalisation />
        <Partenaire />
    </>);
};

export default QuiSommeNous;