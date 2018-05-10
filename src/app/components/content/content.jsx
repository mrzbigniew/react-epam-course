import React from 'react';
import PropTypes from 'prop-types';

const Content = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

Content.propTypes = {
    children: PropTypes.node
}

export default Content;
