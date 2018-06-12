import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import { BrowserRouter, StaticRouter } from 'react-router-dom';

import Root from './components/root';

const { store, persistor } = configureStore();

window.store = store;
window.persistor = persistor;

let router = BrowserRouter;

if(process.env === 'production') {
    router = StaticRouter;
}

const render = () => {
    ReactDOM.hydrate(
        <Root store={store} router={router} />,
        document.getElementById('app')
    );
}

render();
