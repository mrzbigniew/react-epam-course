import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

const MovieDescription = ({description}) => {
    return (
        <article className="movies-description">
            <p>{description}</p>
        </article>
    );
}

MovieDescription.propTypes = {
    description: PropTypes.string
}

export default MovieDescription;
