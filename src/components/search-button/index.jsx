import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../button';

import styles from './styles/styles.scss';

const SearchButton = ({ onClick }) => (
        <div className={styles.searchButton}>
            <Button
                className={`brn btn-primary btn-sm ${styles.btnSm}`}
                label={'search'}
                onClick={onClick}
            >
                search
            </Button>
        </div>
);

SearchButton.propTypes = {
  onClick: PropTypes.func,
};

export default SearchButton;
