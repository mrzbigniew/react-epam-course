import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

const Footer = ({children}) => {
    return (
        <div className="footer">
            {children}
        </div>
    )
}

Footer.propTypes = {
    children: PropTypes.node
}

export default Footer;
