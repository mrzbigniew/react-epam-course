import React from 'react';

import 'bootstrap/scss/bootstrap.scss';
import ErrorBoundary from '../error-boundary/error-boundary';

import FilmSearch from './film-search/film-search';
import FilmDetails from './film-details/film-details';

import './styles/styles.scss';

export class App extends React.Component {
    render() {
        return (
            <div>
                <ErrorBoundary>
                    <FilmSearch />
                </ErrorBoundary>
                <ErrorBoundary>
                    <FilmDetails/>
                </ErrorBoundary>
            </div>
        )
    }
}

export default App;
