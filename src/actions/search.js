export const SEARCH_BY_TITLE = 'SEARCH_BY_TITLE';
export const SEARCH_BY_GENRE = 'SEARCH_BY_GENRE';
export const SET_SEARCH_FILTER = 'SET_SEARCH_BY';

export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
import { SET_SEARCH_RESULTS_CRITERIA } from './results';

export const setSearchText = (text) => ({
    type: SET_SEARCH_TEXT,
    value: text
});

export const setSearchFilter = (value) => ({
    type: SET_SEARCH_FILTER,
    value: value
});

export const searchMovies = (filter, text) => ({
    type: SET_SEARCH_RESULTS_CRITERIA,
    filter,
    text
});
