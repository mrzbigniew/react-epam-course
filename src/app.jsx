import React from 'react';
import ErrorBoundary from './components/error-boundary';

import MovieList from './scenes/movie-list';

import 'bootstrap/scss/bootstrap.scss';
import './styles/reset.scss';

const App = () => {
    return (
        <ErrorBoundary>
            <MovieList />
        </ErrorBoundary>
    );
};

export default App;
