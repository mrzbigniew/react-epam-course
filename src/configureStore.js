import { createStore, applyMiddleware }  from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import  storage from 'redux-persist/lib/storage';

import rootReducer from './reducers'

const persistConfig = {
  key: 'movies',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk));
    let persistor = persistStore(store);
    return { store, persistor };
}

export default configureStore;
