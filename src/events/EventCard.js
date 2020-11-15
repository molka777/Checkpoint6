import React from 'react';
import '../css/event.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const EventCard = (props) => {

    return (<>
        <div className="product-image" id="container">
            <img src={props.imgURl} alt="event" />

            <div className="info">
                <h2>Détails</h2>
                <ul className="détails">
                    <li><strong>Thème: </strong>{props.theme}</li>
                    <li>
                        <strong>Activités: </strong>{props.activities}
                    </li>
                    <li><strong>Destination: </strong>{props.destination}</li>
                    <li><strong>Date: </strong>{props.date}</li>
                </ul>
            </div>
        </div>


    </>);

};


export default EventCard;