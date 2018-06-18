import React from 'react'; // eslint-disable-line
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import configureStore from './configureStore';

import Root from './components/root'; // eslint-disable-line

const { store, persistor } = configureStore();

window.store = store;
window.persistor = persistor;

let router = BrowserRouter;

if (process.env === 'production') {
  router = StaticRouter;
}

const render = () => {
  ReactDOM.hydrate(
        <Root store={store} router={router} />,
        document.getElementById('app'),
  );
};

render();
