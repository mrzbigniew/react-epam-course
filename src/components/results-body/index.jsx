import React from 'react';
import PropTypes from 'prop-types';

import NoResults from '../no-results/';
import ResultsItem from '../results-item/';
import MovieItemDataModel from '../../services/models';

const ResultsBody = ({movies, onMovieClick}) => {
    return (
        <div className="results-body">
            {movies && movies.length
                ? movies.map(movie => (
                    <ResultsItem key={movie.id}
                                 poster_path={movie.poster_path}
                                 title={movie.title}
                                 genre={movie.genres[0]}
                                 release_year={movie.release_date.split('-')[0]}
                                 onClick={() => onMovieClick(movie)}
                    />))
                : <NoResults/>}
        </div>
    );
}

ResultsBody.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape(MovieItemDataModel)).isRequired,
    onMovieClick: PropTypes.func.isRequired
}

export default ResultsBody;
