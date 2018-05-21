import { combineReducers } from 'redux';

import movies from './reducers/movies';
import movie from './reducers/movie';

const reducer = combineReducers(
    movie,
    movies
);

export default reducer;
