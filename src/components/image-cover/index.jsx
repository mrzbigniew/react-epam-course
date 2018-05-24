import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

const ImageCover = ({visible, children}) => {
    return (
        <div className="image-cover" style={{display: visible ? 'flex' : 'none'}}>
            {children}
        </div>
    );
}

ImageCover.propTypes = {
    visible: PropTypes.bool,
    children: PropTypes.node
}

export default ImageCover;
