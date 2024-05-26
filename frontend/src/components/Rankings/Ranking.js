// src/Ranking.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Constants for image URLs
const RATED_ICON_URL = 'https://res.cloudinary.com/dgvipn16a/image/upload/v1716694023/Heart_Rated_kzxmp5.png';
const UNRATED_ICON_URL = 'https://res.cloudinary.com/dgvipn16a/image/upload/v1716694045/Heart_Unrated_hty833.png';

const Ranking = ({ itemId }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRating = (ratingValue) => {
    setRating(ratingValue);
  
    axios.post('/api/rate', {
      item_id: itemId,
      rating: ratingValue
    })
    .then(response => {
      console.log('Rating saved:', response.data);
    })
    .catch(error => {
      console.error('There was an error saving the rating:', error);
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index} className="mx-1">
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRating(ratingValue)}
              style={{ display: 'none' }}
            />
            <img
              src={ratingValue <= (hover || rating) ? RATED_ICON_URL : UNRATED_ICON_URL}
              alt="rating"
              width={50}
              height={50}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
              onClick={() => handleRating(ratingValue)}
              style={{ cursor: 'pointer' }}
            />
          </label>
        );
      })}
    </div>
  );
};

Ranking.propTypes = {
  itemId: PropTypes.number.isRequired,
};

export default Ranking;
