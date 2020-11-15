

import React, { useState } from "react";
import '../css/qsn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConceptCard from './ConceptCard'
const ConceptList = (props) => {
    const [concept, setConcept] = useState([{ id: 1, title: 'Lieux', paragraph: 'Les lieux visités ne sont jamais proches des villes mais plutôt non loin des villages et des campagnes.' },
    { id: 2, title: 'Circuit', paragraph: 'Nous créons nos randonnées en collaboration avec les connaisseurs de la région, nos guides.  ' },
    {
        id: 3, title: 'Activités', paragraph: 'Nous nourrissons les aventures d’activités locales en travaillant avec les superviseurs sur place, nos partenaires. '
    },
    { id: 4, title: 'Alimentation', paragraph: 'Notre communauté déguste les plats de la région, fraîchement cuisinés par les habitants, nos traiteurs.' }]);

    return (
        <>

            <section className="row" style={{
                color: 'white',
                backgroundColor: 'white',
                margin: '1%',
                width: '98%',
                marginTop: '-20%',


            }}>
                {concept.map(item => <ConceptCard key={item.id} title={item.title} paragraph={item.paragraph} />)}


            </section>
        </>
    );
};
export default ConceptList;