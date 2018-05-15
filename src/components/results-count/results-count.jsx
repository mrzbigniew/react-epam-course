import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

const ResultsCount = ({ moviesAmount }) => {
    return (
        <span className="results-count">{moviesAmount || 'No'} movies found</span>
    );
}

ResultsCount.propTypes = {
    moviesAmount: PropTypes.number
}

export default  ResultsCount;
