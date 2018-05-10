import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

const Container = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node
}

export default Container;
