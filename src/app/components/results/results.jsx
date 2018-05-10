import React from 'react';
// import PropTypes from 'prop-types';

import ResultsBody from './components/results-body/results-body';
import ResultsSort from './components/results-sort/results-sort';
import ResultsCount from './components/results-count/results-count';

import './styles/styles.scss';

export default class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sortBy: 'release_date',
            movies: [],
            sortConfig: [
                {
                    value: 'release_date',
                    label: 'Release date',
                    selected: true
                }, {
                    value: 'vote_average',
                    label: 'Rating',
                    selected: false
                }
            ]
        }
    }

    setSortBy(sortBy) {
        setTimeout(() => {
            this.setState({sortBy: sortBy.value});
        });
    }

    updateSortConfig(sortBy) {
        setTimeout(() => {
            const sortConfig = this.state.sortConfig;
            sortConfig.forEach(item => {
                item.selected = item.value === sortBy.value;
            });

            this.setState({sortConfig: sortConfig});
        });
    }

    sortChange = (sortBy) => {
        setTimeout(() => {
            this.setSortBy(sortBy);
            this.updateSortConfig(sortBy);
        });
    }

    render() {
        return (
            <div className="results">
                <div className="results-summary">
                    <div className="row no-gutters align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <ResultsCount moviesAmount={this.state.movies.length}/>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="d-flex justify-content-end align-items-end">
                                <ResultsSort sortConfig={this.state.sortConfig} onClick={this.sortChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="results-container">
                            <ResultsBody movies={this.state.movies}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
