import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import App from '../app';

const Root = ({
  store, router, location, persistor,
}) => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App router={router} location={location} />
      </PersistGate>
    </Provider >
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.func,
  location: PropTypes.string,
  persistor: PropTypes.object,
};

App.defaultProps = {
  location: null,
  context: {},
  router: BrowserRouter,
};

export default Root;
