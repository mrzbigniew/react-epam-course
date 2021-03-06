/* eslint-disable prop-types */
// @flow

import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware, { END } from 'redux-saga';
import immutableTransform from 'redux-persist-transform-immutable';

import { reducer } from './reducers';
import { rootSaga } from './actions/movies';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'movies',
  storage,
  whitelist: ['movies'],
  transforms: [immutableTransform()],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const configureStore = (initialState?: StoreStateType) => {
  const store: any = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  if (!initialState) {
    sagaMiddleware.run(rootSaga);
    store.runSaga = () => sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);
  }

  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
