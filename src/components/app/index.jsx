import React from 'react';
import { Router as defaultRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadMovies } from '../../actions/movies';
import { connect } from 'react-redux';

import ErrorBoundary from '../error-boundary';
import Movie from '../../scenes/movie';
import MovieList from '../../scenes/movie-list';
import NotFound from '../not-found';
import Cover from '../cover';

@connect((state) => ({
    movies: state.movies.data
}))
export default class App extends React.Component {
    render() {
        const Router = this.props.router;
        return (
            <Router location={this.props.location} context={this.props.context}>
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
    movies: PropTypes.arrayOf(PropTypes.object),
    router: PropTypes.func,
    location: PropTypes.string,
    context: PropTypes.object
}

App.defaultProps = {
    location: '/',
    context: {},
    router: defaultRouter
}
