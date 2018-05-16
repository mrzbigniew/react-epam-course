import React from 'react'
import PropTypes from 'prop-types';

import './styles/styles.scss';

const Content = ({children}) =>  {
    return (
        <div className="content-expand">
            {children}
        </div>
    );
}

Content.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Content;
