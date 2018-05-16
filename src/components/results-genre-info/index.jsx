import React from 'react';
import PropTypes from 'prop-types';

const ResultsGenreInfo = ({genre}) => {
    return (
        <span>{`Films by ${genre.toLowerCase()} genre`}</span>
    );
};

ResultsGenreInfo.propTypes = {
    genre: PropTypes.string
};

export default ResultsGenreInfo;
