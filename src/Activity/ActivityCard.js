import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';


const ActivityCard = (props) => {
    return (
        <Card style={{ width: '25rem', border: '1px solid #adb5bd', marginBottom: '3%', boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)!important' }}>
            <Card.Img variant="top" src={props.imageUrl} style={{ width: '100%' }} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <div>
                    <Card.Text>
                        {props.paragraph}

                    </Card.Text>
                    <small> {props.time}</small>
                    <StarRatingComponent value={props.rate} />
                </div>
            </Card.Body>
        </Card>);
};
export default ActivityCard;