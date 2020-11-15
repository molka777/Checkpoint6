import React from 'react';
import '../css/qsn.css';
import QsnCard from './QsnCard';
import economy from '../res/economy.png';
import node from '../res/nodes.png';
const QsnList = (props) => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <QsnCard img={economy} title={'NOTRE IMPACT'} />
                <QsnCard img={node} title={'lA PHILOSOPHIE'} />
            </div>

        </>
    );
};

export default QsnList;