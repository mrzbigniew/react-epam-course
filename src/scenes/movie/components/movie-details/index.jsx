import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieTitle from '../../../../components/movie-title';
import MovieCover from '../../../../components/movie-cover';
import MovieRating from '../../../../components/movie-rating';
import MovieTagline from '../../../../components/movie-tagline';
import MovieYear from '../../../../components/movie-year';
import MovieDuration from '../../../../components/movie-duration';
import MovieDescription from '../../../../components/movie-description';

let MovieDetails = ({movies, match}) => {
    const movie = movies.find((movie) => movie.id.toString() === match.params.id);
    return (
        <div className="movie-details">
            <div className="d-flex align-items-stretch justify-content-start m-2">
                <div className="d-flex align-items-center justify-content-center p-3 w-25">
                    <MovieCover src={movie.poster_path} alt={movie.title} />
                </div>
                <div className="d-flex align-items-center p2 w-75">
                    <div className="pl-3">
                        <div className="d-flex justify-content-start">
                            <div className="mr-3">
                                <MovieTitle title={movie.title} />
                            </div>
                            <MovieRating rating={movie.vote_average} />
                        </div>
                        <div>
                            <MovieTagline tagline={movie.tagline} />
                        </div>
                        <div className="d-flex justify-content-start">
                            <div className="mr-5">
                                <MovieYear year={new Date(movie.release_date).getFullYear()} />
                            </div>
                            <MovieDuration duration={movie.runtime} />
                        </div>
                        <div>
                            <MovieDescription description={movie.overview} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MovieDetails.propTypes = {
    movies: PropTypes.array,
    match: PropTypes.object
};

MovieDetails = withRouter(connect(
    (state) => ({
        movies: state.movies.data.data
    })
)(MovieDetails));

export default MovieDetails;
