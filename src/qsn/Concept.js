import React from 'react';
import '../css/qsn.css';
import concept from '../res/concept.jpeg';
import ConceptList from './ConceptList';
const Concept = (props) => {
    return (
        <>
            <section style={{ marginTop: '-6%' }}>
                <h1 id="objectif" className="title2" style={{
                    color: 'white', fontSize: '78px', position: 'relative',
                    top: '165px',
                    left: '-23%'
                }}>Notre concept</h1>

                <img style={{ width: '100%' }} src={concept} alt="concept" />

                <ConceptList />
            </section>
        </>
    );
};

export default Concept;