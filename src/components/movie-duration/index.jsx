import React from 'react';
import PropTypes from 'prop-types';

const MovieDuration = ({ duration }) => (
        <span className="movie-duration">{duration} min</span>
);

MovieDuration.propTypes = {
  duration: PropTypes.number,
};

export default MovieDuration;
