import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/styles.scss';

const ResultsCount = ({ moviesCount }) => (
        <span className={styles.resultsCount}>{moviesCount || 'No'} movies found</span>
);

ResultsCount.propTypes = {
  moviesCount: PropTypes.number,
};

export default ResultsCount;
