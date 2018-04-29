import React from 'react';

import Logo from '../../components/logo/logo';
import Button from '../../components/button/button';
import MovieCover from '../components/movie-cover/movie-cover';
import MovieTitle from '../components/movie-title/movie-title';
import MovieRating from '../components/movie-rating/movie-rating';
import MovieTagline from '../components/movie-tagline/movie-tagline';
import MovieDescription from '../components/movie-description/movie-description';
import ResultsBody from '../components/results/components/results-body/results-body';

export default class FilmDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            movie: {
                id: 240,
                title: "The Godfather: Part II",
                tagline: "I don't feel I have to wipe everybody out, Tom. Just my enemies.",
                vote_average: 8.4,
                vote_count: 4308,
                release_date: "1974-12-20",
                poster_path: "https://image.tmdb.org/t/p/w500/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",
                overview: "In the continuing saga of the Corleone crime family, a young Vito Corleone grows" +
                        " up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to " +
                        "expand the family business into Las Vegas, Hollywood and Cuba.",
                budget: 13000000,
                revenue: 102600000,
                genres: [
                    "Drama", "Crime"
                ],
                runtime: 200
            },
            movies: [
                {
                    id: 240,
                    title: "The Godfather: Part II",
                    tagline: "I don't feel I have to wipe everybody out, Tom. Just my enemies.",
                    vote_average: 8.4,
                    vote_count: 4308,
                    release_date: "1974-12-20",
                    poster_path: "https://image.tmdb.org/t/p/w500/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",
                    overview: "In the continuing saga of the Corleone crime family, a young Vito Corleone grows" +
                        " up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to " +
                        "expand the family business into Las Vegas, Hollywood and Cuba.",
                    budget: 13000000,
                    revenue: 102600000,
                    genres: [
                        "Drama", "Crime"
                    ],
                    runtime: 200
                }
            ]
        }
    }

    returnToSearch = () => {}

    render() {
        return (
            <div className="film-details bg-light">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="col">
                            <Logo/>
                        </div>
                        <div className="col">
                            <div className="row justify-content-end">
                                <Button
                                    label="SEARCH"
                                    className="btn btn-light btn-sm"
                                    onClick={this.returnToSearch}/>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-start text-text-primary p-3">
                        <div className="col-sm-6 col-md-2">
                            <MovieCover src={this.state.movie.poster_path} alt={this.state.movie.title}/>
                        </div>
                        <div className="col-sm-6 col-md-10">
                            <div className="row no-gutters justify-content-start">
                                <div><MovieTitle title={this.state.movie.title}/></div>
                                <div className="ml-1"><MovieRating rating={this.state.vote_average}/></div>
                            </div>
                            <div>
                                <MovieTagline tagline={this.state.movie.tagline}/>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-2 font-weight-bold">{this
                                        .state
                                        .movie
                                        .release_date
                                        .split('-')[0]}</div>
                                <div className="col-2 font-weight-bold">{this.state.movie.runtime}min</div>
                            </div>
                            <div className="row no-gutters">
                                <MovieDescription description={this.state.movie.overview}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-dark text-light p-3">
                                Films by {this.state.movie.genres[0]} genre
                            </div>
                            <div>
                                <ResultsBody movies={this.state.movies} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
