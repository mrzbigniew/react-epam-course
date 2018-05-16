import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

import './styles/styles.scss';

const SearchButton = ({onClick}) => {
    return(
        <div className="search-button">
            <Button className="brn btn-primary btn-sm" label={'search'} onClick={onClick} />
        </div>
    )
}

SearchButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
}

export default SearchButton;
