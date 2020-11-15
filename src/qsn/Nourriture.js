import React from 'react';
import '../css/qsn.css';
import nourr1 from '.././res/IMG_0085.jpg';
import nourr2 from '.././res/IMG_1801.jpg';
import nourr3 from '.././res/IMG_8352.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
const Nourriture = () => {
    return (<>
        <hr />
        <div className="bg-light" style={{
            width: '67%',
            margin: '1%', marginLeft: '16%', paddingBottom: '1%'
        }}>

            <span style={{
                fontSize: 'xxx-large',
                marginLeft: '12%',
                fontWeight: '500'
            }}> FAIRE LE PLEIN D’ÉNERGIES </span>
            <br /> <br />
            <p style={{
                color: '#093219', textAlign: 'center', width: '92%',
                marginLeft: '3%'
            }}>

                Lors de l’aventure, nous veillons à ce que les repas et les snacks soient copieux, sains et équilibrés afin que chaque membre du groupe soit dans sa meilleure forme pour relever les multiples challenges. </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <img src={nourr1} alt="food1" style={{
                boxShadow: ' 0 0px 19px 1px rgba(128, 128, 128, 0.31)', width: '28%',
                height: '300px'
            }} />
            <img src={nourr2} alt="food2" style={{
                boxShadow: '0 0px 19px 1px rgba(128, 128, 128, 0.31)', width: '28%',
                height: '300px'
            }} />
            <img src={nourr3} alt="food3" style={{
                boxShadow: '0 0px 19px 1px rgba(128, 128, 128, 0.31)', width: '28%'
            }} />

        </div>
    </>);
};

export default Nourriture;