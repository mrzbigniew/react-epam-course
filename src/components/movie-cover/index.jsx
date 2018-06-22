import React from 'react';
import PropTypes from 'prop-types';

import MovieImage from '../movie-image';

import styles from './styles/styles.scss';

const MovieCover = props => (
        <MovieImage {...props} className={styles.movieCover}/>
);

MovieCover.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default MovieCover;
