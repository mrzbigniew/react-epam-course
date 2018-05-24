import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../spinner';

import './styles/styles.scss';

const Cover = ({ visible }) => {
    return (
        <div className="cover" style={{ display: visible ? 'flex' : 'none' }}>
            <Spinner />
        </div>
    );
}

Cover.propTypes = {
    visible: PropTypes.bool
};

export default connect((state) => ({ visible: state.spinner }))(Cover);
