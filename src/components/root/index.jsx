import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '../app';

const Root = ({ store, router, location }) => (
    <Provider store={store}>
        <App router={router} location={location} />
    </Provider >
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.func,
  location: PropTypes.string,
};

App.defaultProps = {
  location: null,
  context: {},
  router: BrowserRouter,
};

export default Root;
