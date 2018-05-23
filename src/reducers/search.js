import { combineReducers } from 'redux';

import {SEARCH_BY_TITLE, SET_SEARCH_VALUE } from '../actions/search';

const filter = (state = SEARCH_BY_TITLE, action) => {
    switch (action.type) {
        case SET_SEARCH_BY:
            return action.value;
        default:
            return state;
    }
}

const value = (state = '', action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return action.value;
        default:
            return state;
    }
}

const search = combineReducers({
    filter,
    value
});

export default search
