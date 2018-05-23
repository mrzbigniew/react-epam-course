import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

const SearchField = ({ onChange }) => {
    return (
        <div className="search-field">
            <div className="form-group">
                <label
                    htmlFor="searchInput"
                    className="control-label text-uppercase font-montserrat">Search for movie
                </label>
                <div>
                    <input id="searchInput"
                        className="form-control"
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={`type to search`} />
                </div>
            </div>
        </div>
    );
}

SearchField.propTypes = {
    onChange: PropTypes.func
}

export default SearchField;
