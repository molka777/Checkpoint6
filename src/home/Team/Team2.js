import React from "react";
import "./Team.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Team2 = (props) => {

    return (
        <>
            <div className="col-lg-4" style={{ marginBottom: '9%' }}>
                <img src={props.imgUrl} alt="" style={{ borderRadius: '50%', width: '43%' }} />
            </div>

        </>
    );
};

export default Team2;