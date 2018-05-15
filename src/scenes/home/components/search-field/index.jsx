import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

const SearchField = ({onKeyUp}) => {
    return (
        <div className="search-field">
            <div className="form-group">
                <label
                    htmlFor="searchInput"
                    className="control-label text-uppercase font-montserrat">find your movie
                </label>
                <div>
                    <input id="searchInput" className="form-control" onKeyUp={onKeyUp} placeholder="Search for movie"/>
                </div>
            </div>
        </div>
    );
}

SearchField.propTypes = {
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string
}

export default SearchField;
