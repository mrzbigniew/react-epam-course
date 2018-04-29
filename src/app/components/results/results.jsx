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
            movies: [
                {
                    id: 240,
                    title: "The Godfather: Part II",
                    tagline: "I don't feel I have to wipe everybody out, Tom. Just my enemies.",
                    vote_average: 8.4,
                    vote_count: 4308,
                    release_date: '1974-12-20',
                    poster_path: "https://image.tmdb.org/t/p/w500/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",
                    overview: `In the continuing saga of the Corleone crime family, a young Vito Corleone grows
                        up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to
                        expand the family business into Las Vegas, Hollywood and Cuba.`,
                    budget: 13000000,
                    revenue: 102600000,
                    genres: [
                        "Drama", "Crime"
                    ],
                    runtime: 200
                }
            ],
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
            <div>
                <div className="row justify-content-around">
                    <div className="col">
                        <ResultsCount moviesAmount={this.state.movies.length}/>
                    </div>
                    <div className="col">
                        <div className="d-flex justify-content-end align-items-end">
                            <ResultsSort sortConfig={this.state.sortConfig} onClick={this.sortChange}/>
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
