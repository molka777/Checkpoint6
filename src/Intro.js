import React from 'react';

const Intro = () => {
    return (
        <>
            <div style={{ marginTop: '-12%' }}>
                <section id="about" style={{
                    backgroundColor: '#f8f9fa', marginLeft: '20%', width: '60%',
                    textAlign: 'justify',
                    color: '#40531e',
                    fontSize: 'small',
                    font: '10px sans-serif',
                    padding: '2%',
                    marginTop: '130px',
                    marginBottom: '3%'
                }} >
                    <div style={{ marginTop: '4%' }}>
                        <h1 style={{
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            color: '#093219',
                            margin: '4%'
                        }}>
                            RECONNECTEZ VOUS AVEC TUNISIAN CAMPERS</h1>
                        <p style={{
                            margin: '2%', lineHeight: '40px', textAlign: 'center',
                            letterSpacing: '3px',
                            fontSize: '21px',
                            color: '#343d37'
                        }}>
                            <b> Tunisian</b> parce que nous sommes tunisiens, <b> Campers</b> parce que la seule trace
                            de notre passage est celle des souvenirs qui flottent dans l’air et dans
                            l’esprit des membres de notre <b> communauté </b> .


                        </p>
                    </div>

                </section>
            </div>
            <h3 style={{
                textAlign: 'center',
                textTransform: 'uppercase',
                color: '#093219',
                margin: '2%'
            }}> Nous vous invitons à découvrir</h3>
            <div style={{ backgroundColor: '#f8f9fa' }}>
                <h1 style={{
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    margin: '2%', marginBottom: '4%', color: '#093219',
                    padding: '3%',
                    fontSize: 'xxx-large'
                }} > NOS ACTIVITÉS
                </h1>
            </div>
        </>
    );
};
export default Intro;