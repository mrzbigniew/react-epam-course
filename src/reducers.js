import {
    combineReducers
} from 'redux';
import {
    all
} from 'redux-saga/effects';

import {
    movies
} from './reducers/movies';
import movie from './reducers/movie';
import spinner from './reducers/spinner';
import search from './reducers/search';
import results from './reducers/results';

export const reducer = combineReducers({
    movie,
    movies,
    spinner,
    search,
    results
});

export default reducer;
