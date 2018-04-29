import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({onKeyUp}) => {
    return (
        <div className="form-group">
            <label htmlFor="searchInput" className="font-weight-bold control-label text-uppercase">find your movie</label>
            <input className="form-control" onKeyUp={onKeyUp} />
        </div>
    );
}

SearchField.propTypes = {
    onKeyUp: PropTypes.func
}

export default SearchField;
