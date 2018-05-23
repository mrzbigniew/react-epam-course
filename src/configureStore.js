import { createStore, applyMiddleware, compose }  from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import  storage from 'redux-persist/lib/storage';

import rootReducer from './reducers'

const persistConfig = {
  key: 'movies',
  storage,
  whitelist: ['movies']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
    const store = createStore(
      persistedReducer,
      compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    );
    const persistor = persistStore(store);
    return { store, persistor };
}

export default configureStore;
