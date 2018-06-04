import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from '../app';

const Root = ({ store, persistor, router, location, context }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App router={router} location={location} />
            </PersistGate>
        </Provider>
    );
};

Root.propTypes = {
    store: PropTypes.object.isRequired,
    persistor: PropTypes.object.isRequired,
    router: PropTypes.object,
    location: PropTypes.string,
    context: PropTypes.object
}

App.defaultProps = {
    location: null,
    context: null,
}

export default Root;
