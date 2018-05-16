import React from 'react';

import Button from '../../../../components/button';

import './styles/styles.scss';

export default class BackToSearch extends React.Component {

    backToSearchClick = () => {
        console.log('backToSearchClick'); // eslint-disable-line
    }

    render() {
        return (
            <Button className="back-to-search btn btn-sm btn-light" onClick={this.backToSearchClick} label="search"/>
        )
    }
}
