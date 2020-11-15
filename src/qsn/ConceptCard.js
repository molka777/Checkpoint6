import React from 'react';
import '../css/qsn.css';

const ConceptCard = (props) => {
    return (
        <>

            <div style={{
                width: '24%',
                padding: '2%',
                height: '240px',
                textAlign: 'center',
                fontSize: 'large'
            }}>
                <h3 style={{ textAlign: 'center', fontSize: 'xxx-large' }}>{props.title}</h3>
                <p style={{ fontWeight: '600' }}> {props.paragraph}</p></div>



        </>
    );
};

export default ConceptCard;