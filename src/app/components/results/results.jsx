import React from 'react';
import PropTypes from 'prop-types';

import ResultsBody from './components/results-body/results-body';
import ResultsSort from './components/results-sort/results-sort';
import ResultsCount from './components/results-count/results-count';

import MovieItemDataModel from '../../../models/movie-item/movie-item.model';

import './styles/styles.scss';

export default class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sortBy: this.props.sortConfig.defaultSort
        }
    }

    getSortedMovies() {
        return this.props.movies.sort(
            (current, next) => {
                const [nextValue, currentValue] = [next[this.state.sortBy], current[this.state.sortBy]];
                return currentValue === nextValue ? 0 : (currentValue > nextValue ? 1 : -1);
            }
        );
    }

    sortChange = (sortBy) => {
        this.setState({
            sortBy: sortBy.value
        });
    }

    movieClick = (movie) => {
        console.log(movie); // eslint-disable-line no-console
    }

    render() {
        return (
            <div className="results">
                <div className="results-summary">
                    <div className="row no-gutters align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <ResultsCount moviesAmount={this.props.movies.length}/>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="d-flex justify-content-end align-items-end">
                                <ResultsSort sortItems={this.props.sortConfig.items} onClick={this.sortChange} sortBy={this.state.sortBy}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ResultsBody movies={this.getSortedMovies()} onMovieClick={this.movieClick}/>
                    </div>
                </div>
            </div>
        );
    }
}

Results.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape(MovieItemDataModel)),
    sortConfig: PropTypes.shape({
        defaultSort: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        }))
    })
};
