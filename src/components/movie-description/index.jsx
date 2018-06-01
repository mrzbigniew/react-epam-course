import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

const MovieDescription = ({description}) => {
    return (
        <div className="movies-description">
            <p>{description}</p>
        </div>
    );
}

MovieDescription.propTypes = {
    description: PropTypes.string
}

export default MovieDescription;
