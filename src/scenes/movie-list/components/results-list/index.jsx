import React from 'react';

import ResultsCount from '../../../../components/results-count';
import ResultsSort from '../../../../components/results-sort';
import ResultsBody from '../../../../components/results-body';
import Content from '../../../../components/content';
import Navbar from '../../../../components/navbar';

import moviesList from '../../../../__mocks__/movies';

export default class ResultsList extends React.Component {
    movies = [];
    sortBy = 'release_date';
    sortItems = ['release_date', 'rating'];

    constructor(props) {
        super(props);
        this.movies = moviesList;
    }

    movieClick = (movie) => {
        console.log('movieClick', movie); //eslint-disable-line
    }

    sortByClick = (sortBy) => {
        this.sortBy = sortBy;
        console.log('sortByClick', sortBy); //eslint-disable-line
    }

    render() {
        return (
            <Content>
                <Navbar className="navbar-expand-lg navbar-light bg-light justify-content-between">
                    <ResultsCount moviesCount={this.movies.length}/>
                    <ResultsSort sortItems={this.sortItems} onClick={this.sortByClick} sortBy={this.sortBy}/>
                </Navbar>
                <Content>
                    <ResultsBody movies={this.movies} onMovieClick={this.movieClick}/>
                </Content>
            </Content>
        );
    }
}
