'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxPersist = require('redux-persist');

var _storage = require('redux-persist/lib/storage');

var _storage2 = _interopRequireDefault(_storage);

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducers = require('./reducers');

var _movies = require('./actions/movies');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prop-types */
var sagaMiddleware = (0, _reduxSaga2.default)();

var persistConfig = {
  key: 'movies',
  storage: _storage2.default,
  whitelist: ['movies']
};

var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, _reducers.reducer);

var configureStore = function configureStore(initialState) {
  var store = (0, _redux.createStore)(persistedReducer, initialState, (0, _redux.applyMiddleware)(sagaMiddleware));

  if (!initialState) {
    sagaMiddleware.run(_movies.rootSaga);
    store.runSaga = function () {
      return sagaMiddleware.run(_movies.rootSaga);
    };
    store.close = function () {
      return store.dispatch(_reduxSaga.END);
    };
  }

  var persistor = (0, _reduxPersist.persistStore)(store);

  return { store: store, persistor: persistor };
};

exports.default = configureStore;