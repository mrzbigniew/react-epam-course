import { combineReducers } from 'redux';
import { SET_SEARCH_RESULTS_CRITERIA, SET_SEARCH_RESULTS_DATA, SET_SEARCH_RESULTS_SORT_ORDER, SORT_BY_RELEASE_DATE, SORT_BY_RATING } from "../actions/results";
import { SEARCH_BY_TITLE } from '../actions/search';

const results = (state = {
    sort: SORT_BY_RELEASE_DATE
}, action) => {
    switch (action.type) {
        case SET_SEARCH_RESULTS_SORT_ORDER:
            return {
                sort: action.value
            }
        default:
            return state;
    }
}

export default results;
