import React from 'react';
import PropTypes from 'prop-types';

const Button = ({onClick, className, children}) => {
    return (
        <button className={`btn ${className}`} onClick={(e) => onClick()}>
            {children}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
}

export default Button;
