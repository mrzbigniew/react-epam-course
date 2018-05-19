import React from 'react';

import ResultsBody from '../../../../components/results-body';
import Content from '../../../../components/content';
import Navbar from '../../../../components/navbar';

import ResultsGenreInfo from '../../../../components/results-genre-info';

import moviesList from '../../../../__mocks__/movies';

const ResultsList = () => {
    const genre = 'drama';
    const movies = moviesList;

    const movieClick = (movie) => {
        console.log('movieClick', movie); // eslint-disable-line
    }

    return (
        <Content>
            <Navbar className="navbar-expand-lg navbar-light bg-light justify-content-between">
                <ResultsGenreInfo genre={genre}/>
            </Navbar>
            <Content>
                <ResultsBody movies={movies} onMovieClick={movieClick}/>
            </Content>
        </Content>
    );
}

export default ResultsList;
