import React from 'react';

import Button from '../../../../components/button';

import './styles/styles.scss';

const BackToSearch = () => {

    const backToSearchClick = () => {
        console.log('backToSearchClick'); // eslint-disable-line
    }

    return (
        <Button className="back-to-search btn btn-sm btn-light"
                onClick={backToSearchClick}
                label="search"
        />
    );
}

export default BackToSearch;
