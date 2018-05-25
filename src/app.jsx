import React from 'react';
import PropTypes from 'prop-types';
import { loadMovies } from './actions/movies';
import { connect } from 'react-redux';

import ErrorBoundary from './components/error-boundary';
import MovieList from './scenes/movie-list';
import Cover from './components/cover';

import 'bootstrap/scss/bootstrap.scss';
import './styles/reset.scss';

@connect((state) => ({
    movies: state.movies.data
}), (dispatch) => ({
    loadMovies: () => dispatch(loadMovies())
}))
export default class App extends React.Component {
    componentDidMount() {
        console.log(this.props.movies);
        if (!this.props.movies.length) {
            this.props.loadMovies();
        }
    }

    render() {
        return (
            <ErrorBoundary>
                <Cover />
                <MovieList />
            </ErrorBoundary>
        );
    }

}

App.propTypes = {
    loadMovies: PropTypes.func,
    movies: PropTypes.arrayOf(PropTypes.object)
}
