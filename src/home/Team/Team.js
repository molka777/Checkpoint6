import React from "react";
import "./Team.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
const Team = (props) => {

    return (
        <>
            <div className="col-lg-4">
                <img src={props.imgUrl} alt="" style={{ borderRadius: '50%', width: '43%' }} />
                <h5 className="name1" style={{ marginLeft: '5%' }}>{props.name}</h5>

                {['Secondary'].map(
                    (variant) => (
                        <DropdownButton
                            style={{ marginLeft: '7%', marginBottom: '5%' }}

                            key='{variant}'
                            id={`dropdown-variants-${variant}`}
                            variant={variant.toLowerCase()}
                            title="details"
                        ><div className="row">
                                <Dropdown.Item eventKey="1">
                                    <span className="bold">{props.post} <br /></span>
                                    <span className="bold">Formation:</span> {props.formation}
                                </Dropdown.Item>
                            </div>


                        </DropdownButton>
                    )
                )}
            </div>

        </>
    );
};

export default Team;