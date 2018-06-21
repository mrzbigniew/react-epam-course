import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/styles.scss';

const SearchField = ({ onChange }) => {
    return (
        <div className={styles.searchField}>
            <div className={`form-group ${styles.formGroup}`}>
                <label
                    htmlFor="searchInput"
                    className={`control-label font-montserrat ${styles.textUppercase} ${styles.controlLabel}`}>Search for movie
                </label>
                <div>
                    <input id="searchInput"
                        className={`form-control ${styles.formControl}`}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={`type to search`}
                        autoComplete={`off`}
                    />
                </div>
            </div>
        </div>
    );
}

SearchField.propTypes = {
    onChange: PropTypes.func
}

export default SearchField;
