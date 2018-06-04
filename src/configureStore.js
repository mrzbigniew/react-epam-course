import { createStore, applyMiddleware, compose }  from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import  storage from 'redux-persist/lib/storage';
import createSagaMiddleware, { END } from 'redux-saga';

import {
  rootReducer,
  rootSaga,
} from './reducers';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'movies',
  storage,
  whitelist: ['movies']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = (initialState) => {
    const store = createStore(
      persistedReducer,
      initialState,
      applyMiddleware(thunk, sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);
    store.runSaga = () => sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);

    const persistor = persistStore(store);
    return { store, persistor };
}

export default configureStore;
