import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

const SearchField = ({onKeyUp, placeholder, label}) => {
    return (
        <div className="search-field">
            <div className="form-group">
                <label
                    htmlFor="searchInput"
                    className="control-label text-uppercase font-montserrat">{label}
                </label>
                <div>
                    <input id="searchInput"
                           className="form-control"
                           onKeyUp={(event) => onKeyUp(event.target.value)}
                           placeholder={placeholder}/>
                </div>
            </div>
        </div>
    );
}

SearchField.propTypes = {
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    label: PropTypes.string
}

export default SearchField;
