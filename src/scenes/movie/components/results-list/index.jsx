import React from 'react';

import ResultsBody from '../../../../components/results-body';
import Content from '../../../../components/content';
import Navbar from '../../../../components/navbar';

import ResultsGenreInfo from '../../../../components/results-genre-info';

import moviesList from '../../../../__mocks__/movies';

export default class ResultsList extends React.Component {
    movies = [];
    genre = 'drama';

    constructor(props) {
        super(props);
        this.movies = moviesList;
    }

    movieClick = (movie) => {
        console.log('movieClick', movie); // eslint-disable-line
    }

    render() {
        return (
            <Content>
                <Navbar className="navbar-expand-lg navbar-light bg-light justify-content-between">
                    <ResultsGenreInfo genre={this.genre}/>
                </Navbar>
                <Content>
                    <ResultsBody movies={this.movies} onMovieClick={this.movieClick}/>
                </Content>
            </Content>
        );
    }
}
