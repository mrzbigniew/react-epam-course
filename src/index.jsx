import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';

import { loadMovies } from './actions/movies';

import Root from './root';

const { store, persistor } = configureStore();

window.store = store;
window.persistor = persistor;

const render = () => {
    ReactDOM.render(
        <Root store={store} persistor={persistor} />,
        document.getElementById('app')
    );
}

render();
