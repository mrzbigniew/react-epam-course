import React from 'react';

import SearchField from '../../../../components/search-field';
import SearchFilter from '../../../../components/search-filter';
import SearchButton from '../../../../components/search-button';

import './styles/styles.scss';

export default class SearchForm extends React.Component {
    searchFieldChange = (value) => {
        console.log('searchFieldChange', value); // eslint-disable-line
    }

    searchFilterChange = (filter) => {
        console.log('searchFilterChange', filter); // eslint-disable-line
    }

    searchButtonClick = () => {
        console.log('searchButtonClick'); // eslint-disable-line
    }

    render() {
        return (
            <div className="search-form" >
                <div className="row no-gutters">
                    <div className="col-12">
                        <SearchField onKeyUp={this.searchFieldChange} placeholder={`Search`} label={`Search for movie`} />
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-6">
                        <SearchFilter onClick={this.searchFilterChange} buttons={['title', 'genre']} selected={'title'} />
                    </div>
                    <div className="col-6">
                        <div className="row no-gutters justify-content-end">
                            <SearchButton onClick={this.searchButtonClick} label="search" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
