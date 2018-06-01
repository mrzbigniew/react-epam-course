import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

const MovieTagline = ({tagline}) => {
    return (
        <span className="movie-tagline">{tagline}</span>
    )
}

MovieTagline.propTypes = {
    tagline: PropTypes.string.isRequired
}

export default MovieTagline;
