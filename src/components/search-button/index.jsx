import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

import { connect } from 'react-redux';

import './styles/styles.scss';

const SearchButton = ({ onClick }) => {
    return (
        <div className="search-button">
            <Button
                className="brn btn-primary btn-sm"
                label={'search'}
                onClick={onClick}
            >
                search
            </Button>
        </div>
    )
}

SearchButton.propTypes = {
    onClick: PropTypes.func
}

export default SearchButton;
