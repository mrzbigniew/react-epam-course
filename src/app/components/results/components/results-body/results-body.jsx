import React from 'react';
import PropTypes from 'prop-types';
import NoResults from '../no-results/no-results';
import ResultsItem from '../results-item/results-item';

import MovieItemDataModel from '../../../../../models/movie-item/movie-item.model';

const ResultsBody = ({movies}) => {
    return (
        <div>
            {movies && movies.length
                ? movies.map(movie => (<ResultsItem
                    key={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    genre={movie.genres[0]}
                    release_year={movie.release_date.split('-')[0]}
                    />))
                : <NoResults/>}
        </div>
    );
}

ResultsBody.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape(MovieItemDataModel))
}

export default ResultsBody;
