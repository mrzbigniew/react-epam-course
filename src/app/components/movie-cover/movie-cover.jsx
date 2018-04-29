import React from 'react';
import PropTypes from 'prop-types';

import MovieImage from '../../../components/movie-image/movie-image';

import './styles/styles.scss';

const MovieCover = (props) => {
    return (
        <MovieImage {...props} className="movie-cover"/>
    );
}

MovieCover.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export default MovieCover;
