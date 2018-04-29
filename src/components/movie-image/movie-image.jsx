import React from 'react';
import PropTypes from 'prop-types';

const MovieImage = ({src, alt, className}) => {
    return (
        <img src={src} alt={alt} className={className}/>
    );
}

MovieImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
}

export default MovieImage;
