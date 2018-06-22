import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/styles.scss';

const ImageCover = ({ visible, children }) => (
        <div className={styles.imageCover} style={{ display: visible ? 'flex' : 'none' }}>
            {children}
        </div>
);

ImageCover.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node,
};

export default ImageCover;
