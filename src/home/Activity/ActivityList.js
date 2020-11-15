import React, { useState } from "react";
import camping from '../.././res/sortie.jpg';
import randonnée from '../.././res/randonnee.jpg';
import Yoga from '../.././res/yoga.jpg';
import vtt from '../.././res/vtt.jpg';
import fitness from '../.././res/sport.jpg';
import tyrolienne from '../.././res/tyrolienne.jpg';
import escalade from '../.././res/Escalade.jpeg';
import paddle from '../.././res/paddle.jpg';
import kayak from '../.././res/kayak.jpeg';
import voley from '../.././res/voley.jpg';
import kohlanta from '../.././res/kohlanta.png';
import observation from '../.././res/observation.jpg';
import viaferrata from '../.././res/via ferrata.JPG';
import saut from '../.././res/saut.JPG';
import Row from 'react-bootstrap';
import ActivityCard from './ActivityCard';
import Button from 'react-bootstrap/Button'

// const sautL = HTMLAllCollection();

const ActivityList = () => {
    const [activities, setActivities] = useState([{ id: 1, imgUrl: camping, title: 'Camping', paragraph: 'Nous avons tout le nécessaire pour vous emmener camper \n \n dans les coins les plus sauvages et mystérieux...Vous pouvez apporter votre propre matériel si vous êtes déjà un adepte du camping !', time: 'Nombre de nuitées', rate: 5 },
    { id: 2, imgUrl: randonnée, title: 'Randonnée', paragraph: 'Niveau 1 Débutant : 8 à 10 km soit 2 à 3 heures de marche. Niveau 2 Intermédiaire : 12 à 15 Km soit 4 à 5 heures de marche.                    Niveau 3 Difficile : 15 à 20 Km soit 5 à 6 heures de marche.', time: 'Durée variante', rate: 5 },
    { id: 3, imgUrl: Yoga, title: 'Yoga & méditation', paragraph: 'Le Hatha Yoga Le Vinyasa Yoga Le Power YogaLe Yin Yoga Le Pranayama Chaque cours est clôturé par une séance de méditation d’un quart d’heure.', time: '1 heure 30min', rate: 4 },
    { id: 4, imgUrl: vtt, title: 'Le VTT', paragraph: 'Parcours 1: 7h, 24km aller-retour Parcours 2: 6h30, 22 km aller-retour Parcours 3: 6h, 20 km aller-retourParcours 4: Chemin de montagne Parcours 5: 3h, 10 km aller-retour', time: 'Durée variante', rate: 5 },
    { id: 5, imgUrl: fitness, title: 'Fitness', paragraph: 'L`activité est composée de 2 cours de 3 quarts d`heure chacun suivis d`une séance d`étirements TRX BODY ATTACK CROSS TRAINING HIIT CARDIO', time: '45min', rate: 4 },
    { id: 6, imgUrl: tyrolienne, title: 'Tyrolienne', paragraph: 'La tyrolienne est un moyen de transport utilisant une poulie qui se déplace sur un câble ou une corde. Laisser vous glisser d’une hauteur à l’autre et offrez vous un brin d’adrénaline.', time: '5min', rate: 4 },
    { id: 7, imgUrl: escalade, title: 'Escalade', paragraph: 'Seul ou accompagné, relevez le défi de l’altitude en grimpant sur des dizaines de mètres. Vous serez accompagnés de professionnels qui assureront le bon déroulement de cette activité.', time: '1 heure', rate: 3 },
    { id: 8, imgUrl: paddle, title: 'Paddle', paragraph: 'Sur une longue planche, apprenez à naviguer debout à l’aide d’une pagaie.On peut multiplier les positions d’équilibre sur la planche et relever les défis qu’elles impliquent.', time: '1 heure 30min', rate: 4 },
    { id: 9, imgUrl: kayak, title: 'Kayak', paragraph: 'Grimpez seul ou à deux sur votre kayak et laissez vous bercer par le silence aquatique.Nous vous proposons cette activité facile d’accès aux enfants en bas âge et idéale pour les sorties en famille !', time: '45min', rate: 3 },
    { id: 10, imgUrl: voley, title: 'Voley Ball', paragraph: 'Affrontez-vous en équipe autour d’un filet. Pas de panique pour les débutants, vous serez accompagné d’un moniteur qui encadrera la partie !', time: '1 heure' },
    { id: 11, imgUrl: kohlanta, title: 'Koh Lanta', paragraph: 'Les participants seront répartis en équipes et devront gagner des épreuves sportives, de réflexions et d’adresses accessibles à tous, en sollicitant leurs forces, leur stratégie, leur agilité', time: '3 heures', rate: 4 },
    { id: 12, imgUrl: observation, title: 'Observation téléscopique', paragraph: 'Initiez vous au monde stellaire et aux événements célestes. Accompagnée de professionnels en astronomie, vous élargirez vos horizons en découvrant l’art de l’observation télescopique', time: '4 heures', rate: 2 },
    { id: 13, imgUrl: viaferrata, title: 'Via Ferrata', paragraph: 'De barreau à barreau, les participants grimpent à l’échelle le long de la façade d’une montagne. Cette activité physique présente un véritable challenge de concentration !', time: '10min', rate: 3 },
    { id: 14, imgUrl: saut, title: 'Saut pendulaire', paragraph: 'Plus connu sous le nom de saut à l’élastique, il en fait frissonner plus d’un ! Attaché à un long cable, les participants chutent en arc de cercle depuis une hauteur de 80 mètres. Adrénaline garantie !', time: '20min', rate: 5 }]);

    {/*const [inputData, setInputData] = useState("");
    const handleChangeData = () => {
        const tab = activities.filter(item => item.title === inputData);
        setActivities(tab);
    }*/}


    return (

        <>
            {/*} <input style={{ width: '23%', marginLeft: '75%', marginTop: '1%' }} onChange={(e) => setInputData(e.target.value)} type="text" />
            <Button variant="light" style={{ marginLeft: '90%' }} onClick={() => handleChangeData()}>Rechercher</Button>*/}
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {activities.map(item => <ActivityCard key={item.id} imageUrl={item.imgUrl} title={item.title} paragraph={item.paragraph} time={item.time} rate={item.rate} />)}
            </div>

        </>
    );
};
export default ActivityList;