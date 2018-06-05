import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import { BrowserRouter } from 'react-router-dom';

import Root from './components/root';

const { store, persistor } = configureStore(window.PRELOADED_STATE);

const root = (
  <Root
    Router={BrowserRouter}
    store={store}
    persistor={persistor}
  />
);

ReactDOM.hydrate(root, document.getElementById('root'));
