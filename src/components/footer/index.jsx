import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/styles.scss';

const Footer = ({ children }) => (
        <div className={styles.footer}>
            {children}
        </div>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
