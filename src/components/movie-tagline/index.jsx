import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/styles.scss';

const MovieTagline = ({tagline}) => {
    return (
        <span className={styles.movieTagline}>{tagline}</span>
    )
}

MovieTagline.propTypes = {
    tagline: PropTypes.string.isRequired
}

export default MovieTagline;
