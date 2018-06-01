import { combineReducers } from 'redux';
import { SET_SEARCH_RESULTS_CRITERIA, SET_SEARCH_RESULTS_DATA, SET_SEARCH_RESULTS_SORT_ORDER, SORT_BY_RELEASE_DATE } from "../actions/results";

const data = (state = [], action) => {
    switch (action.type) {
        case SET_SEARCH_RESULTS_DATA:
            return action.data;
        default:
            return state;
    }
}

const criteria = (state = {
    filter: '',
    text: ''
}, action) => {
    switch (action.type) {
        case SET_SEARCH_RESULTS_CRITERIA:
            return {
                filter: action.filter,
                text: action.text
            };
        default:
            return state;
    }
}

const sort = (state = SORT_BY_RELEASE_DATE, action) => {
    switch (action.type) {
        case SET_SEARCH_RESULTS_SORT_ORDER:
            return action.value;
        default:
            return state;
    }
}

const results = combineReducers({
    data,
    criteria,
    sort
});

export default results;
