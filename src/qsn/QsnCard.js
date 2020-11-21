import React from 'react';
import '../css/qsn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import economy from '../res/economy.png';
import node from '../res/nodes.png';
const QsnCard = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden bg-light">
                    <div className="my-3 py-3">
                        <img style={{
                            width: '46%',
                            textAlign: 'center',
                            marginTop: '-20%'
                        }} src={economy} alt="node" />
                        <h2 style={{ marginTop: '1%' }} className="display-5">NOTRE IMPACT</h2> <br />
                        <p className="lead" style={{ fontWeight: '500' }}>Favoriser l'accès au tourisme alternatif</p>
                        <p className="lead" style={{ fontWeight: '500' }}>Créer de nouveaux emplois</p>
                        <p className="lead" style={{ fontWeight: '500' }}>Homogénéiser l'économie du pays</p>
                        <p className="lead" style={{ fontWeight: '500' }}>                        Faire valoir les régions explorées
</p>



                    </div>
                </div>

                <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden bg-light">
                    <div className="my-3 py-3">
                        <img style={{
                            width: '28%',
                            textAlign: 'center',
                            marginTop: '-11%',
                            marginBottom: '6%'


                        }} src={node} alt="node" />
                        <h2 style={{ marginTop: '1%' }} className="display-5">NOTRE PHILOSOPHIE</h2> <br />
                        <p className="lead" style={{ fontWeight: '500' }}>Favoriser les échanges au sein du territoire</p>
                        <p className="lead" style={{ fontWeight: '500' }}>Nourrir la vie d'aventures et de rencontres</p>
                        <p className="lead" style={{ fontWeight: '500' }}>Inspirer un comportement écorespoonsable</p>
                        <p className="lead" style={{ fontWeight: '500' }}> Reconnecter l’humain à sa nature</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default QsnCard;