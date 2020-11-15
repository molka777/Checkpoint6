
import React from 'react';
import '../css/qsn.css';
import cagy from '.././res/californiagym.png';
import inde from '.././res/inde.png';

import holma from '.././res/holma.jpg';
import please from '.././res/please.tn.png';
import croissant from '.././res/croissant.png';
import bemagic from '.././res/bemagic.PNG';
import boukrim from '.././res/boukrim.png';
import sat from '.././res/sat.png';
import fair from '.././res/fair.png';
import biat from '.././res/biat.png';
import novo from '.././res/novo.png';
import fitness from '.././res/fitness.png';


import 'bootstrap/dist/css/bootstrap.min.css';

const Partenaire = () => {
    return (<>
        <hr className="my-4" />
        <section>
            <h1 id="partenaire" className="title2">Nos partenaires</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div className="border1">
                    <div className="row" style={{
                        marginTop: '1%',
                        marginRight: '26px',
                        marginLeft: '-2px'
                    }}>
                        <img className="part1" src={cagy} alt="" />
                        <img className="part2" src={inde} alt="" />
                        <img className="part3" src={holma} alt="" />
                        <img className="part4" src={please} alt="" />
                    </div>
                    <div className="row" style={{
                        marginLeft: '72px'
                    }}>
                        <img className="part5" src={croissant} alt="" />
                        <img className="part6" src={bemagic} alt="" />
                        <img className="part7" src={boukrim} alt="" />
                        <img className="part8" src={sat} alt="" />
                    </div>
                    <div className="row" style={{
                        marginLeft: '-15px'
                    }}>
                        <img className="part9" src={fair} alt="" />
                        <img className="part10" src={biat} alt="" />
                        <img className="part11" src={novo} alt="" />
                        <img className="part12" src={fitness} alt="" />

                    </div>
                </div>
            </div>
        </section>
    </>);
};
export default Partenaire;