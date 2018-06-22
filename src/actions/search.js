/* eslint-disable prop-types */

import { SET_SEARCH_RESULTS_CRITERIA } from './results';

export const SEARCH_BY_TITLE = 'title';
export const SEARCH_BY_GENRE = 'genre';
export const SET_SEARCH_FILTER = 'SET_SEARCH_BY';

export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';

export const setSearchText = text => ({
  type: SET_SEARCH_TEXT,
  value: text,
});

export const setSearchFilter = value => ({
  type: SET_SEARCH_FILTER,
  value,
});

export const searchMovies = (filter, text) => ({
  type: SET_SEARCH_RESULTS_CRITERIA,
  filter,
  text,
});
