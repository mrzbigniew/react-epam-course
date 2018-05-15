import React from 'react';
import PropTypes from 'prop-types';

const Button = ({className, label, onClick}) => {
    return (
        <button className={className} onClick={onClick}>{label}</button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;
