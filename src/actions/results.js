export const SET_SEARCH_RESULTS_DATA = 'SET_SEARCH_RESULTS_DATA';
export const SET_SEARCH_RESULTS_SORT_ORDER = 'SET_SEARCH_RESULTS_SORT_ORDER';
export const SET_SEARCH_RESULTS_CRITERIA = 'SET_SEARCH_RESULTS_CRITERIA';

export const SORT_BY_RELEASE_DATE = 'SORT_BY_RELEASE_DATE';
export const SORT_BY_RATING = 'SORT_BY_RATING';

export const setSearchResultsSortOrder = (value) => ({
    type: SET_SEARCH_RESULTS_SORT_ORDER,
    value: value
});

export const setSearchResults = (data) => ({
    type: SET_SEARCH_RESULTS_DATA,
    data: data
});

