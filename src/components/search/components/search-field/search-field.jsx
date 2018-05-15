import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({onKeyUp, placeholder}) => {
    return (
        <div className="search-field">
            <div className="form-group">
                <label
                    htmlFor="searchInput"
                    className="font-weight-bold control-label text-uppercase">find your movie
                </label>
                <div>
                    <input className="form-control" onKeyUp={onKeyUp} placeholder={placeholder}/>
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
