import React from "react";
import Bazina from './res/Bazina_1.mp4'
const Video = () => {
    return (
        <div style={{ marginTop: '-133px' }}>
            <video style={{ width: '100%' }} autoPlay loop muted>
                <source src={Bazina} type="video/mp4" />
            </video>
            <div style={{
                zIndex: 1000,
                position: 'relative',
                top: '-308px'
            }}>
                <div>
                    <button type=" button" style={{
                        borderColor: '#f8f9fa',
                        color: '#093219',
                        width: '8%',
                        backgroundColor: '#f3f9fd94',
                        marginLeft: '46%',
                        padding: '.375rem .75rem',
                        fontSize: '1rem', lineHeight: ' 1.5',
                        borderRadius: '.25rem',
                        border: ' 1px solid transparent',
                        userSelect: 'none',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        display: ' inline-block',
                        fontWeight: ' 400'
                    }}
                        className="btn btn-light">
                        <a style={{ color: '#093219', fontSize: '17px', textDecoration: 'none' }} href="#about">
                            See more</a>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Video;