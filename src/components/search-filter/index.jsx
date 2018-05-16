import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

import './styles/styles.scss';

const SearchFilter = ({buttons, onClick, selected}) => {
    return (
        <div className="search-filter">
            <label>Search by:</label> {buttons.map((button, index) => (<Button
                    className={`ml-2 btn btn-sm btn-${selected === button
                    ? 'primary'
                    : 'link'}`}
                    key={index}
                    label={button}
                    onClick={() => onClick(button)}/>)
                )}
        </div>
    );
};

SearchFilter.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
    selected: PropTypes.string
}

export default SearchFilter;
