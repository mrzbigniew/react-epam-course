import React from 'react';
import PropTypes from 'prop-types';
import { loadMovies } from './actions/movies';

import ErrorBoundary from './components/error-boundary';
import { connect } from 'react-redux';

import MovieList from './scenes/movie-list';

import 'bootstrap/scss/bootstrap.scss';
import './styles/reset.scss';

import Cover from './components/cover';

@connect((state) => ({
    movies: state.movies.data
}), (dispatch) => ({
    loadMovies: () => dispatch(loadMovies())
}))
export default class App extends React.Component {
    componentDidMount() {
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
