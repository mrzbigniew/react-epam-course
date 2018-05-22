import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';

import { loadMovies } from './actions/movies';

import Root from './root';

const { store, persistor } = configureStore();

store.dispatch(loadMovies());

const render = () => {
    ReactDOM.render(
        <Root store={store} persistor={persistor} />,
        document.getElementById('app')
    );
}

render();
