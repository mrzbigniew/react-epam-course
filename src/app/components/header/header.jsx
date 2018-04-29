import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

const Header = ({children}) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container-fluid">
                {children}
            </div>
        </div>
    )
}

Header.propTypes = {
    children: PropTypes.node
}

export default Header;
