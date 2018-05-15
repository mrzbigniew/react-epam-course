import React from 'react';
import PropTypes from 'prop-types';

const MovieYear = ({year}) => {
    return (
        <span className="movie-year">{year}</span>
    );
}

MovieYear.propTypes = {
    year: PropTypes.number
}

export default MovieYear;
