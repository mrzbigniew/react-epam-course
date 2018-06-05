import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import App from '../app';

const Root = ({ store, persistor, router, location, context }) => {
    return (
        <Provider store={store}>
            <App router={router} location={location} />
        </Provider >
    );
};

Root.propTypes = {
    store: PropTypes.object.isRequired,
    persistor: PropTypes.object.isRequired,
    router: PropTypes.func,
    location: PropTypes.string,
    context: PropTypes.object
}

App.defaultProps = {
    location: null,
    context: {},
    router: BrowserRouter,
    persistor: null
}

export default Root;
