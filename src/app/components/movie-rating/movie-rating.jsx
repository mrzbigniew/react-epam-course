import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

const MovieRating = ({rating}) => {
    return (
        <span className="movie-rating">{rating | 0}</span>
    )
}

MovieRating.propTypes = {
    rating: PropTypes.number
}

export default MovieRating;
