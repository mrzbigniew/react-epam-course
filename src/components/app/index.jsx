import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadMovies } from '../../actions/movies';
import { connect } from 'react-redux';

import ErrorBoundary from '../error-boundary';
import Movie from '../../scenes/movie';
import MovieList from '../../scenes/movie-list';
import NotFound from '../not-found';
import Cover from '../cover';

import 'bootstrap/scss/bootstrap.scss';
import './styles/reset.scss';

@connect((state) => ({
    movies: state.movies.data
}), (dispatch) => ({
    loadMovies: () => dispatch(loadMovies())
}))
export default class App extends React.Component {
    componentDidMount() {
        if (!this.props.movies.data.length) {
            this.props.loadMovies();
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={MovieList} />
                    <Route path="/search/:filter :text" component={MovieList} />
                    <Route path="/film/:id" component={Movie} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

App.propTypes = {
    loadMovies: PropTypes.func,
    movies: PropTypes.arrayOf(PropTypes.object)
}
