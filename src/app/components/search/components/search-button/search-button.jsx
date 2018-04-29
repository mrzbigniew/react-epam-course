import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../../components/button/button';

const SearchButton = ({onClick}) => {
    return(
        <Button className="brn btn-primary btn-sm" label={'search'} onClick={onClick} />
    )
}

SearchButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
}

export default SearchButton;
