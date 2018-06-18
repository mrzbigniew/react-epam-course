import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

const Link = ({ onClick, active, children }) => (
  active
    ? (
                <span className="btn btn-sm btn-success">
                    {children}
                </span>
    )
    : (
                <span className="btn btn-sm btn-text" onClick={(e) => { e.preventDefault(); onClick(); }}>
                    {children}
                </span>
    )

);

Link.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.node,
};

export default Link;
