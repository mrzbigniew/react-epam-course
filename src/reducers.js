import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import movies, { moviesSaga } from './actions/movies';
import movie from './reducers/movie';
import spinner from './reducers/spinner';
import search from './reducers/search';
import results from './reducers/results';

const reducer = combineReducers({
    movie,
    movies,
    spinner,
    search,
    results
});

export function* rootSaga() {
    yield all([
        moviesSaga(),
    ]);
  }

export default reducer;
