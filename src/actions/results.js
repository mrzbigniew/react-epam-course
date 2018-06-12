/* eslint-disable prop-types, no-nested-ternary */
import { SEARCH_BY_TITLE } from './search';

export const SET_SEARCH_RESULTS_DATA = 'SET_SEARCH_RESULTS_DATA';
export const SET_SEARCH_RESULTS_SORT_ORDER = 'SET_SEARCH_RESULTS_SORT_ORDER';
export const SET_SEARCH_RESULTS_CRITERIA = 'SET_SEARCH_RESULTS_CRITERIA';

export const SORT_BY_RELEASE_DATE = 'SORT_BY_RELEASE_DATE';
export const SORT_BY_RATING = 'SORT_BY_RATING';

export const getFiltered = (data, filter, text) => (filter && text
  ? (
    data.filter(movie => (
      (filter === SEARCH_BY_TITLE)
        ? (movie.title.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)
        : (movie.genres.some(genre => genre.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)
        )
    ))
  )
  : []);

export const sortResults = (data, sort) => data.sort((current, next) => {
  const currentValue = (sort === SORT_BY_RATING ? current.vote_average : current.release_date).toString().toLowerCase();
  const nextValue = (sort === SORT_BY_RATING ? next.vote_average : next.release_date).toString().toLowerCase();
  return currentValue === nextValue ? 0 : (currentValue > nextValue ? 1 : -1);
});

export const setSearchResultsSortOrder = value => ({
  type: SET_SEARCH_RESULTS_SORT_ORDER,
  value,
});
