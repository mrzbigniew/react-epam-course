import React from 'react';

import MovieTitle from '../../../../components/movie-title';
import MovieCover from '../../../../components/movie-cover';
import MovieRating from '../../../../components/movie-rating';
import MovieTagline from '../../../../components/movie-tagline';
import MovieYear from '../../../../components/movie-year';
import MovieDuration from '../../../../components/movie-duration';
import MovieDescription from '../../../../components/movie-description';

import moviesList from '../../../../__mocks__/movies';

export default class MovieDetails extends React.Component {
    movie = moviesList[0];

    render() {
        return (
            <div className="movie-details">
                <div className="d-flex align-items-stretch justify-content-start m-2">
                    <div className="d-flex align-items-center justify-content-center p-3 w-25">
                        <MovieCover src={this.movie.poster_path} alt={this.movie.title} />
                    </div>
                    <div className="d-flex align-items-center p2 w-75">
                        <div className="pl-3">
                            <div className="d-flex justify-content-start">
                                <div className="mr-3">
                                    <MovieTitle title={this.movie.title}/>
                                </div>
                                <MovieRating rating={this.movie.vote_average}/>
                            </div>
                            <div>
                                <MovieTagline tagline={this.movie.tagline}/>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="mr-5">
                                    <MovieYear year={new Date(this.movie.release_date).getFullYear()}/>
                                </div>
                                <MovieDuration duration={this.movie.runtime} />
                            </div>
                            <div>
                                <MovieDescription description={this.movie.overview} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
