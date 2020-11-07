import React, { useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';


const Rating = () => {
    const [rating, setRating] = useState([{
        rating: 1
    }]);
    const onStarClick = (nextValue, prevValue, name) => {
        setRating({ rating: nextValue });
    };
    return (<>
        <StarRatingComponent value={rating.rating} starCount={5} onStarClick={onStarClick()} />
    </>);
};

export default Rating;