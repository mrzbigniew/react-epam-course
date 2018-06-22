import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/styles.scss';

const MovieTitle = ({ title }) => (
        <span className={styles.movieTitle}>{title}</span>
);

MovieTitle.propTypes = {
  title: PropTypes.string,
};

export default MovieTitle;
