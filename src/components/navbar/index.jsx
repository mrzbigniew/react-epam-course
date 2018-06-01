import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({children, className}) => {
    return (
        <div className={`navbar ${className || ''}`}>
            {children}
        </div>
    );
};

Navbar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default Navbar;
