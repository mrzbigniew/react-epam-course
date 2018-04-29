import React from 'react';
import PropTypes from 'prop-types';

import SearchField from './components/search-field/search-field';
import SearchFilter from './components/search-filter/search-filter';
import SearchButton from './components/search-button/search-button';

export default class Search extends React.Component {
    filterButtons = [
        {
            label: 'NAME',
            selected: true
        }, {
            label: 'GENRE',
            selected: false
        }
    ];

    constructor(props) {
        super(props);
        this.state = {
            searchBy: this
                .filterButtons
                .find(button => button.selected === true),
            searchPhrase: ''
        }
    }

    search = () => {
        console.log(this.state); // eslint-disable-line
    }

    setSearchBy = (searchBy) => {
        this.filterButtons.forEach((button) => {
            if(button !== searchBy) {
                button.selected = false;
            } else {
                button.selected = true;
            }
        })
        this.setState({searchBy: searchBy});
    }

    onSearchFieldKeyUp = (event) => {
        this.setState({searchPhrase: event.target.value});
        if (event.key === 'Enter') {
            this.search();
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <SearchField onKeyUp={this.onSearchFieldKeyUp}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-12">
                        <SearchFilter buttons={this.filterButtons} onClick={this.setSearchBy}/>
                    </div>
                    <div className="col-sm-6 col-md-12">
                        <div className="row no-gutters justify-content-end">
                            <SearchButton onClick={this.search}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    label: PropTypes.string
}
