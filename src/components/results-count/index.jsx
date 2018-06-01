import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

const ResultsCount = ({ moviesCount }) => {
    return (
        <span className="results-count">{moviesCount || 'No'} movies found</span>
    );
}

ResultsCount.propTypes = {
    moviesCount: PropTypes.number
}

export default  ResultsCount;
