import React from 'react';
import '../css/qsn.css';
import form1 from '.././res/form1.jpg';
import form2 from '.././res/form2.jpg';

import form3 from '.././res/IMG_1502.jpg';
import form4 from '.././res/IMG_8671 (1).jpg';
import form5 from '.././res/IMG_9878.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formation = () => {
    return (<>
        <section style={{ marginTop: '5%' }}>
            <img src={form1} alt="form1" style={{
                width: '86%',
                marginLeft: '7%'
            }} />
            <h2 id="about" className="title2" style={{
                margin: '0',
                height: '200px', color: '#093219', marginTop: '-4%'
            }}> <br /> RECRUTEMENT ET FORMATION</h2> <p style={{
                fontWeight: '600', marginTop: '-6%', marginBottom: '-8%',
                color: '#093219',
                textAlign: 'center'
            }}></p>
            <img src={form2} alt="form2" style={{
                width: '86%', marginLeft: '7%',
                marginTop: '2%'
            }} />
            <div className="bg-light" style={{ display: 'flex', justifyContent: 'center', marginTop: '1%' }}>
                <p style={{
                    margin: '4%',
                    textAlign: 'center',
                    fontSize: 'large'
                }}>
                    <span> NOS AMBASSADEURS</span> <br /> Un habitant ne devient pas ambassadeur par le simple fait qu’il travaille
  au sein de Tunisian Campers. Nous investissons en lui temps et énergie,
  en lui expliquant ce que nous faisons exactement
   et pourquoi nous le faisons afin qu’il comprenne l’étendu de son rôle.
                </p>

                <p style={{
                    margin: '4%',
                    textAlign: 'center',
                    fontSize: 'large',

                }}>Nous lui transmettons notre savoir faire et ainsi, l’habitant participe
                    à la vie de l’organisation au sein de Tunisian Campers.
                    C’est comme cela qu’il devient finalement ambassadeur. À ce jour, nous comptons 46
                    ambassadeurs qui travaillent
      eux aussi pour faire valoir le meilleur de leur régions aux aventuriers. </p>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <img src={form3} alt="form4" style={{
                    boxShadow: '0 0px 19px 1px rgba(128, 128, 128, 0.31)', width: '28%',
                    height: '300px'
                }} />
                <img src={form4} alt="form3" style={{
                    boxShadow: '0 0px 19px 1px rgba(128, 128, 128, 0.31)', width: '28%',
                    height: '300px'
                }} />
                <img src={form5} alt="form5" style={{
                    boxShadow: '0 0px 19px 1px rgba(128, 128, 128, 0.31)', width: '28%'
                }} />
            </div>
        </section>

    </>
    );
}
export default Formation;