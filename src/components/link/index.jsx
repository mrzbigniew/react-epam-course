import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ onClick, active, children }) => {
    return (
        active
            ? (
                <span className="btn btn-sm btn-link">
                    {children}
                </span>
            )
            : (
                <a className="btn btn-sm " href="#" onClick={(e) => { e.preventDefault(); onClick() }}>
                    {children}
                </a>
            )

    )
}

Link.propTypes = {
    onClick: PropTypes.func,
    active: PropTypes.bool,
    children: PropTypes.node
};

export default Link;
