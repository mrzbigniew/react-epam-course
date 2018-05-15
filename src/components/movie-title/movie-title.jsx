import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

const MovieTitle = ({title}) => {
    return (
        <span className="movie-title">{title}</span>
    )
}

MovieTitle.propTypes = {
    title: PropTypes.string
}

export default MovieTitle;
