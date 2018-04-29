import React from 'react';
import PropTypes from 'prop-types';

const MovieYear = ({release_date}) => {
    return (
        <span>{release_date.split('-')[0]}</span>
    );
}

MovieYear.propTypes = {
    release_date: PropTypes.string
}

export default MovieYear;
