import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import configureStore from './configureStore';

import Root from './components/root/index.jsx';

const { store, persistor } = configureStore(window.PRELOADED_STATE);

const root = (
  <Root
    Router={BrowserRouter}
    store={store}
    persistor={persistor}
  />
);

ReactDOM.hydrate(root, document.getElementById('root'));
