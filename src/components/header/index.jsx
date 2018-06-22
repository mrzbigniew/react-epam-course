import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/styles.scss';

const Header = ({ children }) => (
        <div className={styles.header}>
            {children}
        </div>
);

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
