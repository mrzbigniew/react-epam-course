import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../../components/button/button';

const SearchFilter = ({buttons, onClick}) => {
    return (
        <div className="search-filter">
            <label>Search by:</label> {buttons.map((button, index) => (<Button
                    className={`ml-2 btn btn-sm btn-${button.selected
                    ? 'primary'
                    : 'link'}`}
                    key={index}
                    label={button.label}
                    onClick={() => onClick(button)}/>)
                )}
        </div>
    )
};

SearchFilter.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.object),
    onClick: PropTypes.func
}

export default SearchFilter;
