import React, { useState } from "react";
import Team from "./Team.js";
import mohamed from "../res/MOHAMEDVRAIVRAI.jpg";
import taha from "../res/TAHAVRAI.jpg";
import molka from '../res/MOLKA VRAI.jpg';
import ahmed from '../res/AHMADVRAI.jpg';
import sarra from '../res/Sarra.jpg';
import chaima from '../res/CHAIMAVRAI.jpg';
import Jouda from '../res/JOUDAVRAI.jpg';
import "./Team.css";
const ListTeam = () => {
    const [team, setTeam] = useState([{ id: 1, imgUrl: mohamed, name: 'Mohamed', post: 'CEO et Fondateur ', formation: ' Réseaux et sécurité informatique' },
    { id: 2, imgUrl: taha, name: 'Taha', post: 'Respondable de l`équipe Logistique', formation: 'Tourisme' },
    { id: 3, imgUrl: molka, name: 'Molka', post: 'Dévelopement web, Membre de l`équipe communication', formation: 'Développement système informatique' },
    { id: 4, imgUrl: ahmed, name: 'Ahmed', post: 'Membre de l`équipe logistique', formation: 'Architecture' },
    { id: 5, imgUrl: sarra, name: 'Sarra', post: 'Respondable de l`équipe communication', formation: 'Cinéma' },
    { id: 6, imgUrl: chaima, name: 'Chaima', post: 'Membre de l`équipe Partenariat', formation: 'Enseignante chercheur en biologie moléculaire Activiste en environnement Facilitatrice en Design Thinking Zero waste and food management trainer' },
    { id: 6, imgUrl: Jouda, name: 'Jouda', post: 'Membre de l`équipe juridique', formation: 'Juriste' }]);

    return (
        <>
            <div style={{ backgroundColor: '#f8f9fa' }}> <h1 id="equipe" className="title" style={{
                color: '#093219', padding: '3%', marginTop: '2%',
                fontSize: 'xxx-large'
            }}>LA TEAM</h1></div>

            <div className="container marketing" style={{ marginLeft: '15%', marginTop: '5%', maxWidth: '1130px' }}>

                <div className="row">
                    {team.map(item => <Team key={item.id} imgUrl={item.imgUrl} name={item.name} post={item.post} formation={item.formation} />)}
                </div>
            </div>
        </>
    );
};
export default ListTeam;