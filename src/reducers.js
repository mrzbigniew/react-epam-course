import { combineReducers } from 'redux';

import movies from './reducers/movies';
import movie from './reducers/movie';
import spinner from './reducers/spinner';
import search from './reducers/search';

const reducer = combineReducers({
    movie,
    movies,
    spinner,
    search,
    searchResults
});

export default reducer;
